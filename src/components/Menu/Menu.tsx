"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Menu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedInStatus);
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cadastrar-veiculo">Cadastrar Veículo</Link></li>
        <li><Link href="/listar-veiculos">Listar Veículos</Link></li>
        <li><Link href="/sobre-nos">Sobre Nós</Link></li>
        {isLoggedIn && (
          <>
            <li><Link href="/protected">Área Protegida</Link></li>
            <li><Link href="/logout">Logout</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
