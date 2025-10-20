"use client";

import { ServerCrash } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-corporate-gray">
      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-red-100 mx-auto">
          <ServerCrash className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
          Bir Hata Oluştu
        </h1>
        <p className="mb-8 text-lg text-corporate-gray font-body">
          Üzgünüz, beklenmeyen bir hata oluştu.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button 
            onClick={() => reset()} 
            className="bg-navy hover:bg-navy-dark text-white border-0"
          >
            Tekrar Dene
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
            className="border-navy text-navy hover:bg-corporate-gray"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    </div>
  );
}
