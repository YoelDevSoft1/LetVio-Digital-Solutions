import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta
import Navbar from "../defaultNavbar" // Verifica que este sea el nombre/ruta correcta de tu Navbar

import {
  Button,
  Typography
} from "@material-tailwind/react";

export function HeroSectionFour() { // Podrías renombrar esto a NotFoundHero o similar
  return (
    <ThemeProvider>
       {/* Considera si realmente necesitas el Navbar completo en la página 404 */}
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        {/* La imagen de fondo se mantiene, considera una más sutil o un fondo plano para 404 */}
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1650692201357-3b1b15469952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')`}}>
          {/* El overlay se mantiene */}
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-90"></span> {/* Aumentada un poco opacidad */}
          <Typography
            variant="h1"
            color="white"
            className="mb-2 !leading-tight lg:text-7xl z-20" // Reducido margen inferior
          >
            Error 404
          </Typography>
           {/* SUBTÍTULO AÑADIDO */}
           <Typography
            variant="h4"
            color="white"
            className="mb-8 font-normal z-20"
          >
            Página No Encontrada
          </Typography>
          <Typography
            variant="lead"
            color="white"
             // Ajustadas clases de ancho y padding
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto z-10"
          >
             {/* DESCRIPCIÓN MODIFICADA */}
            Lo sentimos, la página que buscas no existe o ha sido movida. Puedes volver al inicio o contactarnos si necesitas ayuda.
          </Typography>
          <div className="w-auto mx-auto">
             {/* BOTONES MODIFICADOS */}
            <div className="flex flex-wrap items-center justify-center gap-4"> {/* Añadido gap */}
              <a className="z-10" href="/"> {/* Enlace corregido a la raíz */}
                <Button color="white" size="lg" className="px-6"> {/* Ajustado padding */}
                  Ir al Inicio
                </Button>
              </a>
              <a className="z-10" href="/contacto"> {/* Botón opcional a contacto */}
                <Button variant="outlined" color="white" size="lg" className="px-6">
                   Contacto
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

// Podrías renombrar el export también si renombraste la función
export default HeroSectionFour;