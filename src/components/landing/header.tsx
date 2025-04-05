import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta
import Navbar from "../defaultNavbar" // Verifica que este sea el nombre/ruta correcta de tu Navbar

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        {/* La imagen de fondo se mantiene, recuerda cambiarla después */}
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80')`}}>
          {/* El overlay se mantiene */}
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20"
          >
            {/* TÍTULO MODIFICADO */}
            LETVIO DIGITAL SOLUTIONS
          </Typography>
          <Typography
            variant="lead"
            color="white"
            // Ajustadas clases de ancho y padding
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto z-10"
          >
            {/* DESCRIPCIÓN MODIFICADA */}
            Creamos experiencias digitales únicas y de alto rendimiento que impulsan el crecimiento de tu negocio. Hablemos de tu proyecto.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
               {/* BOTÓN MODIFICADO */}
               <a href="/paquetes">
                <Button color="white" size="lg" className="w-full z-10"> {/* Cambié color="dark" a "white" para contraste */}
                  Ver Nuestros Paquetes
                </Button>
               </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;