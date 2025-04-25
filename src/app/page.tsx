'use client';
import '@/styles/styles.css'
import { Montserrat } from 'next/font/google';
import Card from './components/Card';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main className={`${montserrat.className} flex flex-col h-screen p-12`}>
      <div className="cover flex flex-col w-full items-center justify-center border border-gray-400">
        <h1 className="text-6xl font-bold title">AL RODAR</h1>
        <h2 className="animated-text">PROPUESTA</h2>
      </div>
      <div className="content flex h-full w-full justify-between gap-2 py-2">
        <div className="card-container flex h-full flex-1 justify-between gap-2">
          <Card
            title="Community Management"
            description="Contempla, por cuenta:"
            items={[
              'Creación y planificación de contenido',
              'Gestión de redes sociales',
              'Interacción con la comunidad',
              'Monitoreo de métricas',
              'Reportes mensuales',
            ]}
            price="$550.000 / cuenta"
          />
          <Card
            title="Edición de video"
            description="Contempla:"
            items={[
              "Visualización de los programas completos para encontrar fragmentos relevantes a publicar en redes.",
              "Selección, recorte y edición de fragmentos cortos para publicar en redes sociales (TikTok, Reels, Shorts).",
              "Creación de thumnails cautivantes para maximizar CTR.",
              "Utilización de hooks visuales y/o auditivos para maximizar la retención."
            ]}
            price="$350.000"
          />
          <Card
            title="Branding"
            description="Contempla, por canal:"
            items={[
              "Diseño de logo y paleta de colores.",
              "Diseño de tipografía.",
              "Diseño de elementos gráficos.",
              "Sugerencias de integración del setup con la identidad visual creada.",
              "Diseño de rótulos inferiores",
              "Creación animaciones de intro y outro que mantengan cohesión con la identidad visual."
            ]}
            price="$250.000 / canal"
          />
        </div>
        <div className="contact border border-gray-400">
          <h1>Volfram Studio</h1>
          <p>—</p>
          <div className='links'>
            <a href="mailto:contact@volfram.studio">
              <img src="/mail.svg" alt="Mail" height={20} width={20} />
            </a>
            <a href="https://wa.me/5491144296486" target="_blank">
              <img src="/whatsapp.svg" alt="WhatsApp" height={20} width={20} />
            </a>
            <a href="tel:+5491144296486">
              <img src="/telephone.svg" alt="Phone number" height={20} width={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="disclaimer flex w-full items-center justify-center px-4 py-2 border border-gray-400">
        <p>&#x2732; Los presupuestos se actualizarán de forma <strong>bimestral</strong> por <strong>IPC.</strong> Las campañas publicitarias (pagas) tienen costo adicional.</p>
      </div>
    </main>
  );
}
