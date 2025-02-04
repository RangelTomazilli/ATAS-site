import Title from "./components/Title"; // Corrigindo o caminho da importação
import CardGrid from "./components/Services";

export default function Home() {
  const cards = [
    {
      image: "/cards-images/hatch.png",
      title: "Hatch",
      description: "",
    },
    {
      image: "/cards-images/sedan.png",
      title: "Sedan",
      description: "",
    },
    {
      image: "/cards-images/SUV.png",
      title: "SUV",
      description: "",
    },
    {
      image: "/cards-images/pick-up.png",
      title: "Pick-up",
      description: "",
    },
    {
      image: "/cards-images/7lugares.png",
      title: "7-Lugares",
      description: "",
    },
    {
      image: "/cards-images/ambulancia.png",
      title: "Ambulâncias",
      description: "",
    },
    {
      image: "/cards-images/van.png",
      title: "Vans",
      description: "",
    },
    {
      image: "/cards-images/bus.png",
      title: "Ônibus",
      description: "",
    },
    {
      image: "/cards-images/caminhao.png",
      title: "Caminhões",
      description: "",
    },
    {
      image: "/cards-images/trator.png",
      title: "Tratores",
      description: "",
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
