import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

// ThemeProvider probablemente no sea necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider"; 

// Componentes Check y Minus se mantienen igual
function Check() {
  return (
    <CheckIcon
      className="mx-auto h-5 w-5 text-green-500"
      strokeWidth={2}
    />
  );
}

function Minus() {
  return (
    <MinusIcon
      className="mx-auto h-5 w-5 text-blue-gray-700"
      strokeWidth={2}
    />
  );
}

// Componente Request podría no usarse o adaptarse si es necesario
// function Request() { ... }

// DATOS DE LOS PLANES MODIFICADOS PARA LETVIO (¡AJUSTAR SEGÚN TUS PAQUETES REALES!)
const plans = [
  // [Característica,             Esencial,     Negocio,      Premium]
  ["Número de Páginas",         "1-3",        "4-7",        "Ilimitadas*"],
  ["Diseño Personalizado",      <Minus />,    <Check />,    <Check />],
  ["Diseño Adaptable (Móvil)",  <Check />,    <Check />,    <Check />],
  ["Blog Integrado",            <Minus />,    <Check />,    <Check />],
  ["Optimización SEO",          "Básica",     "Avanzada",   "Estratégica"],
  ["Formulario de Contacto",    "Básico",     "Avanzado",   "Avanzado"],
  ["Integración E-commerce",    <Minus />,    <Minus />,    "Básico"], // O <Check /> si Premium lo incluye siempre
  ["Soporte Post-Lanzamiento",  "Email",      "Email",      "Prioritario"],
  ["Revisiones de Diseño",      "1 Ronda",    "2 Rondas",   "Múltiples"],
  ["Tiempo Estimado",           "1-2 Semanas","3-4 Semanas","Consultar"],
];

export function PricingSectionThree() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="p-8" id="paquetes"> {/* Añadido id="paquetes" para posibles enlaces internos */}
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray">
            {/* TÍTULO MODIFICADO */}
            Elige el Plan Perfecto Para Ti
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500">
            {/* SUBTÍTULO MODIFICADO */}
            Construidos con las mejores prácticas y soporte post-lanzamiento incluido.
          </Typography>
        </div>
        {/* Nota: 'overflow-scroll' puede necesitar ajustes si la tabla es muy ancha */}
        <Card className="mt-16 w-full overflow-scroll"> 
          <CardBody>
            {/* Nota: 'min-w-[768px]' asegura que la tabla tenga un ancho mínimo */}
            <table className="w-full min-w-[768px] table-auto">
              <thead>
                <tr className="border-b border-blue-gray-50">
                  <th className="px-6 py-3 text-left">
                    {/* Columna de características vacía */}
                    <Typography variant="h6" className="mb-2"> 
                      &nbsp;
                    </Typography>
                    <Typography variant="h6" color="blue-gray">
                       {/* Puedes poner "Característica" aquí si quieres */}
                       &nbsp; 
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      {/* NOMBRE PLAN 1 MODIFICADO */}
                      Esencial
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                      {/* PRECIO PLAN 1 MODIFICADO (EJEMPLO) */}
                      Desde $XXX 
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      {/* NOMBRE PLAN 2 MODIFICADO */}
                      Negocio
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                       {/* PRECIO PLAN 2 MODIFICADO (EJEMPLO) */}
                       Desde $YYY
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      {/* NOMBRE PLAN 3 MODIFICADO */}
                      Premium
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                       {/* PRECIO PLAN 3 MODIFICADO (EJEMPLO) */}
                       Consultar
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Mapeo sobre los datos de los planes modificados */}
                {plans.map((plan, key) => (
                  <tr key={key} className="border-b border-blue-gray-50">
                    <td className="px-6 py-5 text-left">
                      <Typography
                        variant="small"
                        className="font-medium !text-gray-600"
                      >
                        {plan[0]} {/* Nombre de la Característica */}
                      </Typography>
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[1]} {/* Valor para Plan Esencial */}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[2]} {/* Valor para Plan Negocio */}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[3]} {/* Valor para Plan Premium */}
                    </td>
                  </tr>
                ))}
                {/* Fila de botones modificada */}
                <tr>
                  <td className="px-6 py-5 text-left"></td>
                  <td className="px-6 py-5 text-center">
                    <a href="/contacto?paquete=esencial">
                      <Button variant="gradient">Seleccionar Esencial</Button>
                    </a>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <a href="/contacto?paquete=negocio">
                      <Button variant="gradient">Seleccionar Negocio</Button>
                    </a>
                  </td>
                  <td className="px-6 py-5 text-center">
                     <a href="/contacto?paquete=premium">
                      <Button variant="gradient">Solicitar Premium</Button>
                     </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default PricingSectionThree; // El nombre exportado sigue siendo PricingSectionThree