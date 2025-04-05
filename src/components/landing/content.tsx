import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <header className="container mx-auto rounded-2xl overflow-hidden">
         {/* La imagen de fondo se mantiene, recuerda cambiarla después */}
        <div className="relative h-full flex align-center flex-col justify-center text-center bg-cover py-24" style={{backgroundImage: `url('https://images.unsplash.com/photo-1680000827819-c4bb72ed594d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80')`}}>
          {/* El overlay se mantiene */}
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20" // z-20 para asegurar que esté sobre el overlay
          >
            {/* TÍTULO MODIFICADO */}
            Transforma Tu Presencia Digital Hoy
          </Typography>
          <Typography
            variant="lead"
            color="white"
            // Ajustadas clases de ancho y padding para el nuevo texto
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-8/12 mx-auto z-10" 
          >
             {/* DESCRIPCIÓN MODIFICADA */}
            Creamos sitios web impactantes y funcionales que conectan con tu audiencia y potencian tu negocio. Descubre cómo LETVIO DIGITAL SOLUTIONS puede ayudarte.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
               {/* BOTÓN MODIFICADO */}
               <a href="/contacto">
                <Button size="lg" color="white" className="w-full px-4 z-10">
                  Contáctanos Ahora
                </Button>
               </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;