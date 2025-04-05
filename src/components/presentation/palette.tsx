import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

export function PalettePresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
             {/* La imagen se mantiene como la original, recuerda cambiarla después */}
            <img src="palette.png" alt="Diseño visual y paleta de colores - Letvio" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              // Puedes ajustar este color si lo deseas (ej. "purple")
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              {/* TAGLINE MODIFICADO */}
              Diseño Atractivo, Marca Impactante
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              Diseño Visual Que Enamora y Comunica
            </Typography>
            <Typography color="gray" className="lg:pr-20"> {/* Mantuve color="gray", puedes cambiarlo a "blue-gray" si prefieres */}
              {/* DESCRIPCIÓN MODIFICADA */}
              Nos apasiona crear diseños únicos que no solo se ven increíbles, sino que también reflejan la esencia de tu marca y conectan con tu audiencia. Cuidamos cada detalle visual para asegurar una experiencia coherente y memorable.
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;