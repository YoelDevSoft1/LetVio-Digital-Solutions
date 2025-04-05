import { Typography, Button } from "@material-tailwind/react";
// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider"; 

export function ContentSectionOne() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              {/* TÍTULO MODIFICADO */}
              Tu Socio Digital en Bogotá
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
               {/* DESCRIPCIÓN MODIFICADA */}
               En LETVIO DIGITAL SOLUTIONS, combinamos diseño creativo y tecnología de punta para crear sitios web que no solo se ven bien, sino que generan resultados.
               <br />
               <br />
               Nos apasiona ayudar a negocios como el tuyo a crecer en el entorno digital. Entendemos los retos del mercado en Bogotá y ofrecemos soluciones web a medida, desde paquetes accesibles hasta proyectos completamente personalizados.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
               {/* BOTONES MODIFICADOS */}
               <a href="/paquetes">
                 <Button variant="outlined" color="gray" size="lg">
                   Conoce Nuestros Paquetes
                 </Button>
               </a>
               <a href="/contacto">
                 <Button color="blue" size="lg"> {/* Puedes cambiar color="blue" por tu color principal, ej. "purple" */}
                   Contáctanos
                 </Button>
               </a>
            </div>
          </div>
          {/* La imagen se mantiene como la original, recuerda cambiarla después */}
          <img
            src="https://images.unsplash.com/photo-1680285251132-e1c238bf5e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Equipo Letvio Digital Solutions trabajando" // Alt text modificado
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default ContentSectionOne;