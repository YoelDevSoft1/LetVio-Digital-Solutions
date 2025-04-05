import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta
import Navbar from "../navbar"; // Asegúrate que la ruta sea correcta

export function HeroPresentation() {

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            {/* Sección de Badge eliminada */}
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
            <span className="text-purple-500">LETVIO </span>DIGITAL SOLUTIONS
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              {/* SUBTÍTULO MODIFICADO */}
              Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados en Bogotá. 
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              {/* BOTÓN 1 MODIFICADO */}
              <a href="/paquetes"> {/* Enlace a la futura página de paquetes */}
                <Button color="gray" className="flex items-center">
                  Ver Paquetes
                </Button>
              </a>
              {/* BOTÓN 2 (Opcional) */}
              <a href="/contacto"> {/* Enlace a la futura página de contacto */}
                <Button color="purple" variant="outlined" className="flex items-center"> {/* Usando el color violeta/púrpura */}
                  Solicitar Cotización
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          {/* Imagen original del template. Cambiar después */}
          <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;