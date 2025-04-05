import { Card, CardBody, Typography } from "@material-tailwind/react";
// StarIcon no se usa aquí, podrías quitarlo si no lo añades
// import { StarIcon } from "@heroicons/react/24/solid";

// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider";

export function TestimonialSectionTwo() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          // Mantenemos el fondo oscuro, puedes cambiar !bg-blue-gray-900 por otro color
          className="overflow-hidden rounded-3xl !bg-blue-gray-900" 
        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
            <div>
              {/* Logo de empresa eliminado, añadir si se tiene el del cliente */}
              {/* Si quieres añadir estrellas como en el otro testimonio:
              <div className="mb-6 flex items-center">
                {[...Array(5).keys()].map((el, key) => (
                  <StarIcon className="h-6 w-6 text-yellow-600" key={key} /> 
                ))}
              </div> 
              */}
              <Typography
                variant="h3"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
                 {/* CITA DEL TESTIMONIO MODIFICADA (PLACEHOLDER) */}
                &quot;Trabajar con LETVIO fue la mejor decisión para nuestro proyecto. Su profesionalismo, creatividad y atención al detalle son excepcionales. ¡Recomiendo sus servicios sin dudarlo!&quot;
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                 {/* NOMBRE AUTOR MODIFICADO (PLACEHOLDER) */}
                Dayanny Gutierrez
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                 {/* CARGO/EMPRESA AUTOR MODIFICADO (PLACEHOLDER) */}
                Fundadora, MedicExpress
              </Typography>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
               {/* La imagen del avatar se mantiene, recuerda cambiarla */}
              <img
                src="avatars/avatar6.jpg" 
                alt="Testimonio Cliente Letvio Digital Solutions" // Alt text modificado
                className="h-80 w-80 rounded-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default TestimonialSectionTwo;