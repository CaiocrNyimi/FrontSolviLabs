import { NextRequest, NextResponse } from 'next/server';

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

const API_URL = 'http://localhost:8080/api/veiculos';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar veículos');
    }
    const veiculos = await response.json() as Veiculo[];
    return NextResponse.json(veiculos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar veículos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newVeiculo: Veiculo = {
      placa: body.placa,
      modelo: body.modelo,
      marca: body.marca,
      ano: body.ano,
      quilometragem: body.quilometragem,
      diagnostico: body.diagnostico || null,
      sintomas: body.sintomas || null,
      tipoProblema: body.tipoProblema || null,
      custoEstimado: body.custoEstimado
    };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newVeiculo)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao criar veículo: ${errorText}`);
    }
    const criado = await response.json();
    return NextResponse.json(criado, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar veículo' }, { status: 500 });
  }
}
