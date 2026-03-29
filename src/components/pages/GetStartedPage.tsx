'use client';

import { useState, useRef, FormEvent, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { PANELS } from '@/oxyConfig';
import {
    Building2, CheckCircle, ArrowRight,
    ChevronLeft, ChevronRight, Loader2, AlertCircle, LayoutDashboard,
} from 'lucide-react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4005/siteapi';

const SETUP_FEE = 4999;

type Plan = { _id: string; key: string; label: string; pricePerMonth: number; unitLimit: number | null };

const PANEL_TYPES = [
    { key: 'site', icon: Building2, labelTr: 'Site Yönetim Paneli', labelEn: 'Site Management Panel', tagTr: 'SITE', descTr: 'Siteler, taşınmazlar, kiracılar ve erişim kontrolü', descEn: 'Sites, units, tenants and access control' },
];

type Step = 'panel' | 'account' | 'verify' | 'setup' | 'cost' | 'pay';

const PROGRESS_STEPS: Step[] = ['account', 'verify', 'setup', 'cost', 'pay'];

const tr = (a: string, b: string, locale: string) => locale === 'tr' ? a : b;

const inputCls = [
    'w-full px-4 py-3 rounded-xl text-sm font-body',
    'bg-[#0D1117] border border-[rgba(200,145,58,0.15)] text-[#F0EDE8] placeholder-[#3A4555]',
    'focus:outline-none focus:border-[rgba(200,145,58,0.5)] transition-colors',
].join(' ');

const labelCls = 'block text-[0.65rem] font-mono text-[#6B7A90] mb-1.5 uppercase tracking-widest';

function setCookieCrossDomain(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    // Set for current domain
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    // Also try root domain for cross-subdomain access
    const parts = window.location.hostname.split('.');
    if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join('.');
        document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${rootDomain}`;
    }
}

const GetStartedPage = () => {
    const locale = useLocale();
    const l = locale;

    const [step, setStep] = useState<Step>('panel');
    const [panelType] = useState<string>('site');
    const [plans, setPlans] = useState<Plan[]>([]);
    const [form, setForm] = useState({
        firstname: '', familyname: '', email: '', password: '', passwordConfirm: '',
        companyName: '', siteName: '', sitePlanId: '',
    });

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        fetch(`${API}/subscription/plans`)
            .then(r => r.json())
            .then(d => {
                if (d.code === 200 && d.data?.length) {
                    setPlans(d.data);
                    setForm(prev => ({ ...prev, sitePlanId: d.data[0]._id }));
                }
            })
            .catch(() => {});
    }, []);
    const [merchantOid, setMerchantOid] = useState('');
    const [paytrToken, setPaytrToken] = useState('');
    const [isMock, setIsMock] = useState(false);
    const [costData, setCostData] = useState<{ setupFee: number; monthlyFee: number; total: number } | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const codeRefs = useRef<(HTMLInputElement | null)[]>([]);

    const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm(prev => ({ ...prev, [key]: e.target.value }));

    const stepIdx = PROGRESS_STEPS.indexOf(step);

    // API helpers
    const post = async (path: string, body: object, tok?: string) => {
        const res = await fetch(`${API}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(tok ? { Authorization: `Bearer ${tok}` } : {}),
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    // Step handlers
    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        if (form.password !== form.passwordConfirm) { setError(tr('Şifreler eşleşmiyor', 'Passwords do not match', l)); return; }
        if (form.password.length < 6) { setError(tr('Şifre en az 6 karakter', 'Password must be at least 6 characters', l)); return; }
        setLoading(true);
        try {
            const data = await post('/panel-user/register', {
                firstname: form.firstname, familyname: form.familyname,
                email: form.email, password: form.password,
            });
            if (data.code === 200 && data.data?.userId) {
                setUserId(data.data.userId);
                setStep('verify');
            } else if (data.code === 409 || /kayıtlı|exists|registered/i.test(data.message || '')) {
                // Email zaten kayıtlı — şifre ile devam modu
                setEmailExists(true);
                setError('');
            } else {
                setError(data.message || tr('Kayıt sırasında hata oluştu', 'Registration failed', l));
            }
        } catch { setError(tr('Bağlantı hatası', 'Connection error', l)); }
        finally { setLoading(false); }
    };

    const handleLoginExisting = async (e: FormEvent) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            const data = await post('/panel-user/login', { username: form.email, password: form.password });
            if (data.code === 200 && data.data?.token) {
                const user = data.data.user;
                const hasCompany = !!(user?.companyId || user?.companyType || user?.company_type);
                if (hasCompany) {
                    // Firma zaten var — kurulum zaten tamamlanmış
                    setError(tr(
                        'Bu e-posta zaten bir firmaya kayıtlı. Panele giriş yapın.',
                        'This email is already registered to a company. Please log in to the panel.',
                        l
                    ));
                } else {
                    // Firma yok — setup adımına geç
                    setToken(data.data.token);
                    setCookieCrossDomain('okp_token', data.data.token, 7);
                    setEmailExists(false);
                    setStep('setup');
                }
            } else {
                setError(data.message || tr('Şifre hatalı', 'Incorrect password', l));
            }
        } catch { setError(tr('Bağlantı hatası', 'Connection error', l)); }
        finally { setLoading(false); }
    };

    const handleCodeInput = (i: number, val: string) => {
        if (!/^\d?$/.test(val)) return;
        const next = [...code]; next[i] = val; setCode(next);
        if (val && i < 5) codeRefs.current[i + 1]?.focus();
    };
    const handleCodeKeyDown = (i: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[i] && i > 0) codeRefs.current[i - 1]?.focus();
    };

    const handleVerify = async (e: FormEvent) => {
        e.preventDefault();
        const fullCode = code.join('');
        if (fullCode.length < 6) { setError(tr('Kodu eksiksiz girin', 'Enter the full code', l)); return; }
        setError(''); setLoading(true);
        try {
            const data = await post('/panel-user/verify-email', { userId, code: fullCode });
            if (data.code === 200 && data.data?.token) {
                setToken(data.data.token);
                setCookieCrossDomain('okp_token', data.data.token, 7);
                setStep('setup');
            } else {
                setError(data.message || tr('Doğrulama başarısız', 'Verification failed', l));
            }
        } catch { setError(tr('Bağlantı hatası', 'Connection error', l)); }
        finally { setLoading(false); }
    };

    const handleSetupNext = (e: FormEvent) => {
        e.preventDefault(); setError('');
        if (!form.companyName.trim()) { setError(tr('Firma adı zorunlu', 'Company name required', l)); return; }
        if (!form.siteName.trim()) { setError(tr('Site adı zorunlu', 'Site name required', l)); return; }
        const plan = plans.find(p => p._id === form.sitePlanId)!;
        setCostData({ setupFee: SETUP_FEE, monthlyFee: plan.pricePerMonth, total: SETUP_FEE + plan.pricePerMonth });
        setStep('cost');
    };

    const handleGetPaymentToken = async () => {
        setError(''); setLoading(true);
        try {
            const data = await post('/payment/setup-token', {
                setup: { companyName: form.companyName, siteName: form.siteName, planKey: plans.find(p => p._id === form.sitePlanId)?.key },
            }, token);
            if (data.code === 200 && data.data) {
                setMerchantOid(data.data.merchant_oid);
                setIsMock(!!data.data.mock);
                setPaytrToken(data.data.token || '');
                setStep('pay');
            } else {
                setError(data.message || tr('Ödeme başlatılamadı', 'Payment could not be started', l));
            }
        } catch { setError(tr('Bağlantı hatası', 'Connection error', l)); }
        finally { setLoading(false); }
    };

    const handleMockApprove = async () => {
        setError(''); setLoading(true);
        try {
            const data = await post('/payment/mock-approve', { merchant_oid: merchantOid }, token);
            if (data.code === 200) {
                window.location.href = PANELS[0].href + '/dashboard';
            } else {
                setError(data.message || tr('Ödeme onaylanamadı', 'Payment could not be approved', l));
            }
        } catch { setError(tr('Bağlantı hatası', 'Connection error', l)); }
        finally { setLoading(false); }
    };

    const stepTitles: Record<Step, string> = {
        panel:   tr('Panel Seç', 'Select Panel', l),
        account: tr('Hesap Oluştur', 'Create Account', l),
        verify:  tr('E-posta Doğrulama', 'Email Verification', l),
        setup:   tr('Firma & Site', 'Company & Site', l),
        cost:    tr('Ödeme Özeti', 'Payment Summary', l),
        pay:     tr('Ödeme', 'Payment', l),
    };

    const stepDescs: Record<Step, string> = {
        panel:   tr('Hangi panel için kayıt olmak istiyorsunuz?', 'Which panel would you like to register for?', l),
        account: tr('Kişisel bilgilerinizi girin.', 'Enter your personal information.', l),
        verify:  tr(`${form.email} adresine gönderilen 6 haneli kodu girin.`, `Enter the 6-digit code sent to ${form.email}.`, l),
        setup:   tr('Yönetim firmanızı ve ilk sitenizi tanımlayın.', 'Define your management company and first site.', l),
        cost:    tr('Kurulum ve ilk ay ödemesini onaylayın.', 'Confirm the setup and first month payment.', l),
        pay:     isMock ? tr('Test modunda ödemeyi simüle edin.', 'Simulate payment in test mode.', l) : tr('Ödemeyi tamamlayın.', 'Complete the payment.', l),
    };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#07090F' }}>
            {/* Blueprint bg */}
            <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,145,58,0.1) 0%, transparent 60%)',
            }} />
            <div className="scan-line" style={{ opacity: 0.3 }} />

            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-16">

                {/* Progress bar (shown after panel selection) */}
                {step !== 'panel' && (
                    <div className="w-full max-w-lg mb-8">
                        <div className="flex items-center justify-between mb-3">
                            {PROGRESS_STEPS.map((s, i) => {
                                const done = i < stepIdx;
                                const active = i === stepIdx;
                                return (
                                    <div key={s} className="flex items-center flex-1">
                                        <div
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-all duration-300"
                                            style={{
                                                backgroundColor: done ? 'rgba(200,145,58,0.2)' : active ? '#C8913A' : 'rgba(200,145,58,0.07)',
                                                border: `1px solid ${done || active ? 'rgba(200,145,58,0.6)' : 'rgba(200,145,58,0.15)'}`,
                                                color: active ? '#07090F' : done ? '#C8913A' : '#3A4555',
                                            }}
                                        >
                                            {done ? <CheckCircle className="w-3.5 h-3.5" /> : i + 1}
                                        </div>
                                        {i < PROGRESS_STEPS.length - 1 && (
                                            <div className="flex-1 h-px mx-1 transition-colors duration-300"
                                                style={{ backgroundColor: done ? 'rgba(200,145,58,0.4)' : 'rgba(200,145,58,0.1)' }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Card */}
                <div className="w-full max-w-lg rounded-2xl p-8 relative overflow-hidden"
                    style={{
                        backgroundColor: '#0D1117',
                        border: '1px solid rgba(200,145,58,0.2)',
                        boxShadow: '0 0 80px rgba(200,145,58,0.07)',
                    }}>
                    <div className="absolute inset-0 pointer-events-none" style={{
                        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,145,58,0.05), transparent)'
                    }} />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-7">
                            {step !== 'panel' && (
                                <button
                                    onClick={() => {
                                        const prev: Record<Step, Step> = { panel: 'panel', account: 'panel', verify: 'account', setup: 'verify', cost: 'setup', pay: 'cost' };
                                        setError('');
                                        setStep(prev[step]);
                                    }}
                                    className="flex items-center gap-1 text-[#6B7A90] hover:text-[#C8913A] transition-colors text-sm font-body mb-4"
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                    {tr('Geri', 'Back', l)}
                                </button>
                            )}
                            <div className="section-label mb-2 text-[0.55rem]">
                                OxyKeyPass / {tr('Kurulum', 'Setup', l)}
                            </div>
                            <h2 className="font-heading font-bold text-2xl text-[#F0EDE8] mb-1">
                                {stepTitles[step]}
                            </h2>
                            <p className="text-sm font-body text-[#6B7A90]">
                                {stepDescs[step]}
                            </p>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mb-5 flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm font-body"
                                style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                {error}
                            </div>
                        )}

                        {/* ── STEP: Panel tipi ── */}
                        {step === 'panel' && (
                            <div className="space-y-3">
                                {PANEL_TYPES.map(pt => {
                                    const Icon = pt.icon;
                                    return (
                                        <div
                                            key={pt.key}
                                            className="flex items-center gap-4 p-5 rounded-xl"
                                            style={{
                                                backgroundColor: 'rgba(200,145,58,0.08)',
                                                border: '1px solid rgba(200,145,58,0.4)',
                                            }}
                                        >
                                            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: 'rgba(200,145,58,0.15)', border: '1px solid rgba(200,145,58,0.25)' }}>
                                                <Icon className="w-5 h-5 text-[#C8913A]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[#F0EDE8] font-body font-semibold text-sm">
                                                    {tr(pt.labelTr, pt.labelEn, l)}
                                                </div>
                                                <div className="text-[#6B7A90] text-xs font-body mt-0.5">
                                                    {tr(pt.descTr, pt.descEn, l)}
                                                </div>
                                            </div>
                                            <CheckCircle className="w-4 h-4 text-[#C8913A] flex-shrink-0" />
                                        </div>
                                    );
                                })}

                                <button
                                    onClick={() => setStep('account')}
                                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold font-body text-sm mt-2 transition-all duration-200 glow-gold-sm"
                                    style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A8751F')}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8913A')}
                                >
                                    {tr('Başla', 'Get Started', l)}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* ── STEP: Hesap ── */}
                        {step === 'account' && !emailExists && (
                            <form onSubmit={handleRegister} className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className={labelCls}>{tr('Ad', 'First Name', l)}</label>
                                        <input type="text" required value={form.firstname} onChange={set('firstname')}
                                            placeholder={tr('Ahmet', 'John', l)} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>{tr('Soyad', 'Last Name', l)}</label>
                                        <input type="text" required value={form.familyname} onChange={set('familyname')}
                                            placeholder={tr('Yılmaz', 'Doe', l)} className={inputCls} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>{tr('E-Posta', 'Email', l)}</label>
                                    <input type="email" required value={form.email} onChange={set('email')}
                                        placeholder="ornek@sirket.com" className={inputCls} />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className={labelCls}>{tr('Şifre', 'Password', l)}</label>
                                        <input type="password" required value={form.password} onChange={set('password')}
                                            placeholder="••••••••" className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>{tr('Şifre Tekrar', 'Confirm', l)}</label>
                                        <input type="password" required value={form.passwordConfirm} onChange={set('passwordConfirm')}
                                            placeholder="••••••••" className={inputCls} />
                                    </div>
                                </div>
                                <Btn loading={loading} label={tr('Devam Et', 'Continue', l)} />
                            </form>
                        )}

                        {/* ── STEP: Hesap — email kayıtlı, şifre ile devam ── */}
                        {step === 'account' && emailExists && (
                            <form onSubmit={handleLoginExisting} className="space-y-4">
                                <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm font-body"
                                    style={{ backgroundColor: 'rgba(200,145,58,0.07)', border: '1px solid rgba(200,145,58,0.2)', color: '#C8913A' }}>
                                    {tr(
                                        'Bu e-posta zaten kayıtlı. Şifrenizi girerek kuruluma devam edebilirsiniz.',
                                        'This email is already registered. Enter your password to continue setup.',
                                        l
                                    )}
                                </div>
                                <div>
                                    <label className={labelCls}>{tr('E-Posta', 'Email', l)}</label>
                                    <input type="email" value={form.email} readOnly
                                        className={inputCls} style={{ opacity: 0.6, cursor: 'not-allowed' }} />
                                </div>
                                <div>
                                    <label className={labelCls}>{tr('Şifre', 'Password', l)}</label>
                                    <input type="password" required value={form.password} onChange={set('password')}
                                        placeholder="••••••••" className={inputCls} autoFocus />
                                </div>
                                <Btn loading={loading} label={tr('Devam Et', 'Continue', l)} />
                                <button type="button" onClick={() => { setEmailExists(false); setError(''); }}
                                    className="w-full text-xs font-body text-[#6B7A90] hover:text-[#C8913A] transition-colors">
                                    {tr('← Farklı e-posta kullan', '← Use a different email', l)}
                                </button>
                            </form>
                        )}

                        {/* ── STEP: Doğrulama ── */}
                        {step === 'verify' && (
                            <form onSubmit={handleVerify} className="space-y-6">
                                <div className="flex justify-center gap-2">
                                    {code.map((c, i) => (
                                        <input
                                            key={i}
                                            ref={el => { codeRefs.current[i] = el; }}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={c}
                                            onChange={e => handleCodeInput(i, e.target.value)}
                                            onKeyDown={e => handleCodeKeyDown(i, e)}
                                            className="w-12 h-14 text-center text-xl font-bold font-mono rounded-xl border text-[#F0EDE8] focus:outline-none transition-colors"
                                            style={{
                                                backgroundColor: '#07090F',
                                                borderColor: c ? 'rgba(200,145,58,0.5)' : 'rgba(200,145,58,0.15)',
                                            }}
                                        />
                                    ))}
                                </div>
                                <Btn loading={loading} label={tr('Doğrula', 'Verify', l)} />
                            </form>
                        )}

                        {/* ── STEP: Firma & Site ── */}
                        {step === 'setup' && (
                            <form onSubmit={handleSetupNext} className="space-y-4">
                                <div>
                                    <label className={labelCls}>{tr('Firma Adı', 'Company Name', l)}</label>
                                    <input type="text" required value={form.companyName} onChange={set('companyName')}
                                        placeholder={tr('Güneş Site Yönetim A.Ş.', 'Sunrise Site Management LLC', l)}
                                        className={inputCls} />
                                </div>
                                <div>
                                    <label className={labelCls}>{tr('Site Adı', 'Site Name', l)}</label>
                                    <input type="text" required value={form.siteName} onChange={set('siteName')}
                                        placeholder={tr('Güneş Sitesi', 'Sunrise Residence', l)}
                                        className={inputCls} />
                                </div>
                                <div>
                                    <label className={labelCls}>{tr('Abonelik Paketi', 'Subscription Plan', l)}</label>
                                    <div className="space-y-2 mt-1">
                                        {plans.length === 0 && (
                                            <div className="flex items-center justify-center py-6">
                                                <Loader2 className="w-4 h-4 animate-spin text-[#C8913A]" />
                                            </div>
                                        )}
                                        {plans.map(p => {
                                            const sel = form.sitePlanId === p._id;
                                            return (
                                                <button key={p._id} type="button"
                                                    onClick={() => setForm(prev => ({ ...prev, sitePlanId: p._id }))}
                                                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all duration-200"
                                                    style={{
                                                        backgroundColor: sel ? 'rgba(200,145,58,0.1)' : '#07090F',
                                                        borderColor: sel ? 'rgba(200,145,58,0.4)' : 'rgba(200,145,58,0.1)',
                                                    }}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        {sel && <CheckCircle className="w-3.5 h-3.5 text-[#C8913A]" />}
                                                        <span className={`font-body font-medium ${sel ? 'text-[#F0EDE8]' : 'text-[#6B7A90]'}`}>
                                                            {p.label}
                                                        </span>
                                                    </div>
                                                    <div className="text-right">
                                                        {p.unitLimit && <span className="block text-[0.65rem] text-[#4A5A6A] font-mono">{p.unitLimit} konut</span>}
                                                        <span className={`text-xs font-mono ${sel ? 'text-[#C8913A]' : 'text-[#4A5A6A]'}`}>
                                                            ₺{p.pricePerMonth.toLocaleString('tr-TR')}/{tr('ay', 'mo', l)}
                                                        </span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Btn loading={loading} label={tr('Ödeme Özetini Gör', 'View Payment Summary', l)} />
                            </form>
                        )}

                        {/* ── STEP: Maliyet özeti ── */}
                        {step === 'cost' && costData && (
                            <div className="space-y-4">
                                <div className="rounded-xl overflow-hidden"
                                    style={{ border: '1px solid rgba(200,145,58,0.15)' }}>
                                    <Row
                                        label={tr('Kurulum ücreti', 'Setup fee', l)}
                                        value={`₺${costData.setupFee.toLocaleString('tr-TR')}`}
                                    />
                                    <Row
                                        label={`${plans.find(p => p._id === form.sitePlanId)?.label ?? ''} — 1 ${tr('aylık', 'month', l)}`}
                                        value={`₺${costData.monthlyFee.toLocaleString('tr-TR')}`}
                                    />
                                    <div className="flex justify-between items-center px-4 py-3.5"
                                        style={{ backgroundColor: 'rgba(200,145,58,0.07)', borderTop: '1px solid rgba(200,145,58,0.15)' }}>
                                        <span className="text-sm font-semibold font-body text-[#F0EDE8]">{tr('Toplam', 'Total', l)}</span>
                                        <span className="text-base font-bold font-mono text-[#C8913A]">
                                            ₺{costData.total.toLocaleString('tr-TR')}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs font-mono text-[#4A5A6A] text-center">
                                    {form.siteName} · {plans.find(p => p._id === form.sitePlanId)?.label ?? ''}
                                </p>
                                <Btn loading={loading} label={tr('Ödemeye Geç', 'Proceed to Payment', l)}
                                    onClick={handleGetPaymentToken} type="button" />
                            </div>
                        )}

                        {/* ── STEP: Ödeme ── */}
                        {step === 'pay' && (
                            <div className="space-y-4">
                                {isMock ? (
                                    <>
                                        <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-body text-center justify-center"
                                            style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', color: '#FDE68A' }}>
                                            {tr('Test modu — gerçek ödeme alınmaz', 'Test mode — no real payment', l)}
                                        </div>
                                        <Btn loading={loading} label={tr('Ödemeyi Onayla (Test)', 'Approve Payment (Test)', l)}
                                            onClick={handleMockApprove} type="button" />
                                    </>
                                ) : (
                                    <iframe
                                        src={`https://www.paytr.com/odeme/guvenli/${paytrToken}`}
                                        className="w-full rounded-xl"
                                        style={{ height: 480, border: '1px solid rgba(200,145,58,0.15)' }}
                                        title="PayTR"
                                    />
                                )}
                            </div>
                        )}

                        {/* Login link on account step */}
                        {step === 'account' && (
                            <p className="mt-5 text-sm font-body text-[#4A5A6A] text-center">
                                {tr('Zaten hesabınız var mı?', 'Already have an account?', l)}{' '}
                                <a href={PANELS[0].href + '/login'} className="text-[#C8913A] hover:text-[#A8751F] transition-colors">
                                    {tr('Giriş yapın', 'Log in', l)}
                                </a>
                            </p>
                        )}
                    </div>
                </div>

                <p className="relative mt-8 text-xs font-mono text-[#2A3545]">
                    © {new Date().getFullYear()} OxyKeyPass
                </p>
            </div>
        </div>
    );
};

// Sub-components
const Btn = ({
    loading, label, onClick, type = 'submit',
}: { loading?: boolean; label: string; onClick?: () => void; type?: 'submit' | 'button' }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold font-body text-sm mt-1 transition-all duration-200 disabled:opacity-50 glow-gold-sm"
        style={{ backgroundColor: '#C8913A', color: '#07090F' }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A8751F'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C8913A'; }}
    >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>{label} <ChevronRight className="w-4 h-4" /></>}
    </button>
);

const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center px-4 py-3"
        style={{ borderBottom: '1px solid rgba(200,145,58,0.1)', backgroundColor: '#07090F' }}>
        <span className="text-sm font-body text-[#6B7A90]">{label}</span>
        <span className="text-sm font-mono text-[#F0EDE8]">{value}</span>
    </div>
);

export default GetStartedPage;
