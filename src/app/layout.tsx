"use client";
import "./globals.css";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>SolviLabs - Sistema de Problemas Automotivos</title>
        <meta name="description" content="SolviLabs - Sistema de Detecção de Problemas Automotivos e Serviços de Assistência" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Cabecalho />
        <div className="content-wrap">
          {children}
        </div>
        <Rodape />
      </body>
    </html>
  );
}
