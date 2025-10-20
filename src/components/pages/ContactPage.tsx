'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    firstname: "",
    familyname: "",
    phone: "",
    email: "",
    company: "",
    message: ""
};

const ContactPage = () => {
    const t = useTranslations("contact");
    const locale = useLocale();
    const [form, setForm] = useState<FormState>(initialFormState);
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus('idle');

        try {
            const response = await createForm({
                ...form,
                source: 'WEB'
            });

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading">
                            {t("info.phone")}
                        </h2>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-navy p-3 rounded-xl">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-body">
                                        {t("info.phone")}
                                    </h3>
                                    <a 
                                        href="tel:+905344818932" 
                                        className="text-corporate-gray-dark hover:text-navy transition-colors font-body"
                                    >
                                        0534 481 89 32
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-navy p-3 rounded-xl">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-body">
                                        {t("info.email")}
                                    </h3>
                                    <a 
                                        href="mailto:info@oxykeypass.com" 
                                        className="text-corporate-gray-dark hover:text-navy transition-colors font-body"
                                    >
                                        info@oxykeypass.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-navy p-3 rounded-xl">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-body">
                                        {t("info.address")}
                                    </h3>
                                    <p className="text-corporate-gray-dark font-body">
                                        Izzettin Çalışlar Cad. No:35/12 Bahçelievler Istanbul
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                            <h3 className="font-semibold text-gray-900 mb-3 font-heading">
                                {t("info.workingHours")}
                            </h3>
                            <div className="space-y-2 text-corporate-gray-dark font-body">
                                <p>{t("info.weekdays")}</p>
                                <p>{t("info.saturday")}</p>
                                <p>{t("info.sunday")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading">
                            {locale === 'tr' ? 'Bize Mesaj Gönderin' : 'Send Us a Message'}
                        </h2>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <p className="text-green-800 font-body">
                                    {t("form.success")}
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <p className="text-red-800 font-body">
                                    {t("form.error")}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={form.firstname}
                                        onChange={handleChange}
                                        placeholder={t("form.firstName")}
                                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all font-body"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="familyname"
                                        value={form.familyname}
                                        onChange={handleChange}
                                        placeholder={t("form.lastName")}
                                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all font-body"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder={t("form.phone")}
                                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all font-body"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder={t("form.email")}
                                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all font-body"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Company */}
                            <div>
                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder={t("form.company")}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all font-body"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t("form.message")}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all resize-none font-body"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed font-body"
                            >
                                <Send className="w-5 h-5" />
                                <span>
                                    {loading 
                                        ? t("form.sending")
                                        : t("form.send")
                                    }
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;