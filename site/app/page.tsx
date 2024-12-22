
import Title from "@/app/components/Title";
import CardGrid from "./components/Services";

export default function Home() {
  const cards = [
    {
      image: "/cards-images/hatch.png", // Remova o "/public"
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
        title="A solução que você procurava para suas Atas."
        subtitle="A forma mais fácil, rápida, segura e econômica de comprar."
      />
      <CardGrid cards={cards} /> 
    </div>
  );
}