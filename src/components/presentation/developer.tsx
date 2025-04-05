import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

export function DevPresentation() {

  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              // Usando el color púrpura/violeta de tu marca como ejemplo
              color="purple"
              className="flex items-center font-bold text-lg mb-5"
            >
              {/* TAGLINE MODIFICADO */}
              Código de Calidad, Resultados Duraderos
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              Construimos Experiencias Web Optimizadas y Escalables
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              {/* DESCRIPCIÓN MODIFICADA */}
              Con LETVIO DIGITAL SOLUTIONS, no solo obtienes código limpio y eficiente. Te ofrecemos un proceso estructurado, desde el paquete esencial hasta soluciones premium, asegurando un sitio web que no solo luce bien, sino que también cumple tus objetivos de negocio y es fácil de mantener.
            </Typography>
            
          </div>
          {/* Imagen original del template. Cambiar después */}
          <img src="consistenly.png" alt="Desarrollo web consistente y de calidad - Letvio" className="mx-auto hidden md:flex md:w-1/2" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;