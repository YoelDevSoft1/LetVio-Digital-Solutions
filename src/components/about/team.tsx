import {
  Card,
  CardHeader, // CardHeader importado aquí
  CardBody,    // CardBody importado aquí
  IconButton,
  Typography,
} from "@material-tailwind/react";
// ThemeProvider probablemente no es necesario aquí si ya está en un nivel superior
// import ThemeProvider from "../theme-provider";

// El componente TeamCard se mantiene igual
interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img} // Recuerda cambiar esta imagen
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center">
         {/* Recuerda añadir enlaces a tus perfiles reales o eliminar los iconos que no uses */}
        <IconButton variant="text" color="light-blue">
           {/* Asegúrate de tener Font Awesome configurado o usa SVGs */}
          <i className="fa-brands fa-twitter text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="blue">
          <i className="fa-brands fa-linkedin text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="pink">
          <i className="fa-brands fa-dribbble text-lg not-italic" />
        </IconButton>
      </div>
    </Card>
  );
}

// DATOS DEL FUNDADOR (PLACEHOLDER - ¡PERSONALIZAR!)
const members = [
  {
    // Cambiar por la ruta a tu foto profesional en /public/team/ o similar
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", 
    name: "Yoel Jose Cumares Pinto", // Reemplazar
    title: "Fundador y Desarrollador Principal", // O tu cargo real
    desc: "Con experiencia en Astro, React y creación de soluciones web eficientes. Apasionado por la tecnología y por ayudar a negocios en Bogotá a triunfar en el mundo digital.", // Reemplazar con tu bio breve
  },
  // Puedes añadir más miembros aquí en el futuro cuando el equipo crezca
  // { img: "...", name: "...", title: "...", desc: "..." },
];

export function TeamSectionOne() {
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            {/* TÍTULO MODIFICADO */}
            Conoce al Fundador
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
             {/* HEADLINE MODIFICADO */}
            Apasionados por la Tecnología y los Resultados
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800" // Mantuve color original, puedes cambiarlo
          >
            {/* DESCRIPCIÓN MODIFICADA */}
            Detrás de LETVIO DIGITAL SOLUTIONS hay una dedicación por crear soluciones web excepcionales y ayudar a negocios en Bogotá a alcanzar su máximo potencial online.
          </Typography>
        </div>
        {/* Ajustado el grid para centrar si solo hay un miembro, o puedes cambiar a grid-cols-1 */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 place-items-center max-w-sm mx-auto"> 
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

export default TeamSectionOne;