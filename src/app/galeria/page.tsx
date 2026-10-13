"use client";

import { useEffect, useMemo, useState } from "react";
import { registry, type GalleryItem } from "@/components/gallery/registry";

const ALL = "todas";
const FOLDER = "src/components/gallery";

const toPascal = (id: string) =>
  id.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");

// Texto que el alumno pega en el chat de la IA: un solo mensaje, con ruta e import exactos.
const aiRequest = ({ id, name }: GalleryItem) =>
  `Agrega a mi página el componente "${name}". El archivo ya está en ${FOLDER}/${id}.tsx. ` +
  `Impórtalo con: import ${toPascal(id)} from "@/components/gallery/${id}" y úsalo como <${toPascal(id)} />. ` +
  `Ponlo donde mejor quede y mantén el estilo de mi sitio.`;

export default function GaleriaPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const [copy, setCopy] = useState<"idle" | "ok" | "error">("idle");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const { category: c } of registry) counts.set(c, (counts.get(c) ?? 0) + 1);
    return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const needle = query.trim().toLowerCase();
  const items = registry.filter(
    (i) =>
      (category === ALL || i.category === category) &&
      `${i.name} ${i.description} ${i.category}`.toLowerCase().includes(needle),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const openItem = (item: GalleryItem) => {
    setCopy("idle");
    setOpen(item);
  };

  const copyRequest = async (item: GalleryItem) => {
    try {
      await navigator.clipboard.writeText(aiRequest(item));
      setCopy("ok");
    } catch {
      setCopy("error");
    }
  };

  const navBtn = (active: boolean) =>
    `flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors duration-150 ${
      active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
    }`;

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-zinc-100">
      <style>{`
        @keyframes gal-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes gal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gal-pop { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: none; } }
        .gal-card { animation: gal-up 380ms cubic-bezier(0.23, 1, 0.32, 1) both; }
        .gal-backdrop { animation: gal-fade 200ms ease-out both; }
        .gal-modal { animation: gal-pop 220ms cubic-bezier(0.23, 1, 0.32, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .gal-card, .gal-modal { animation: gal-fade 150ms ease both; }
        }
      `}</style>

      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-6 border-r border-zinc-800 p-4 md:flex">
        <p className="px-3 pt-1 text-lg font-bold tracking-tight">Ratio UI</p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar pieza"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
        />
        <nav className="flex flex-col gap-1">
          <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">Explorar</p>
          <button type="button" className={navBtn(category === ALL)} onClick={() => setCategory(ALL)}>
            <span>Todas</span>
            <span className="text-xs text-zinc-500">{registry.length}</span>
          </button>
          {categories.map(([name, count]) => (
            <button key={name} type="button" className={navBtn(category === name)} onClick={() => setCategory(name)}>
              <span className="capitalize">{name}</span>
              <span className="text-xs text-zinc-500">{count}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {category === ALL ? "Galería de componentes" : <span className="capitalize">{category}</span>}
          </h1>
          <p className="mt-1 text-zinc-400">Elige una pieza, copia la petición y pégasela a la IA.</p>
        </header>

        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-zinc-800 p-8 text-zinc-500">
            {registry.length === 0 ? "La galería de componentes llega aquí." : "No hay piezas que coincidan."}
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, k) => (
              <li
                key={item.id}
                className="gal-card flex flex-col gap-3"
                style={{ animationDelay: `${Math.min(k, 8) * 50}ms` }}
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-white p-4 text-zinc-900">
                  <item.component />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm capitalize text-zinc-500">{item.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openItem(item)}
                    className="shrink-0 rounded-lg border border-zinc-700 px-3 py-1.5 text-sm transition-transform duration-150 ease-out hover:bg-zinc-900 active:scale-[0.97]"
                  >
                    Usar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      {open && (
        <div
          className="gal-backdrop fixed inset-0 z-10 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.name}
            className="gal-modal flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-zinc-800 bg-[#111] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-48 items-center justify-center rounded-xl bg-white p-6 text-zinc-900">
              <open.component />
            </div>
            <div>
              <p className="text-xl font-semibold">{open.name}</p>
              <p className="mt-1 text-zinc-400">{open.description}</p>
              <p className="mt-3 text-xs text-zinc-500">
                Archivo: <code>{FOLDER}/{open.id}.tsx</code> · Licencia {open.license} · {open.source}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => copyRequest(open)}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-transform duration-150 ease-out active:scale-[0.97]"
              >
                Copiar petición para la IA
              </button>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition-transform duration-150 ease-out hover:bg-zinc-900 active:scale-[0.97]"
              >
                Cerrar
              </button>
              <p aria-live="polite" className="text-sm text-zinc-400">
                {copy === "ok" && "Copiada. Pégala en el chat de la IA."}
                {copy === "error" && "No se pudo copiar. Pídeselo a Alannis."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
