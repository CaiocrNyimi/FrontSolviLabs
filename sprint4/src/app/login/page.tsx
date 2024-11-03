"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');

        const storedEmail = localStorage.getItem('userEmail');
        const storedSenha = localStorage.getItem('userSenha');

        if (email === storedEmail && senha === storedSenha) {
            localStorage.setItem('isLoggedIn', 'true');
            window.dispatchEvent(new Event('storage'));
            alert('Login realizado com sucesso!');
            router.push('/');
        } else {
            setErro('Credenciais inválidas');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-8">Login</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-left font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-left font-semibold mb-2">Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
