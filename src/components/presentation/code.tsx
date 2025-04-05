import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              // Usando el color púrpura/violeta de tu marca como ejemplo
              color="purple"
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"
            >
              {/* TAGLINE MODIFICADO */}
              Expertos en Desarrollo Web Moderno
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              Transformamos Tus Ideas en Sitios Web Exitosos
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              {/* DESCRIPCIÓN MODIFICADA */}
              Utilizamos tecnologías modernas como Astro y React para construir sitios web rápidos, optimizados para SEO y con un diseño atractivo. Nuestro enfoque se centra en entender tus objetivos para entregar una solución digital que impulse tu negocio.
            </Typography>
            {/* BOTÓN MODIFICADO */}
            <a href="/portafolio"> {/* Enlace a la futura página de portafolio */}
              <Button color="gray" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">
                Explora Nuestros Proyectos <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </div>
          {/* Imagen original del template. Cambiar después */}
          <img src="code.png" alt="Tecnología y Desarrollo Web - Letvio" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;