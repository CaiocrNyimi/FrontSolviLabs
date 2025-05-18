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

export async function GET(req: NextRequest, { params }: { params: { placa: string } }) {
  try {
    console.log(`Fetching vehicle with placa ${params.placa} from API...`);
    const response = await fetch(`${API_URL}/${params.placa}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar veículo');
    }
    const veiculo = await response.json() as Veiculo;
    console.log('Vehicle received:', veiculo);
    return NextResponse.json(veiculo, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar veículo:', error);
    return NextResponse.json({ error: 'Erro ao buscar veículo' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { placa: string } }) {
  try {
    const body = await req.json();
    const updatedVeiculo: Veiculo = {
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
    console.log('Updating vehicle:', updatedVeiculo);
    const response = await fetch(`${API_URL}/${params.placa}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedVeiculo)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao atualizar veículo: ${errorText}`);
    }
    const veiculo = await response.json();
    console.log('Vehicle updated:', veiculo);
    return NextResponse.json(veiculo, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    return NextResponse.json({ error: 'Erro ao atualizar veículo' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { placa: string } }) {
  try {
    console.log(`Deleting vehicle with placa ${params.placa} from API...`);
    const response = await fetch(`${API_URL}/${params.placa}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });

    if (response.status !== 204) {
      const errorText = await response.text();
      throw new Error(`Erro ao deletar veículo: ${errorText}`);
    }
    
    return new Response(null, { status: 204 });
  } catch (error: any) {
    console.error('Erro ao deletar veículo:', error);
    return NextResponse.json({ error: error.message || 'Erro ao deletar veículo' }, { status: 500 });
  }
}