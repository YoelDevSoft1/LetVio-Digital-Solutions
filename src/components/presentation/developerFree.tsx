import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

export function DevPresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              // Puedes ajustar este color si lo deseas (ej. "purple")
              color="blue"
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
            <Typography color="blue-gray" className="lg:pr-32">
              {/* DESCRIPCIÓN MODIFICADA */}
              Con LETVIO DIGITAL SOLUTIONS, no solo obtienes código limpio y eficiente. Te ofrecemos un proceso estructurado, desde el paquete esencial hasta soluciones premium, asegurando un sitio web que no solo luce bien, sino que también cumple tus objetivos de negocio y es fácil de mantener.
            </Typography>
          </div>
          {/* La imagen se mantiene como la original, recuerda cambiarla después */}
          <img src="consistenly.png" alt="Desarrollo optimizado y escalable - Letvio" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;