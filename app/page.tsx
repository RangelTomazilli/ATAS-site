import Title from "./components/Title"; // Corrigindo o caminho da importação
import CardGrid from "./components/Services";

export default function Home() {
  const cards = [
    {
      image: "/cards-images/hatch.png",
      title: "Hatch",
      page: "hatch",
      description: "",
    },
    {
      image: "/cards-images/sedan.png",
      title: "Sedan",
      page: "sedan",
      description: "",
    },
    {
      image: "/cards-images/SUV.png",
      title: "SUV",
      page: "suv",
      description: "",
    },
    {
      image: "/cards-images/pick-up.png",
      title: "Pick-up",
      page: "pick-up",
      description: "",
    },
    {
      image: "/cards-images/7lugares.png",
      title: "7-Lugares",
      page: "7-lugares",
      description: "",
    },
    {
      image: "/cards-images/ambulancia.png",
      title: "Ambulâncias",
      page: "ambulancia",
      description: "",
    },
    {
      image: "/cards-images/van.png",
      title: "Vans",
      page: "van",
      description: "",
    },
    {
      image: "/cards-images/bus.png",
      title: "Ônibus",
      page: "onibus",
      description: "",
    },
    {
      image: "/cards-images/caminhao.png",
      title: "Caminhões",
      page: "caminhao",
      description: "",
    },
    {
      image: "/cards-images/trator.png",
      title: "Tratores",
      page: "trator",
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
