import { Typography, Input, Button } from "@material-tailwind/react"; 
// Input y Button podrían quitarse si no se usa el newsletter
import ThemeProvider from "../theme-provider"; // Asegúrate que la ruta sea correcta

// ENLACES PRINCIPALES MODIFICADOS
const links = [
  { name: "Inicio", href: "/" },
  { name: "Paquetes", href: "/paquetes" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Contacto", href: "/contacto" },
  // Puedes añadir 'Sobre Nosotros' si tienes esa página:
  // { name: "Sobre Nosotros", href: "/nosotros" }, 
];

// ENLACES SECUNDARIOS/LEGALES MODIFICADOS
const links2 = [
 { name: "Política de Privacidad", href: "/privacidad" }, // Deberás crear esta página
 { name: "Términos y Condiciones", href: "/terminos" }, // Deberás crear esta página
];

const currentYear = new Date().getFullYear();

export function FooterOne() {
  return (
    <ThemeProvider>
      <footer className="mt-10 px-8 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
            <div className="text-center md:text-left">
              <Typography variant="h4" className="mb-6" color="blue-gray"> {/* Añadido color */}
                {/* Mantenemos el nombre corto */}
                LETVIO 
              </Typography>
              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                {/* Mapeo sobre los enlaces principales modificados */}
                {links.map(({ name, href }, idx) => (
                  <li key={name}>
                    <Typography
                      as="a"
                      href={href} // Enlace actualizado
                      color="gray"
                      className={`py-1 font-normal transition-colors hover:text-blue-gray-900 ${
                        idx === 0 ? "pr-3" : "px-3" // Lógica de padding original mantenida
                      }`}
                    >
                      {name} {/* Nombre del enlace actualizado */}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            {/* SECCIÓN NEWSLETTER ELIMINADA */}
            {/* Si quieres añadirla de nuevo, iría aquí */}
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
            <Typography color="gray" className="text-center font-normal">
               {/* TEXTO COPYRIGHT MODIFICADO */}
              &copy; {currentYear} LETVIO DIGITAL SOLUTIONS, Todos los derechos reservados.
            </Typography>

            <ul className="flex items-center">
               {/* Mapeo sobre los enlaces secundarios modificados */}
              {links2.map(({ name, href }, idx) => (
                <li key={name}>
                  <Typography
                    as="a"
                    href={href} // Enlace actualizado
                    color="gray"
                    className={`py-1 font-normal transition-colors hover:text-blue-gray-900 ${
                       // Lógica de padding original modificada para solo 2 links
                      idx === links2.length - 1 ? "pl-2" : "pr-2" 
                    }`}
                  >
                    {name} {/* Nombre del enlace actualizado */}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default FooterOne;