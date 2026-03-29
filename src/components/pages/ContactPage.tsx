'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageCircle } from 'lucide-react';
import { createForm } from '@/_services/contact';

type FormState = {
    firstname: string;
    familyname: string;
    phone: string;
    email: string;
    company: string;
    message: string;
};

const initialFormState: FormState = {
    firstname: '',
    familyname: '',
    phone: '',
    email: '',
    company: '',
    message: '',
};

const ContactPage = () => {
    const locale = useLocale();
    const tr = locale === 'tr';
    const [form, setForm] = useState<FormState>(initialFormState);
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus('idle');
        try {
            const response = await createForm({ ...form, source: 'WEB' });
            if (response?.data?.code === 200) {
                setForm(initialFormState);
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = `w-full px-4 py-3 rounded-xl text-sm font-body text-[#E8EDF5] placeholder-[#3A4A5A] outline-none transition-all duration-200 focus:border-[rgba(200,145,58,0.5)]`;
    const inputStyle = {
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(200,145,58,0.15)',
    };

    return (
        <div style={{ backgroundColor: '#07090F' }} className="min-h-screen">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="section-label text-[0.6rem] mb-4">
                        {tr ? 'İLETİŞİM' : 'CONTACT'}
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-5 leading-tight">
                        {tr ? 'Birlikte ' : 'Let\'s Talk '}<span className="text-shimmer">{tr ? 'Konuşalım' : 'Together'}</span>
                    </h1>
                    <p className="text-[#6B7A90] text-lg max-w-xl mx-auto font-body">
                        {tr
                            ? 'Sorularınız, teklif talepleriniz veya teknik destek için bize ulaşın.'
                            : 'Reach out for questions, quote requests, or technical support.'}
                    </p>
                </div>
            </section>

            {/* ── Main Grid ── */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                        {/* ── Left: Info ── */}
                        <div className="lg:col-span-2 space-y-4">

                            {/* Contact info card */}
                            <div className="rounded-2xl p-7"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <p className="section-label text-[0.55rem] mb-5">
                                    {tr ? 'İLETİŞİM BİLGİLERİ' : 'CONTACT INFO'}
                                </p>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}>
                                            <Phone className="w-4 h-4 text-[#C8913A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#5A7090] text-xs font-mono uppercase tracking-wider mb-0.5">
                                                {tr ? 'Telefon' : 'Phone'}
                                            </p>
                                            <a href="tel:+902129090060"
                                                className="text-[#E8EDF5] text-sm font-body hover:text-[#C8913A] transition-colors">
                                                +90 212 909 00 60
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)' }}>
                                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                                        </div>
                                        <div>
                                            <p className="text-[#5A7090] text-xs font-mono uppercase tracking-wider mb-0.5">
                                                WhatsApp
                                            </p>
                                            <a href="https://wa.me/902129090060?text=Merhaba%2C%20OxyKeyPass%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim"
                                                target="_blank" rel="noopener noreferrer"
                                                className="text-[#25D366] text-sm font-body hover:text-[#4AE07A] transition-colors">
                                                {tr ? 'WhatsApp\'tan Yaz' : 'Message on WhatsApp'}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}>
                                            <Mail className="w-4 h-4 text-[#C8913A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#5A7090] text-xs font-mono uppercase tracking-wider mb-0.5">
                                                {tr ? 'E-posta' : 'Email'}
                                            </p>
                                            <a href="mailto:info@oxykeypass.com"
                                                className="text-[#E8EDF5] text-sm font-body hover:text-[#C8913A] transition-colors">
                                                info@oxykeypass.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(200,145,58,0.1)', border: '1px solid rgba(200,145,58,0.2)' }}>
                                            <MapPin className="w-4 h-4 text-[#C8913A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#5A7090] text-xs font-mono uppercase tracking-wider mb-0.5">
                                                {tr ? 'Adres' : 'Address'}
                                            </p>
                                            <p className="text-[#E8EDF5] text-sm font-body">
                                                Bahçelievler Mah. İzzettin Çalışlar Cad. No:35/12 Bahçelievler/İstanbul
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Working hours card */}
                            <div className="rounded-2xl p-7"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <div className="flex items-center gap-3 mb-5">
                                    <Clock className="w-4 h-4 text-[#C8913A]" />
                                    <p className="section-label text-[0.55rem]">
                                        {tr ? 'ÇALIŞMA SAATLERİ' : 'WORKING HOURS'}
                                    </p>
                                </div>
                                <div className="space-y-2.5">
                                    {[
                                        {
                                            dayTr: 'Pazartesi – Cuma',
                                            dayEn: 'Monday – Friday',
                                            hoursTr: '09:00 – 18:00',
                                            hoursEn: '09:00 – 18:00',
                                        },
                                        {
                                            dayTr: 'Cumartesi',
                                            dayEn: 'Saturday',
                                            hoursTr: '10:00 – 14:00',
                                            hoursEn: '10:00 – 14:00',
                                        },
                                        {
                                            dayTr: 'Pazar',
                                            dayEn: 'Sunday',
                                            hoursTr: 'Kapalı',
                                            hoursEn: 'Closed',
                                        },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <span className="text-[#6B7A90] text-sm font-body">{tr ? row.dayTr : row.dayEn}</span>
                                            <span className={`text-sm font-mono ${i === 2 ? 'text-[#3A4555]' : 'text-[#C8913A]'}`}>
                                                {tr ? row.hoursTr : row.hoursEn}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl p-8"
                                style={{ backgroundColor: '#0D1117', border: '1px solid rgba(200,145,58,0.12)' }}>
                                <p className="section-label text-[0.55rem] mb-6">
                                    {tr ? 'MESAJ GÖNDER' : 'SEND MESSAGE'}
                                </p>

                                {/* Status messages */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 rounded-xl flex items-center gap-3"
                                        style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <p className="text-green-400 text-sm font-body">
                                            {tr
                                                ? 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
                                                : 'Your message was sent successfully. We\'ll get back to you shortly.'}
                                        </p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 rounded-xl flex items-center gap-3"
                                        style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                        <p className="text-red-400 text-sm font-body">
                                            {tr
                                                ? 'Bir hata oluştu. Lütfen tekrar deneyin.'
                                                : 'An error occurred. Please try again.'}
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={form.firstname}
                                            onChange={handleChange}
                                            placeholder={tr ? 'Ad' : 'First name'}
                                            required
                                            className={inputClass}
                                            style={inputStyle}
                                        />
                                        <input
                                            type="text"
                                            name="familyname"
                                            value={form.familyname}
                                            onChange={handleChange}
                                            placeholder={tr ? 'Soyad' : 'Last name'}
                                            required
                                            className={inputClass}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder={tr ? 'Telefon' : 'Phone'}
                                            required
                                            className={inputClass}
                                            style={inputStyle}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder={tr ? 'E-posta' : 'Email'}
                                            required
                                            className={inputClass}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder={tr ? 'Şirket (opsiyonel)' : 'Company (optional)'}
                                        className={inputClass}
                                        style={inputStyle}
                                    />
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder={tr ? 'Mesajınız...' : 'Your message...'}
                                        required
                                        className={`${inputClass} resize-none`}
                                        style={inputStyle}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold font-body transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#C8913A', color: '#07090F' }}
                                    >
                                        <Send className="w-4 h-4" />
                                        {loading
                                            ? (tr ? 'Gönderiliyor...' : 'Sending...')
                                            : (tr ? 'Mesaj Gönder' : 'Send Message')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
