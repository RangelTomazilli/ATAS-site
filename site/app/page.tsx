import Title from "./components/Title"; // Corrigindo o caminho da importação
import CardGrid from "./components/Services";

export default function Home() {
  const cards = [
    {
      image: "/cards-images/hatch.png",
      title: "Hatch",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/sedan.png",
      title: "Sedan",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/SUV.png",
      title: "SUV",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/pick-up.png",
      title: "Pick-up",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/7lugares.png",
      title: "7 Lugares",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/ambulancia.png",
      title: "Ambulâncias",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/van.png",
      title: "Vans",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/bus.png",
      title: "Ônibus",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/caminhao.png",
      title: "Caminhões",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
    {
      image: "/cards-images/trator.png",
      title: "Tratores",
      description: "Lorem ipsum dolor sit amet consectetur. Sed aliquam pharetra ut.",
    },
  ];
  
  return (
    <div>
      <Title
        title="A forma mais fácil, rápida, segura e econômica de comprar."
        subtitle=""
      />
      <CardGrid cards={cards} /> 
    </div>
  );
}
