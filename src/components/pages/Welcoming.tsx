import { Key, QrCode, Shield, Cloud, BarChart3, ArrowRight, CheckCircle, TrendingUp, Award, Settings } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { getLocalizedPath } from "@/utils/routes";

const Welcoming = () => {
    const t = useTranslations("welcoming");
    const locale = useLocale();

    const features = [
        {
            icon: Key,
            title: t("features.digitalAccess"),
            description: t("features.digitalAccessDesc")
        },
        {
            icon: QrCode,
            title: t("features.qrIntegration"),
            description: t("features.qrIntegrationDesc")
        },
        {
            icon: Shield,
            title: t("features.securityControl"),
            description: t("features.securityControlDesc")
        },
        {
            icon: BarChart3,
            title: t("features.dataAnalytics"),
            description: t("features.dataAnalyticsDesc")
        }
    ];

    const stats = [
        { number: '100+', label: t("stats.businesses") },
        { number: '50K+', label: t("stats.dailyAccess") },
        { number: '24/7', label: t("stats.security") },
        { number: '2', label: t("stats.systemModels") }
    ];

    const benefits = [
        t("benefits.cloudHybrid"),
        t("benefits.easyIntegration"),
        t("benefits.realTimeData"),
        t("benefits.roleBasedAccess"),
        t("benefits.costSavings"),
        t("benefits.gdprCompliant")
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-gray via-white to-gray-50 py-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-light rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-corporate-gray-dark rounded-full opacity-10 animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/logo.svg" 
                                alt="OxyKeyPass Logo" 
                                width={250} 
                                height={40}
                                className="text-white"
                            />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
                            {t("welcome")}
                        </h1>
                        <p className="text-2xl text-corporate-gray-dark mb-4 font-medium font-heading">{t("subtitle")}</p>
                        <p className="text-lg text-corporate-gray max-w-3xl mx-auto leading-relaxed mb-12 font-body">
                            {t("description")}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <a
                                href={getLocalizedPath("services", locale)}
                                className="px-10 py-4 bg-navy text-white rounded-xl font-semibold hover:bg-navy-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                            >
                                {t("getStarted")}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href={getLocalizedPath("contact", locale)}
                                className="px-10 py-4 bg-white text-navy border-2 border-navy rounded-xl font-semibold hover:bg-corporate-gray transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {t("learnMore")}
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                                    <div className="text-corporate-gray-dark">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-heading">
                            {t("whyOxyKeyPass.title")}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                            {t("whyOxyKeyPass.desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-heading">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-body">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                {t("advantages.title")}
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t("advantages.desc")}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-2xl">
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                    <TrendingUp className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {locale === 'tr' ? 'Başarı Garantisi' : 'Success Guarantee'}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {locale === 'tr' 
                                        ? 'Müşterilerimizin %95\'i ilk ay içinde olumlu sonuçlar alıyor'
                                        : '95% of our customers get positive results within the first month'
                                    }
                                </p>
                                <div className="flex items-center justify-center text-blue-600 font-semibold">
                                    <Award className="w-5 h-5 mr-2" />
                                    {locale === 'tr' ? 'Güvenilir Platform' : 'Trusted Platform'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-heading">
                            {t("whatWeDo.title")}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                            {t("whatWeDo.desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Digital Access Management */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <Key className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 font-heading">
                                {t("services.digitalAccessManagement")}
                            </h3>
                            <p className="text-gray-600 mb-4 font-body">
                                {t("services.digitalAccessManagementDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.digitalAccessManagementItems.cardBased")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.digitalAccessManagementItems.qrIntegration")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.digitalAccessManagementItems.mobileApp")}
                                </li>
                            </ul>
                        </div>

                        {/* System Integration */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 font-heading">
                                {t("services.systemIntegration")}
                            </h3>
                            <p className="text-gray-600 mb-4 font-body">
                                {t("services.systemIntegrationDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.systemIntegrationItems.existingIntegration")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.systemIntegrationItems.motherboardReplacement")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.systemIntegrationItems.lowCost")}
                                </li>
                            </ul>
                        </div>

                        {/* Data Analytics */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {t("services.dataAnalyticsReporting")}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {t("services.dataAnalyticsReportingDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.dataAnalyticsReportingItems.realTimeRecording")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.dataAnalyticsReportingItems.detailedReports")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.dataAnalyticsReportingItems.statisticalAnalysis")}
                                </li>
                            </ul>
                        </div>

                        {/* Security Management */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {t("services.securityManagement")}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {t("services.securityManagementDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.securityManagementItems.authorizationControl")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.securityManagementItems.roleBasedAccess")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.securityManagementItems.breachPrevention")}
                                </li>
                            </ul>
                        </div>

                        {/* Cloud & Hybrid Systems */}
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <Cloud className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {t("services.cloudHybridSystems")}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {t("services.cloudHybridSystemsDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.cloudHybridSystemsItems.fullCloud")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.cloudHybridSystemsItems.hybrid")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.cloudHybridSystemsItems.flexibleSolutions")}
                                </li>
                            </ul>
                        </div>

                        {/* Cost Savings */}
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {t("services.costSavings")}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {t("services.costSavingsDesc")}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.costSavingsItems.noPhysicalCardCost")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.costSavingsItems.noAdditionalHardware")}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    {t("services.costSavingsItems.lowMaintenanceCost")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {t("cta.getStartedToday")}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {t("cta.getStartedDesc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={getLocalizedPath("contact", locale)}
                            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {t("cta.freeConsultation")}
                </a>
                <a
                            href={getLocalizedPath("services", locale)}
                            className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                        >
                            {t("cta.viewServices")}
                </a>
            </div>
                </div>
            </section>
        </div>
    );
};

export default Welcoming;
