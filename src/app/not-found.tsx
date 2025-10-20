import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-2xl w-full">
            {/* Logo Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-navy rounded-2xl mb-6 shadow-lg">
                <Image 
                  src="/logo.svg" 
                  alt="OxyKeyPass Logo" 
                  width={40} 
                  height={40}
                  className="text-white"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2 font-heading">OxyKeyPass</h1>
              <p className="text-lg text-gray-600 font-body">Kurumsal SaaS Platformu</p>
            </div>

            {/* 404 Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="text-center">
                {/* 404 Number */}
                <div className="mb-8">
                  <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    404
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-heading">
                  Sayfa Bulunamadı
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-body">
                  Üzgünüz, aradığınız sayfa mevcut değil. Belki sayfa taşınmış veya silinmiş olabilir.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    🏠 Ana Sayfaya Dön
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    🚀 Hizmetlerimizi Keşfet
                  </Link>
                </div>

                {/* Helpful Links */}
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-gray-500 mb-4">Yardımcı olabilecek sayfalar:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link href="/hakkimizda" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Hakkımızda
                    </Link>
                    <Link href="/hizmetler" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Hizmetler
                    </Link>
                    <Link href="/projeler" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Projeler
                    </Link>
                    <Link href="/teknolojiler" className="text-blue-600 hover:text-blue-800 hover:underline">
                      Teknolojiler
                    </Link>
                    <Link href="/iletisim" className="text-blue-600 hover:text-blue-800 hover:underline">
                      İletişim
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                © 2024 OxyKeyPass. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
