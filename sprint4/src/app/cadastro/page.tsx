"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CadastroPage: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMensagem('');

        localStorage.setItem('userNome', nome);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userSenha', senha);
        localStorage.setItem('isLoggedIn', 'true');

        setMensagem('Cadastro realizado com sucesso!');
        setTimeout(() => router.push('/'), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-8">Cadastro</h1>
                {mensagem && <p className="text-green-500">{mensagem}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-left font-semibold mb-2">Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
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
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CadastroPage;
