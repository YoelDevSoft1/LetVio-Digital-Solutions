import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// ThemeProvider probablemente no sea necesario aquí
// import ThemeProvider from "../theme-provider"; 

// El componente CategoriesCard se mantiene igual, es reutilizable
interface CategoriesCardPropsType {
  img: string;
  category: string; // 'category' se usará ahora para el nombre del paquete
}

function CategoriesCard({ img, category }: CategoriesCardPropsType) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        // La imagen de fondo viene del array
        style={{ backgroundImage: `url(${img})` }} 
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4" // Puedes ajustar el tamaño si quieres, ej. h3
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {/* Muestra el nombre del paquete */}
          {category} 
        </Typography>
         {/* Podrías añadir un botón aquí si quisieras enlazar a detalles */}
         {/* <a href={`/paquetes/${category.toLowerCase().replace(' ', '-')}`}> 
              <Button size="sm" color="white">Ver Detalles</Button> 
            </a> */}
      </CardBody>
    </Card>
  );
}

// Array renombrado y modificado para los paquetes de LETVIO
const packages = [
  {
    // REEMPLAZAR IMAGEN: Imagen representativa del Paquete Esencial
    img: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80", 
    category: "Paquete Esencial", // Nombre del Paquete 1
  },
  {
    // REEMPLAZAR IMAGEN: Imagen representativa del Paquete Negocio
    img: "https://images.unsplash.com/photo-1542845476-351174c0a0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    category: "Paquete Negocio", // Nombre del Paquete 2
  },
  {
     // REEMPLAZAR IMAGEN: Imagen representativa del Paquete Premium
    img: "https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    category: "Paquete Premium", // Nombre del Paquete 3
  },
  // El cuarto elemento original fue eliminado, puedes añadir más si tienes otros servicios principales
];

// Nombre del componente exportado cambiado para mayor claridad
export function ServicePackagesSection() { 
  return (
    // <ThemeProvider> // Quitar si no es necesario aquí
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:text-left lg:w-1/2"> {/* Ajustado ancho y alineación del título */}
          <Typography variant="h2" color="blue-gray" className="mb-4">
             {/* TÍTULO MODIFICADO */}
            Nuestros Paquetes Principales
          </Typography>
          <Typography
            variant="lead"
            className="text-blue-gray-800" // Mantenido color original
          >
             {/* DESCRIPCIÓN MODIFICADA */}
            Diseñados para adaptarse a diferentes necesidades y presupuestos, desde el lanzamiento inicial hasta soluciones avanzadas.
          </Typography>
        </div>
        {/* Ajustado grid para 3 columnas */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 justify-items-center"> 
          {/* Mapeo sobre el array 'packages' */}
          {packages.map((props, key) => ( 
            <CategoriesCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    // </ThemeProvider> // Quitar si no es necesario aquí
  );
}

// Nombre del export default también cambiado
export default ServicePackagesSection;