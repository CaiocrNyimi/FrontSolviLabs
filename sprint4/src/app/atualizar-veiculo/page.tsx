"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Spinner from '../../components/Spinner/Spinner';

const AtualizarVeiculoPage: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const placa = searchParams.get('placa');
    const [veiculo, setVeiculo] = useState<any>({});
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        if (placa) {
            const fetchVeiculo = async () => {
                try {
                    const response = await fetch(`/api/veiculos/${placa}`);
                    if (!response.ok) {
                        throw new Error('Erro ao buscar veículo');
                    }
                    const data = await response.json();
                    setVeiculo(data);
                } catch (error: any) {
                    console.error('Erro:', error);
                    setErro('Erro ao buscar veículo. Veja o console para mais detalhes.');
                } finally {
                    setCarregando(false);
                }
            };

            fetchVeiculo();
        }
    }, [placa]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        try {
            const response = await fetch(`/api/veiculos/${placa}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErro(errorData.message || 'Erro na requisição');
                return;
            }

            alert('Veículo atualizado com sucesso!');
            router.push('/listar-veiculos');
        } catch (error: any) {
            console.error('Erro:', error);
            setErro(error.message);
        } finally {
            setCarregando(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVeiculo((prevVeiculo: any) => ({
            ...prevVeiculo,
            [name]: value
        }));
    };

    if (carregando) {
        return <Spinner />;
    }

    return (
        <div className="content-wrap">
            <main>
                <h1 className="text-3xl font-bold mb-8">Atualizar Veículo</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-veiculo-form">
                    <label>
                        Placa:
                        <input type="text" value={veiculo.placa} name="placa" onChange={handleChange} required readOnly />
                    </label>
                    <label>
                        Modelo:
                        <input type="text" value={veiculo.modelo} name="modelo" onChange={handleChange} required />
                    </label>
                    <label>
                        Marca:
                        <input type="text" value={veiculo.marca} name="marca" onChange={handleChange} required />
                    </label>
                    <label>
                        Ano:
                        <input type="number" value={veiculo.ano} name="ano" min="1980" max={new Date().getFullYear()} onChange={handleChange} required />
                    </label>
                    <label>
                        Quilometragem:
                        <input type="number" value={veiculo.quilometragem} name="quilometragem" onChange={handleChange} required />
                    </label>
                    <label>
                        Diagnóstico:
                        <input type="text" value={veiculo.diagnostico} name="diagnostico" onChange={handleChange} />
                    </label>
                    <label>
                        Sintomas:
                        <input type="text" value={veiculo.sintomas} name="sintomas" onChange={handleChange} />
                    </label>
                    <label>
                        Tipo de Problema:
                        <input type="text" value={veiculo.tipoProblema} name="tipoProblema" onChange={handleChange} />
                    </label>
                    <label>
                        Custo Estimado:
                        <input type="number" step="0.01" value={veiculo.custoEstimado} name="custoEstimado" onChange={handleChange} required />
                    </label>
                    <button type="submit">Atualizar Veículo</button>
                </form>
            </main>
        </div>
    );
};

export default AtualizarVeiculoPage;
