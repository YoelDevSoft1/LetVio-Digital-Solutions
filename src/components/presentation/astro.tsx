import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
// StarIcon no se usa en esta versión modificada, se puede quitar
// import { StarIcon } from "@heroicons/react/24/solid";

// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider"; 

export function AstroSection() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          // Puedes cambiar "blue" por otro color de tu marca, ej. "purple" o "dark"
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              {/* TAGLINE MODIFICADO */}
              Tecnología de Alto Rendimiento
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal" // Puedes ajustar font-normal si quieres más peso
            >
              {/* TÍTULO PRINCIPAL MODIFICADO */}
              Astro: Velocidad y Modernidad para Tu Web
            </Typography>
            <Typography variant="lead" color="white">
              {/* DESCRIPCIÓN MODIFICADA */}
              En LETVIO DIGITAL SOLUTIONS elegimos Astro como base para muchos de nuestros proyectos por su increíble velocidad y enfoque en el contenido. Su arquitectura moderna nos permite construir sitios web rápidos, seguros y optimizados para SEO, brindándote una ventaja competitiva.
            </Typography>
            {/* BOTÓN MODIFICADO */}
            <a href="/contacto"> {/* Enlace a la página de contacto */}
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-12">
                Hablemos de Tu Proyecto
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            {/* La imagen se mantiene como la original, recuerda cambiarla después */}
            <img
              src="astro.png"
              alt="Tecnología Astro usada por Letvio Digital Solutions"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default AstroSection;