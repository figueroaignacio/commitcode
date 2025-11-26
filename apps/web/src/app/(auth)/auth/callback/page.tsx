'use client';

import { useAuthStore } from '@/store/use-auth-store';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthCallbackPage() {
  const { isAuthenticated, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Pequeño delay para mostrar el check de éxito
        setTimeout(() => router.push('/'), 800);
      } else {
        router.push('/');
      }
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="relative">
        {/* Círculo de fondo animado */}
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Card principal */}
        <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-12 text-center min-w-[320px]">
          {isLoading ? (
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Verificando autenticación</h2>
                <p className="text-muted-foreground">Esto solo tomará un momento...</p>
              </div>

              {/* Barra de progreso animada */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="flex justify-center">
                <div className="relative">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"></div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">¡Autenticación exitosa!</h2>
                <p className="text-muted-foreground">Redirigiendo al chat...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
