"use client";
import Link from 'next/link';
import Image from 'next/image';
import solvilabsIcon from '../img/solvilabs-icon.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="header-box">
          <Image src={solvilabsIcon} alt="SolviLabs Logo" width={150} height={150} />
          <h2>Bem-vindo à SolviLabs</h2>
          <p>Sistema de Cadastro de Problemas Automotivos e Serviços de Assistência.</p>
        </div>
        <div className="centered-box">
          <h3>Explore Nossas Funcionalidades</h3>
          <div className="button-group">
            <Link href="/login">
              <button>Login</button>
            </Link>
            <Link href="/cadastro">
              <button>Cadastro</button>
            </Link>
          </div>
        </div>
        <div className="features-section">
          <h3>Nossos Serviços:</h3>
          <ul>
            <li>- Tabela de Veículos</li>
            <li>- Cadastro e Login</li>
            <li>- Lista de Tarefas</li>
            <li>- Página Sobre Nós</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
