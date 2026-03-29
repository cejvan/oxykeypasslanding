"use client";

import { useEffect } from "react";
import { ServerCrash } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ backgroundColor: '#07090F', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
      <div className="blueprint-grid" style={{ position: 'fixed', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,145,58,0.1) 0%, transparent 65%)'
      }} />

      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '480px',
        backgroundColor: '#0D1117',
        border: '1px solid rgba(200,145,58,0.2)',
        borderRadius: '1.25rem',
        padding: '3rem 2.5rem',
        boxShadow: '0 0 80px rgba(200,145,58,0.07)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,145,58,0.05), transparent)'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '4rem', height: '4rem', borderRadius: '1rem', margin: '0 auto 1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
          }}>
            <ServerCrash style={{ width: '1.75rem', height: '1.75rem', color: '#FCA5A5' }} />
          </div>

          <div style={{
            fontFamily: 'monospace', fontWeight: 700,
            fontSize: 'clamp(3.5rem, 12vw, 6rem)',
            color: '#C8913A', lineHeight: 1,
            marginBottom: '0.75rem', opacity: 0.9,
          }}>
            500
          </div>

          <div style={{ width: '3rem', height: '1px', background: 'rgba(200,145,58,0.4)', margin: '0 auto 1.5rem' }} />

          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F0EDE8', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
            Sunucu Hatası
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#6B7A90', lineHeight: 1.6, marginBottom: '2rem' }}>
            Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={reset}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem', width: '100%',
                backgroundColor: '#C8913A', color: '#07090F',
                border: 'none', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Tekrar Dene
            </button>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem', width: '100%',
                border: '1px solid rgba(200,145,58,0.25)', color: '#F0EDE8',
                backgroundColor: 'transparent', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#2A3545', position: 'relative', zIndex: 10 }}>
        © {new Date().getFullYear()} OxyKeyPass
      </p>
    </div>
  );
}
