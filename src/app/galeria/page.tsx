import { registry } from "@/components/gallery/registry";

export default function GaleriaPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Galería de componentes
        </h1>
        <p className="mt-2 text-zinc-600">
          Piezas listas para copiar a tu sitio.
        </p>
      </div>

      {registry.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 p-6 text-zinc-500">
          La galería de componentes llega aquí.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2">
          {registry.map(({ id, name, category, description, license, source, component: Pieza }) => (
            <li key={id} className="flex flex-col gap-3 rounded-lg border border-zinc-200 p-4">
              <div className="flex min-h-24 items-center justify-center rounded-md bg-zinc-50 p-4">
                <Pieza />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-400">{category}</p>
                <p className="text-lg font-semibold text-zinc-900">{name}</p>
                <p className="text-zinc-600">{description}</p>
                <p className="mt-2 text-xs text-zinc-400">
                  {license} · {source}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
