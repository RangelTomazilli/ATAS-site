import CatalogoV2Home from "@/app/components/CatalogoV2Home";
import Title from "@/app/components/Title";

export default function HomeV2() {
  return (
    <div>
      <Title title="Catálogo dinâmico — ambiente V2" subtitle="Confira todas as categorias disponíveis." />
      <CatalogoV2Home />
    </div>
  );
}
