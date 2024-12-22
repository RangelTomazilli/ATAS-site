'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

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
    <nav className="bg-gray-200 shadow-md py-6 px-40 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={header.logo} alt="Logo" width={200} height={80} />
      </div>

      {/* Links de Navegação */}
      <div className="flex items-center space-x-20 font-bold">
        {header.links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-500 bg-secondary px-12 py-2 rounded-xl"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors duration-300`} // Transição suave
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
