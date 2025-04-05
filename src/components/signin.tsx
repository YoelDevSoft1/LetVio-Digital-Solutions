import ThemeProvider from "./theme-provider"; // Asegúrate que la ruta sea correcta
import Navbar from "./defaultNavbar"; // Verifica que este sea el nombre/ruta correcta

import { Typography, Input, Checkbox, Button } from "@material-tailwind/react"; 
// Checkbox ya no se usa, se puede quitar del import

export function SignIn() {
  return (
    <ThemeProvider>
       {/* Considera si necesitas el Navbar completo aquí */}
      <Navbar />
      <section className="grid h-screen items-center lg:grid-cols-2">
        <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
          <Typography variant="h3" color="blue-gray" className="mb-2">
             {/* TÍTULO MODIFICADO */}
            Acceso Clientes
          </Typography>
          <Typography className="font-normal mb-16 text-blue-gray-800">
             {/* SUBTÍTULO MODIFICADO */}
            Ingresa tus credenciales para acceder a tu portal.
          </Typography>

          {/* El action="#" es un placeholder, necesitará lógica real */}
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <div className="mb-4">
               {/* Campos de Email y Password se mantienen */}
              <Input color="black" size="lg" label="Email" type="email" name="email" crossOrigin={undefined} />
            </div>
            <div className="mb-4">
              <Input color="black" size="lg" label="Password" type="password" name="password" crossOrigin="anonymous" />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2"> {/* Justificado al final al quitar el checkbox */}
              {/* Checkbox de Newsletter eliminado */}
              <Typography as="a" href="/recuperar-clave" color="blue-gray" className="font-medium"> {/* Enlace actualizado */}
                Olvidé mi contraseña
              </Typography>
            </div>
            <Button color="blue" size="lg" className="mt-6" fullWidth>
               {/* Texto botón modificado */}
              Ingresar
            </Button>
            {/* Botón de Google Sign-In eliminado */}
          </form>
        </div>
        {/* La imagen se mantiene, recuerda cambiarla */}
        <img
          src="https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Acceso al portal de clientes - Letvio Digital Solutions" // Alt text modificado
          className="hidden h-screen w-full object-cover lg:block"
        />
      </section>
    
    </ThemeProvider>
  );
}

export default SignIn;