const pasos = [
  {
    ruta: "00-antes-de-empezar",
    titulo: "Antes de empezar",
    resumen: "Qué es un README, un archivo .md, una skill de IA — y qué necesitas instalado.",
  },
  {
    ruta: "01-fundamentos-next",
    titulo: "Fundamentos de Next.js",
    resumen: "Qué es una página, un componente, y cómo correr este proyecto.",
  },
  {
    ruta: "02-estilos-tailwind",
    titulo: "Estilos con Tailwind",
    resumen: "Cómo cambiar el diseño sin escribir CSS a mano.",
  },
  {
    ruta: "03-ia-en-el-flujo",
    titulo: "IA en el flujo de trabajo",
    resumen: "Qué es el loop de un agente (leer, ejecutar, revisar, repetir) y cómo pedirle tareas.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Taller Web + IA
        </h1>
        <p className="mt-2 text-zinc-600">
          Este sitio se construye en vivo. Cada carpeta numerada en la raíz
          del proyecto es un paso — ábrela y lee su README antes de tocar código.
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {pasos.map((paso, i) => (
          <li
            key={paso.ruta}
            className="rounded-lg border border-zinc-200 p-4"
          >
            <p className="text-sm font-medium text-zinc-400">
              Paso {i + 1} · {paso.ruta}/README.md
            </p>
            <p className="text-lg font-semibold text-zinc-900">{paso.titulo}</p>
            <p className="text-zinc-600">{paso.resumen}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
