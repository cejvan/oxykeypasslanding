import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body style={{ backgroundColor: '#07090F', margin: 0, fontFamily: 'inherit' }}>
        <div className="blueprint-grid" style={{ position: 'fixed', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
        <div style={{
          position: 'fixed', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,145,58,0.12) 0%, transparent 65%)'
        }} />

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', marginBottom: '3rem' }}>
            <Image src="/logo.svg" alt="OxyKeyPass" width={0} height={0} style={{ height: '1.5rem', width: 'auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#E8EDF5', letterSpacing: '-0.025em' }}>OxyKeyPass</span>
              <span style={{ fontSize: '0.55rem', color: '#5A7090', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Geçiş Sistemleri</span>
            </div>
          </Link>

          {/* Card */}
          <div style={{
            width: '100%', maxWidth: '480px',
            backgroundColor: '#0D1117',
            border: '1px solid rgba(200,145,58,0.2)',
            borderRadius: '1.25rem',
            padding: '3rem 2.5rem',
            boxShadow: '0 0 80px rgba(200,145,58,0.07)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,145,58,0.06), transparent)'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Error code */}
              <div style={{
                fontFamily: 'monospace', fontWeight: 700,
                fontSize: 'clamp(4rem, 15vw, 7rem)',
                color: '#C8913A', lineHeight: 1,
                marginBottom: '1rem',
                opacity: 0.9,
              }}>
                404
              </div>

              <div style={{ width: '3rem', height: '1px', background: 'rgba(200,145,58,0.4)', margin: '0 auto 1.5rem' }} />

              <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F0EDE8', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                Sayfa Bulunamadı
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6B7A90', lineHeight: 1.6, marginBottom: '2rem' }}>
                Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  backgroundColor: '#C8913A', color: '#07090F',
                  borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem',
                  textDecoration: 'none', transition: 'background-color 0.2s',
                }}>
                  Ana Sayfaya Dön
                </Link>
                <Link href="/iletisim" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  border: '1px solid rgba(200,145,58,0.25)', color: '#F0EDE8',
                  borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem',
                  textDecoration: 'none',
                }}>
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#2A3545' }}>
            © {new Date().getFullYear()} OxyKeyPass
          </p>
        </div>
      </body>
    </html>
  );
}
