import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          ¿Qué es LETVIO DIGITAL SOLUTIONS?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Somos una empresa en Bogotá dedicada a diseñar y desarrollar sitios web modernos, rápidos y optimizados. Utilizamos tecnologías como Astro y React para ofrecer soluciones digitales que impulsan tu negocio y conectan con tu audiencia.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          ¿Cómo trabaja LETVIO DIGITAL SOLUTIONS?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Analizamos tus necesidades, diseñamos una solución personalizada y desarrollamos tu sitio web con un enfoque en velocidad, SEO y diseño adaptable. Desde el concepto hasta el lanzamiento, te acompañamos para asegurar resultados excepcionales.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          ¿Qué puedo lograr con LETVIO DIGITAL SOLUTIONS?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Puedes obtener un sitio web que destaque tu marca, mejore tu visibilidad en buscadores y ofrezca una experiencia de usuario superior. Desde páginas básicas hasta soluciones avanzadas con e-commerce, transformamos tus ideas en éxito digital.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}