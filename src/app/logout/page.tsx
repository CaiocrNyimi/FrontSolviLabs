"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userNome');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userSenha');
        window.dispatchEvent(new Event('storage'));
        router.push('/login');
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-8">Logout</h1>
                <p>Redirecionando...</p>
            </div>
        </div>
    );
};

export default LogoutPage;
