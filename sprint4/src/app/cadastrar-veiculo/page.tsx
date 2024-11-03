"use client";
import React, { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const CadastrarVeiculoPage: React.FC = () => {
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState<number>(new Date().getFullYear());
    const [quilometragem, setQuilometragem] = useState(0);
    const [diagnostico, setDiagnostico] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [tipoProblema, setTipoProblema] = useState('');
    const [custoEstimado, setCustoEstimado] = useState<string>('0');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        const veiculo = {
            placa,
            modelo,
            marca,
            ano,
            quilometragem,
            diagnostico,
            sintomas,
            tipoProblema,
            custoEstimado: parseFloat(custoEstimado)
        };

        try {
            console.log('Enviando veículo:', veiculo);
            const response = await fetch('/api/veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || 'Erro na requisição');
                return;
            }

            alert('Veículo cadastrado com sucesso!');
        } catch (error: any) {
            console.error('Erro:', error);
            alert(error.message);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="content-wrap">
            <main>
                <h1 className="text-3xl font-bold mb-8">Cadastro de Veículos</h1>
                {erro && <p className="text-red-500">{erro}</p>}
                <form onSubmit={handleSubmit} className="cadastro-veiculo-form">
                    <label>
                        Placa:
                        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} required />
                    </label>
                    <label>
                        Modelo:
                        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
                    </label>
                    <label>
                        Marca:
                        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
                    </label>
                    <label>
                        Ano:
                        <input type="number" value={ano} min="1980" max={new Date().getFullYear()} onChange={(e) => setAno(parseInt(e.target.value))} required />
                    </label>
                    <label>
                        Quilometragem:
                        <input type="number" value={quilometragem} onChange={(e) => setQuilometragem(parseInt(e.target.value))} required />
                    </label>
                    <label>
                        Diagnóstico:
                        <input type="text" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} />
                    </label>
                    <label>
                        Sintomas:
                        <input type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
                    </label>
                    <label>
                        Tipo de Problema:
                        <input type="text" value={tipoProblema} onChange={(e) => setTipoProblema(e.target.value)} />
                    </label>
                    <label>
                        Custo Estimado:
                        <input type="number" step="0.01" value={custoEstimado} onChange={(e) => setCustoEstimado(e.target.value)} required />
                    </label>
                    <button type="submit">Cadastrar Veículo</button>
                </form>
                {carregando && <Spinner />}
            </main>
        </div>
    );
};

export default CadastrarVeiculoPage;
