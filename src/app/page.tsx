import Tarjeta from "@/components/Tarjeta";

const menu = [
  {
    titulo: "Café de la casa",
    descripcion: "Grano tostado medio, preparado al momento. Caliente o frío.",
    precio: "$2.00",
  },
  {
    titulo: "Capuchino cremoso",
    descripcion: "Espresso doble con leche texturizada y un toque de canela.",
    precio: "$3.50",
  },
  {
    titulo: "Pan de queso",
    descripcion: "Horneado cada mañana. Se acaba temprano, ¡llega a tiempo!",
    precio: "$1.75",
  },
  {
    titulo: "Tostada con aguacate",
    descripcion: "Pan de masa madre, aguacate, limón y una pizca de sal.",
    precio: "$4.50",
  },
];

export default function Home() {
  return (
    <main className="bg-amber-50 text-stone-800">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">
          Cafetería de barrio
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-stone-900">
          Café Ejemplo
        </h1>
        <p className="max-w-xl text-lg text-stone-600">
          Café recién hecho, pan del día y una mesa para quedarte un rato.
          Este es un negocio ficticio, creado como referencia del taller.
        </p>
        <a
          href="#menu"
          className="rounded-full bg-orange-700 px-6 py-3 font-semibold text-amber-50 transition hover:bg-orange-800"
        >
          Ver el menú
        </a>
      </section>

      <section id="menu" className="bg-amber-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Nuestro menú
          </h2>
          <p className="mt-2 text-stone-600">Lo más pedido de la semana.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {menu.map((item) => (
              <Tarjeta key={item.titulo} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900">
          Visítanos
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-white p-5">
            <dt className="text-sm font-semibold text-orange-700">Dirección</dt>
            <dd className="mt-1">Calle Ficticia 123, Ciudad Ejemplo</dd>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-5">
            <dt className="text-sm font-semibold text-orange-700">Horario</dt>
            <dd className="mt-1">Lunes a sábado, 7:00 a. m. a 6:00 p. m.</dd>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-5">
            <dt className="text-sm font-semibold text-orange-700">Teléfono</dt>
            <dd className="mt-1">555-0100</dd>
          </div>
        </dl>
        <p className="mt-12 text-center text-sm text-stone-500">
          © Café Ejemplo · Sitio de referencia, no es un negocio real.
        </p>
      </section>
    </main>
  );
}
