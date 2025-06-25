import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-10 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-start">
            <Link href="/">
                <Image
                    src="/footer/logo-atas-publicas-branca.svg"
                    alt="Logo"
                    width={200}
                    height={60}
                />
            </Link>
            <p className="mt-4 text-sm">
              Facilitando o processo de adesão a diferentes tipos de veículos.
            </p>
          </div>

          {/* Atas Públicas MG */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Atas Públicas MG</h4>
            <ul className="space-y-2">
              <li className="text-sm">
                <Link href="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/quem-somos" className="hover:underline">
                  Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* Ajuda */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Ajuda</h4>
            <ul className="space-y-2">
              <li className="text-sm">
                <Link href="/contato" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10"></div>

        <div className="text-center mt-6 text-sm">
          © 2025 Atas Públicas MG. All rights reserved.
        </div>
        <div className="text-center text-sm">
          Desenvolvido por <a href="https://zenvix.com.br" className="hover:underline">Zenvix Tech</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
