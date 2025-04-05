import { Typography } from "@material-tailwind/react";
// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider"; 
// Button e Input no se usan en este footer, se pueden quitar de los imports si no están en otro lado

const YEAR = new Date().getFullYear();

// REDES SOCIALES (¡REEMPLAZAR ENLACES!)
const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter", // Mantener si usas Twitter
    link: "https://twitter.com/tuUsuarioTwitter", 
  },
  {
    icon: "fab fa-facebook-square", // Mantener si usas Facebook
    link: "https://facebook.com/tuPaginaFacebook",
  },
  {
    icon: "fab fa-linkedin", // Muy recomendable para agencias
    link: "https://linkedin.com/company/tuEmpresaLinkedIn",
  },
  {
    icon: "fab fa-instagram", // Añadir si usas Instagram
    link: "https://instagram.com/tuUsuarioInstagram",
  },
  // Quita los que no uses (ej. Dribbble, GitHub, Discord si no aplican)
];

// ENLACES COLUMNA EMPRESA (Asegúrate de que las rutas coincidan con tus páginas)
const COMPANY = [
  { name: "Sobre Nosotros", link: "/nosotros" },
  { name: "Portafolio", link: "/portafolio" },
  { name: "Blog", link: "/blog" }, // Si planeas tener un blog
  { name: "Contacto", link: "/contacto" }, 
];

// ENLACES COLUMNA AYUDA (Asegúrate de que las rutas coincidan con tus páginas)
const HELP = [
  { name: "Paquetes", link: "/paquetes" }, // Enlace a la sección o página de paquetes
  { name: "Contacto", link: "/contacto" },
  { name: "Preguntas Frecuentes", link: "/faq" }, // Si planeas tener un FAQ
];

// ENLACES COLUMNA LEGAL (Reemplaza RESOURCES, asegúrate de crear las páginas)
const LEGAL = [
  { name: "Política de Privacidad", link: "/privacidad" },
  { name: "Términos y Condiciones", link: "/terminos" },
];

// ENLACES COLUMNA TECNOLOGÍAS (Ajusta según tu stack)
const TECHS = [
  { name: "Astro", link: "https://astro.build/" },
  { name: "React", link: "https://react.dev/" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { name: "Node.js", link: "https://nodejs.org/" },
];

export function Footer() { // Cambié el nombre exportado para claridad, puedes mantener FooterOne si prefieres
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary" // !text-primary asume que tienes un color 'primary' definido en Tailwind, si no, cambia a 'text-purple-500' o similar
            >
              LETVIO DIGITAL SOLUTIONS
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              {/* DESCRIPCIÓN MODIFICADA */}
              Creamos soluciones web innovadoras y a medida para impulsar tu negocio en el mundo digital.
            </Typography>
            <div className="mt-6">
              {/* Mapeo sobre enlaces sociales actualizados */}
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                   {/* Asegúrate de tener Font Awesome o reemplaza con SVGs */}
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`} // Ajusta text-primary
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              {/* Columna Empresa */}
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary"> {/* Ajusta text-primary */}
                  Empresa
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link} // Enlace actualizado
                        // target="_blank" // Quitar target si son enlaces internos
                        // rel="noreferrer" // Quitar si son enlaces internos
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary" // Ajusta hover:text-primary
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Columna Ayuda y Soporte */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                 <span className="text-md mb-4 block font-medium text-primary"> {/* Ajusta text-primary */}
                  Ayuda y Soporte
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link} // Enlace actualizado
                        // target="_blank" // Quitar target si son enlaces internos
                        // rel="noreferrer" // Quitar si son enlaces internos
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary" // Ajusta hover:text-primary
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
               {/* Columna Legal (reemplaza Recursos) */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                 <span className="text-md mb-4 block font-medium text-primary"> {/* Ajusta text-primary */}
                  Legal
                </span>
                <ul className="list-unstyled">
                  {LEGAL.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link} // Enlace actualizado
                        // target="_blank" // Quitar target si son enlaces internos
                        // rel="noreferrer" // Quitar si son enlaces internos
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary" // Ajusta hover:text-primary
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
               {/* Columna Tecnologías */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                 <span className="text-md mb-4 block font-medium text-primary"> {/* Ajusta text-primary */}
                  Tecnologías
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link} // Enlace actualizado (a sitios oficiales)
                        target="_blank" // Abrir en nueva pestaña
                        rel="noopener noreferrer" 
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary" // Ajusta hover:text-primary
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
             {/* Powered by Vercel eliminado */}
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
               {/* Copyright modificado */}
              Copyright © {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                LETVIO DIGITAL SOLUTIONS
              </a>.{" "}
              Todos los derechos reservados.
              {/* "by LETVIO Team" y enlace a Creative Tim eliminados */}
            </div>
          </div>
          <div className="ml-auto w-full px-4 text-center md:w-4/12 md:px-0 md:text-right">
             {/* Nepcha eliminado */}
          </div>
        </div>
      </div>
    </footer>
     // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default Footer; // Cambiado nombre exportado