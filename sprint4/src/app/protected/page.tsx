"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedPage: React.FC = () => {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            router.push('/login');
        } else {
            const storedNome = localStorage.getItem('userNome') || '';
            const storedEmail = localStorage.getItem('userEmail') || '';
            setNome(storedNome);
            setEmail(storedEmail);
        }
    }, [router]);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-4">Área Protegida</h1>
                <h2 className="text-2xl font-bold mb-2">Bem-vindo, {nome}!</h2>
                <p className="text-xl mb-4">Email: {email}</p>

                <div className="text-left mb-4">
                    <h3 className="text-xl font-bold mb-2">Lista de Tarefas</h3>
                    <div className="flex mb-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded"
                            placeholder="Nova tarefa"
                        />
                        <button
                            onClick={handleAddTask}
                            className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Adicionar
                        </button>
                    </div>
                    <ul className="list-disc ml-4">
                        {tasks.map((task, index) => (
                            <li key={index} className="flex justify-between items-center mb-1">
                                {task}
                                <button
                                    onClick={() => handleRemoveTask(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProtectedPage;
