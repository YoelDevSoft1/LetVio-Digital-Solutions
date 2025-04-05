import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

// El componente FeatureCard se mantiene igual, es reutilizable
function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700" // Usamos un color más estándar para el texto
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

// DATOS DE LAS CARACTERÍSTICAS MODIFICADOS PARA LETVIO
const features = [
  {
    icon: (
      // Reemplazar con icono de Diseño/UI/UX
      <img className="w-32 mx-auto mb-4" src="icon1.png" alt="Diseño Centrado en el Usuario" />
    ),
    title: "Diseño Centrado en el Usuario",
    description:
      "Creamos interfaces atractivas e intuitivas que no solo lucen bien, sino que también ofrecen una experiencia de usuario excepcional.",
  },
  {
    icon: (
      // Reemplazar con icono de Código/Tecnología/Rendimiento
      <img className="w-32 mx-auto mb-4" src="icon2.png" alt="Desarrollo Moderno y Rápido" />
    ),
    title: "Desarrollo Moderno y Rápido",
    description:
      "Utilizamos Astro, React y las últimas tecnologías para construir sitios web veloces, seguros y fáciles de mantener.",
  },
  {
    icon: (
      // Reemplazar con icono de Soluciones/Paquetes/Estrategia
      <img className="w-32 mx-auto mb-4" src="icon3.png" alt="Soluciones a Tu Medida" />
    ),
    title: "Soluciones a Tu Medida",
    description:
      "Ofrecemos paquetes flexibles (Esencial, Negocio, Premium) y soluciones personalizadas para adaptarnos a tus objetivos y presupuesto.",
  }
];

export function FeatureLanding() {
  return (
    // Eliminado el ThemeProvider de aquí si ya está envolviendo toda la página en index.astro
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        {/* Título de la sección modificado */}
        <Typography variant="h2" color="blue-gray" className="mb-12">
           ¿Por Qué Elegir LETVIO?
        </Typography>
        {/* Sección "Design & Code by" eliminada */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;