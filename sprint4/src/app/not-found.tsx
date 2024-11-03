"use client";
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded p-6 max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl mb-6">Ops! Não conseguimos encontrar a página que você está procurando.</p>
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
