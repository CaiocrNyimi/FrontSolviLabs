"use client";
import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { useRouter } from 'next/navigation';

interface Veiculo {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
    quilometragem: number;
    diagnostico?: string;
    sintomas?: string;
    tipoProblema?: string;
    custoEstimado: number;
}

const ListarVeiculosPage: React.FC = () => {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [placaBusca, setPlacaBusca] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const response = await fetch('/api/veiculos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar veículos');
                }
                const data = await response.json() as Veiculo[];
                console.log('Dados recebidos:', data);
                setVeiculos(data);
            } catch (error: any) {
                console.error('Erro:', error);
                setErro('Erro ao buscar veículos. Veja o console para mais detalhes.');
            } finally {
                setCarregando(false);
            }
        };

        fetchVeiculos();
    }, []);

    const handleDelete = async (placa: string) => {
        if (!confirm("Tem certeza que deseja excluir este veículo?")) return;

        try {
            const response = await fetch(`/api/veiculos/${placa}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 204) {
                setVeiculos(veiculos.filter(veiculo => veiculo.placa !== placa));
                alert('Veículo excluído com sucesso!');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro desconhecido ao excluir veículo');
            }
        } catch (error: any) {
            console.error('Erro ao excluir veículo:', error);
            setErro(`Erro ao excluir veículo: ${error.message}`);
        }
    };

    const handleEdit = (placa: string) => {
        router.push(`/atualizar-veiculo?placa=${placa}`);
    };

    const filteredVeiculos = veiculos.filter(veiculo =>
        veiculo.placa.toLowerCase().includes(placaBusca.toLowerCase())
    );

    return (
        <div className="listar-veiculos-container">
            <main className="w-full">
                <h1 className="listar-titulo">Listagem de Veículos</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <input
                    type="text"
                    placeholder="Buscar por placa"
                    value={placaBusca}
                    onChange={(e) => setPlacaBusca(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                {carregando ? (
                    <Spinner />
                ) : (
                    <div className="overflow-x-auto w-full">
                        <table className="veiculos-tabela">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Placa</th>
                                    <th className="px-4 py-2">Modelo</th>
                                    <th className="px-4 py-2">Marca</th>
                                    <th className="px-4 py-2">Ano</th>
                                    <th className="px-4 py-2">Quilometragem</th>
                                    <th className="px-4 py-2">Diagnóstico</th>
                                    <th className="px-4 py-2">Sintomas</th>
                                    <th className="px-4 py-2">Tipo de Problema</th>
                                    <th className="px-4 py-2">Custo Estimado</th>
                                    <th className="px-4 py-2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredVeiculos.length > 0 ? (
                                    filteredVeiculos.map(veiculo => (
                                        <tr key={veiculo.placa}>
                                            <td className="border px-4 py-2">{veiculo.placa}</td>
                                            <td className="border px-4 py-2">{veiculo.modelo}</td>
                                            <td className="border px-4 py-2">{veiculo.marca}</td>
                                            <td className="border px-4 py-2">{veiculo.ano}</td>
                                            <td className="border px-4 py-2">{veiculo.quilometragem}</td>
                                            <td className="border px-4 py-2">{veiculo.diagnostico ?? 'N/A'}</td>
                                            <td className="border px-4 py-2">{veiculo.sintomas ?? 'N/A'}</td>
                                            <td className="border px-4 py-2">{veiculo.tipoProblema ?? 'N/A'}</td>
                                            <td className="border px-4 py-2">{veiculo.custoEstimado}</td>
                                            <td className="border px-4 py-2 flex gap-2">
                                                <button onClick={() => handleEdit(veiculo.placa)} className="bg-blue-500 text-white px-3 py-1 rounded">
                                                    Editar
                                                </button>
                                                <button onClick={() => handleDelete(veiculo.placa)} className="bg-red-500 text-white px-3 py-1 rounded">
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={10} className="text-center">Nenhum veículo encontrado.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ListarVeiculosPage;
