import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider";

export function TestimonialSectionOne() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          // Puedes ajustar el color de fondo si lo deseas, ej. "purple", "dark", etc.
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8 bg-dark" 
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <div className="mb-6 flex items-center">
              {/* Mantenemos las 5 estrellas para un testimonio positivo */}
              {[...Array(5).keys()].map((el, key) => (
                <StarIcon className="h-6 w-6 text-yellow-600" key={key} /> 
              ))}
            </div>
            <Typography
              variant="h3"
              color="white"
              className="mb-10 font-medium leading-normal"
            >
              {/* CITA DEL TESTIMONIO MODIFICADA (PLACEHOLDER) */}
              &quot;¡Transformaron nuestra visión en un sitio web increíble! El proceso fue fluido y el resultado superó nuestras expectativas. LETVIO es un socio tecnológico excepcional.&quot;
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="font-medium"
            >
              {/* NOMBRE AUTOR MODIFICADO (PLACEHOLDER) */}
              Ana Pérez
            </Typography>
            <Typography
              color="white"
              className="font-normal opacity-70"
            >
              {/* CARGO/EMPRESA AUTOR MODIFICADO (PLACEHOLDER) */}
              Gerente de Marketing, SMD Vital Bogota
            </Typography>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12 m-12">
            {/* La imagen se mantiene como la original, recuerda cambiarla después */}
            <img
              src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
              alt="Testimonio Cliente Letvio Digital Solutions" // Alt text modificado
              className="h-full w-full object-cover md:absolute rounded-2xl"
            />
          </div>
        </Card>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default TestimonialSectionOne;