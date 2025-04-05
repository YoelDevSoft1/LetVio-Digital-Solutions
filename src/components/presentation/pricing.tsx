import React from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

export function PricingSectionOne() {
  return (
    <section id="paquetes" className="py-24 px-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Paquetes de LETVIO DIGITAL SOLUTIONS
        </Typography>
        <Typography className="mb-8 font-normal text-gray-500">
          Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados en Bogotá.
        </Typography>
      </div>
      <div className="mt-12">
        <div className="container mx-auto flex flex-wrap justify-center gap-10">
          
          {/* TARJETA 1: ESENCIAL */}
          <Card className="border border-blue-gray-100 w-full max-w-sm lg:w-1/3 mb-8">
            <CardHeader className="pt-6 text-center" floated={false} shadow={false}>
              <Typography variant="h5" color="blue-gray" className="capitalize mb-2">
                Esencial
              </Typography>
              <Typography variant="h3" color="blue-gray" className="flex justify-center gap-1">
                Desde $XXX
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col items-center">
              <ul className="mb-8 w-full px-5">
                <li className="border-b py-4 text-gray-700 text-center">
                  Diseño Centrado en el Usuario
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  1-3 Páginas Optimizadas
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  Desarrollo con Astro
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  SEO Básico
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  Diseño Adaptable (Mobile-Friendly)
                </li>
              </ul>
              <a href="/contacto?paquete=esencial">
                <Button size="sm" variant="outlined" color="blue-gray">
                  Seleccionar Plan
                </Button>
              </a>
            </CardBody>
          </Card>

          {/* TARJETA 2: NEGOCIO */}
          <Card className="bg-gray-900 w-full max-w-sm lg:w-1/3 mb-8">
            <CardHeader className="pt-6 text-center" floated={false} shadow={false}>
              <Typography variant="h5" color="blue-gray" className="capitalize mb-2">
                Negocio
              </Typography>
              <Typography variant="h3" color="blue-gray" className="flex justify-center gap-1">
                Desde $YYY
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col items-center">
              <ul className="mb-8 w-full px-5">
                <li className="border-b py-4 text-white border-white/30 text-center">
                  Diseño Visual Personalizado
                </li>
                <li className="border-b py-4 text-white border-white/30 text-center">
                  4-7 Páginas Optimizadas
                </li>
                <li className="border-b py-4 text-white border-white/30 text-center">
                  Desarrollo con Astro y React
                </li>
                <li className="border-b py-4 text-white border-white/30 text-center">
                  SEO Avanzado
                </li>
                <li className="border-b py-4 text-white border-white/30 text-center">
                  Formulario y Blog Integrado
                </li>
              </ul>
              <a href="/contacto?paquete=negocio">
                <Button size="sm" variant="gradient" color="white">
                  Seleccionar Plan
                </Button>
              </a>
            </CardBody>
          </Card>

          {/* TARJETA 3: PREMIUM */}
          <Card className="border border-blue-gray-100 w-full max-w-sm lg:w-1/3 mb-8">
            <CardHeader className="pt-6 text-center" floated={false} shadow={false}>
              <Typography variant="h5" color="blue-gray" className="capitalize mb-2">
                Premium
              </Typography>
              <Typography variant="h3" color="blue-gray" className="flex justify-center gap-1">
                Consultar
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col items-center">
              <ul className="mb-8 w-full px-5">
                <li className="border-b py-4 text-gray-700 text-center">
                  Diseño 100% a Medida
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  Páginas Ilimitadas*
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  Desarrollo Escalable (Astro + React)
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  Estrategia SEO Completa
                </li>
                <li className="border-b py-4 text-gray-700 text-center">
                  E-commerce o Funcionalidad Avanzada
                </li>
              </ul>
              <a href="/contacto?paquete=premium">
                <Button size="sm" variant="outlined" color="blue-gray">
                  Solicitar Cotización
                </Button>
              </a>
            </CardBody>
          </Card>

        </div>
      </div>
    </section>
  );
}

export default PricingSectionOne;