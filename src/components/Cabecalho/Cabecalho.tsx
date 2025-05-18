"use client";
import Image from 'next/image';
import Menu from '../Menu/Menu';
import solvilabsIcon from '../../img/solvilabs-icon.png';

const Cabecalho: React.FC = () => {
  return (
    <header className="cabecalho">
      <div className="logo">
        <Image src={solvilabsIcon} alt="SolviLabs Logo" width={100} height={50} />
      </div>
      <Menu />
    </header>
  );
};

export default Cabecalho;
