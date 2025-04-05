import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon, // Reutilizado para Enfoque
  ChatBubbleOvalLeftEllipsisIcon, // Reutilizado para Comunicación
  BoltIcon, // Reutilizado para Rendimiento
  FaceSmileIcon, // Reutilizado para Soporte/Satisfacción
  // LinkIcon, // No usado en esta versión, se puede quitar
  HeartIcon, // Reutilizado para Pasión/Calidad
  CheckIcon, // Usado como alternativa para Paquetes Flexibles
} from "@heroicons/react/24/solid"; 
// Importamos CheckIcon desde solid si no estaba ya
// import ThemeProvider from "../theme-provider"; // Comentado, probablemente no necesario aquí

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}


// El componente FeatureCard se mantiene igual
function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
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
    // Icono reutilizado: Comunicación
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />, 
    title: "Comunicación Fluida",
    description:
      "Mantenemos un diálogo constante contigo durante todo el proyecto para asegurar que estemos alineados.",
  },
  {
    // Icono reutilizado: Enfoque / Visión
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />, 
    title: "Enfoque en Tus Objetivos",
    description:
      "Entendemos tus metas de negocio para que tu sitio web trabaje activamente para ti.",
  },
  {
    // Icono reutilizado: Velocidad / Rendimiento
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Rendimiento Optimizado",
    description:
      "Priorizamos la velocidad de carga y la eficiencia para una mejor experiencia de usuario y posicionamiento SEO.",
  },
  {
    // Icono alternativo: Paquetes / Flexibilidad (puedes buscar uno mejor)
    icon: <CheckIcon className="h-6 w-6" strokeWidth={2} />, 
    title: "Paquetes Flexibles",
    description:
      "Ofrecemos planes claros (Esencial, Negocio, Premium) para adaptarnos a tu presupuesto y necesidades específicas.",
  },
   {
    // Icono reutilizado: Soporte / Satisfacción
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Soporte Post-Lanzamiento",
    description:
      "No desaparecemos después de la entrega. Te ofrecemos acompañamiento y soporte para asegurar tu tranquilidad.",
  },
  {
    // Icono reutilizado: Pasión / Calidad
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />, 
    title: "Pasión por la Calidad",
    description:
      "Nos encanta lo que hacemos y ponemos dedicación en cada línea de código y cada detalle visual de tu proyecto.",
  },
];

export function FeatureSectionOne() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          {/* TAGLINE MODIFICADO */}
          Nuestra Forma de Trabajar
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
           {/* TÍTULO MODIFICADO */}
          Un Proceso Transparente y Centrado en Ti
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
           {/* DESCRIPCIÓN MODIFICADA */}
          Creemos en la comunicación clara y la colaboración estrecha para asegurar que el resultado final no solo cumpla, sino que supere tus expectativas.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {/* Mapeo sobre las características modificadas */}
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default FeatureSectionOne; // El nombre exportado sigue siendo FeatureSectionOne