import React from "react";
import {
  Navbar as MTNavbar, // Renombrado para evitar colisión
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider"; // Asegúrate que la ruta sea correcta

const mainNavItems = [
  { name: "Inicio", href: "/" },
  { name: "Paquetes", href: "/paquetes" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Sobre Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
      // Añadidas props placeholder de nuevo a List (prueba si se necesitan aquí también)
      placeholder="" 
      onPointerEnterCapture={() => {}} 
      onPointerLeaveCapture={() => {}} 
    >
      {mainNavItems.map(({ name, href }) => (
        <Typography
          key={name}
          as="a"
          href={href}
          variant="small"
          color="blue-gray" 
          className="font-medium"
        >
          {/* Añadidas props placeholder de nuevo a ListItem */}
          <ListItem
            className="flex items-center gap-2 py-2 px-4"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}} 
          >
            {name}
          </ListItem>
        </Typography>
      ))}
    </List>
  );
}

export default function Navbar() { 
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <ThemeProvider>
      <MTNavbar 
        className="absolute mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10"
        shadow={false} 
        fullWidth={true} 
        // Añadidas props placeholder de nuevo a MTNavbar
        placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}} 
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            // Añadidas props placeholder a Typography si fuera necesario (poco probable)
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}} 
          >
            LETVIO 
          </Typography>
          <div className="hidden lg:block">
            <NavList /> 
          </div>
          <div className="hidden gap-2 lg:flex">
            <a href="/contacto">
              {/* Color del botón cambiado de "dark" a "blue-gray" */}
              <Button
                size="sm"
                color="blue-gray" 
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Contacto
              </Button>
            </a>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList /> 
           <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden mt-4">
             <a href="/contacto" className="w-full">
               {/* Color del botón cambiado de "dark" a "blue-gray" */}
               <Button
                 size="sm"
                 color="blue-gray" 
                 fullWidth
                 placeholder=""
                 onPointerEnterCapture={() => {}}
                 onPointerLeaveCapture={() => {}}
               >
                 Contacto
               </Button>
             </a>
           </div>
        </Collapse>
      </MTNavbar>
    </ThemeProvider>
  );
}