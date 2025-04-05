import React from "react";
import {
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

export function CodePresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-center mg:mx-64"> {/* Clases de margen originales mantenidas */}
            <Typography
              // Usando el color púrpura/violeta de tu marca como ejemplo
              color="purple"
              className="font-bold text-lg mb-5"
            >
              {/* TAGLINE MODIFICADO */}
              Tu Visión Digital, Hecha Realidad
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight lg:mx-52" {/* Clases de margen originales mantenidas */}
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              LETVIO DIGITAL SOLUTIONS: El Impulso Que Tu Negocio Necesita
            </Typography>
            <Typography color="blue-gray" className="mb-8 lg:mx-80"> {/* Clases de margen originales mantenidas */}
              {/* DESCRIPCIÓN MODIFICADA */}
              No reinventes la rueda. Nos enfocamos en entender tu negocio para construir la presencia online que necesitas, combinando diseño atractivo con tecnología de punta y un enfoque en resultados.
            </Typography>
          </div>
          {/* Imagen original del template. Cambiar después */}
          <img src="checkout.jpg" alt="Soluciones Digitales - Letvio" className="w-full rounded-3xl mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;