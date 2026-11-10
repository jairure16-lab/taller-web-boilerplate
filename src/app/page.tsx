import Contacto from "@/components/Contacto";
import RevelarAlScroll from "@/components/gallery/revelar-al-scroll";
import Portada from "@/components/Portada";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <main className="site-shell">
      <Portada />
      <RevelarAlScroll>
        <Servicios />
      </RevelarAlScroll>
      <Contacto />
    </main>
  );
}
