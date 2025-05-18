"use client";
import Link from 'next/link';
import React from 'react';

const SobreNos: React.FC = () => {
    return (
        <div className="sobre-nos-container">
            <div className="sobre-nos-content">
                <h1>Sobre Nós</h1>
                <h2>Bem-vindo à SolviLabs!</h2>
                <p>
                    Na SolviLabs, dedicamo-nos a fornecer ferramentas e soluções inovadoras que facilitam a vida de nossos usuários. 
                    Aqui estão alguns dos serviços e funcionalidades que oferecemos:
                </p>
                <ul>
                    <li>
                        <strong>Tabela de Veículos:</strong> Nossa plataforma permite que os usuários cadastrem, listem e gerenciem informações detalhadas sobre veículos, tornando a administração de frota eficiente e simples.
                    </li>
                    <li>
                        <strong>Lista de Tarefas:</strong> Uma ferramenta prática que ajuda os usuários a organizar e acompanhar suas tarefas diárias, garantindo que nada seja esquecido.
                    </li>
                    <li>
                        <strong>Área Restrita:</strong> Um espaço exclusivo onde os usuários podem acessar informações personalizadas, editar seus dados e gerenciar suas atividades em um ambiente seguro.
                    </li>
                </ul>
                <p>
                    Estamos constantemente melhorando e expandindo nossos serviços para atender melhor às necessidades dos nossos usuários. 
                    Se você tiver sugestões ou feedback, fique à vontade para compartilhar.
                </p>
                <div className="button-group">
                    <Link href="/" passHref>
                        <button className="inverted-button">Home</button>
                    </Link>
                    <Link href="/participantes" passHref>
                        <button className="inverted-button">Participantes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SobreNos;
