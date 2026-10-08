type TarjetaProps = {
  titulo: string;
  descripcion: string;
  precio: string;
};

export default function Tarjeta({ titulo, descripcion, precio }: TarjetaProps) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-stone-900">{titulo}</h3>
      <p className="flex-1 text-stone-600">{descripcion}</p>
      <p className="text-xl font-bold text-orange-700">{precio}</p>
    </article>
  );
}
