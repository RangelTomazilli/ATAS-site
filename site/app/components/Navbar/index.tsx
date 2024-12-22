'use client';
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const header = {
    logo: "/header/logo/logo-atas-publicas.svg",
    links: [
      {
        name: "Início",
        href: "/",
      },
      {
        name: "Quem Somos",
        href: "/#",
      },
      {
        name: "Contato",
        href: "/##",
      },
    ],
  };

  return (
    <nav className="bg-gray-200 shadow-md py-4 px-6 lg:px-40 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={header.logo} alt="Logo" width={150} height={60} />
      </div>

      {/* Menu de navegação - Desktop */}
      <div className="hidden lg:flex items-center space-x-20 font-bold">
        {header.links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-500 bg-secondary px-6 py-2 rounded-xl"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors duration-300`} // Transição suave
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Ícone de menu - Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 shadow-md z-10">
          <div className="flex flex-col items-center space-y-4 py-4 font-bold">
            {header.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-500 bg-secondary px-6 py-2 rounded-xl"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`} // Transição suave
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
