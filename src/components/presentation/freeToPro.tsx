import React from "react";
import {
  Button, // Button ya no se usa aquí, se puede quitar si no añades otro botón
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

// El componente StatsCard se mantiene igual
function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray"> {/* Mantuve color="gray", puedes cambiarlo a "blue-gray" */}
        {desc}
      </Typography>
    </Card>
  );
}

// DATOS DE LAS ESTADÍSTICAS/BENEFICIOS MODIFICADOS PARA LETVIO
const stats = [
  {
    count: "✓", // O un número/porcentaje relevante
    title: "Enfoque Personalizado",
    desc: "Cada proyecto es único. Analizamos tus necesidades para ofrecerte la solución perfecta."
  },
  {
    count: "✓", // O "100%"
    title: "Diseño Adaptable",
    desc: "Tu sitio web lucirá y funcionará perfectamente en computadores, tablets y móviles."
  },
  {
    count: "✓", // O "+SEO"
    title: "Optimización SEO",
    desc: "Construimos con las mejores prácticas SEO para mejorar tu visibilidad en buscadores."
  },
  {
    count: "⚡", // O "95+" (ej. PageSpeed score)
    title: "Rendimiento Superior",
    desc: "Utilizamos Astro y técnicas modernas para garantizar tiempos de carga rápidos."
  },
];

export function FigmaPresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              // Puedes ajustar este color si lo deseas (ej. "purple")
              color="blue"
              className="font-bold text-lg mb-5"
            >
              {/* TAGLINE MODIFICADO */}
              Resultados Medibles, Impacto Real
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              Más Que un Sitio Web, Una Solución Completa
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              {/* DESCRIPCIÓN MODIFICADA */}
              No solo construimos sitios web; creamos soluciones digitales integrales. Desde la estrategia inicial hasta el despliegue y la optimización, te acompañamos en cada paso para asegurar que tu presencia online sea exitosa y rentable.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                {/* Botón "Astro Pro" eliminado */}
                {/* Si quieres añadir un botón aquí, puedes hacerlo, por ejemplo:
                 <a href="/contacto">
                   <Button color="dark">Hablemos de Tu Proyecto</Button>
                 </a>
                */}
              </div>
            </div>
            {/* La imagen se mantiene como la original, recuerda cambiarla después */}
            <img src="components.png" alt="Componentes y Soluciones Letvio" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation; // El nombre exportado sigue siendo FigmaPresentation