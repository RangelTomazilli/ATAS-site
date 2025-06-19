"use client"; // Indica que este é um componente do lado do cliente

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importe useRouter de next/navigation

interface Card {
  image: string;
  title: string;
  description: string;
  page: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const router = useRouter();

  const handleCardClick = (page: string) => {
    router.push(`/veiculos/${page}`); // Navega para a página de detalhes
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-10 lg:px-40 pb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ height: "250px" }}
          onClick={() => handleCardClick(card.page)}
        >
          <div className="absolute inset-0 flex items-center justify-center transition duration-300">
            <Image
              src={card.image}
              alt={card.title}
              width={250}
              height={250}
              className="object-contain transition duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(31,80,129,0.5)] flex flex-col items-center justify-center text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <p className="text-base mt-2 text-center">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardGrid;