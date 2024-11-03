"use client";
import Image from 'next/image';
import fotoCaio from '../../img/caio.jpg';
import fotoNicolas from '../../img/nicolas.jpg';

const ParticipantesPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-4">Participantes</h1>
                <div className="mb-4 flex flex-col items-center">
                    <Image src={fotoCaio} alt="Participante 1" width={150} height={150} className="rounded-full mb-2" />
                    <p className="font-semibold">Nome: Caio Nyimi</p>
                    <p>RM: 556331</p>
                    <p>Turma: 1TDSPO</p>
                </div>
                <div className="mb-4 flex flex-col items-center">
                    <Image src={fotoNicolas} alt="Participante 2" width={150} height={150} className="rounded-full mb-2" />
                    <p className="font-semibold">Nome: Nicolas Guinante</p>
                    <p>RM: 557844</p>
                    <p>Turma: 1TDSPO</p>
                </div>
            </div>
        </div>
    );
};

export default ParticipantesPage;
