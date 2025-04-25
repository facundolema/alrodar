export default function Card({
  title,
  description,
  items,
  price,
}: {
  title: string;
  description: string;
  items: string[];
  price: string;
}) {
  return (
    <div className="card flex flex-col flex-1 justify-between border border-gray-400 p-12">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold title">{title}</h1>
        <p className="mt-2">{description}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col'>
        {title === "Edición de video" && (
          <div className='border-dashed border border-gray-400 px-4 py-2 mb-4'>
            &#x2732; Este presupuesto mensual estimado contempla la generación de videos cortos para
            redes sociales a partir de un contenido base de 2 horas semanales.
          </div>
        )}
        <h1 className="text-2xl">Costo: {price}</h1>
      </div>
    </div>
  );
}