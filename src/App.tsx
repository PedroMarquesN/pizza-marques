import './global.css'
import {RouterProvider} from "react-router-dom";
import {router} from "@/routes.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { Toaster } from 'sonner'
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";
function App() {


  return (
      <ThemeProvider storageKey="marquessolutions-theme" defaultTheme="dark">
          <HelmetProvider >
              <Helmet  titleTemplate="%s | Pizza Marques Delivery"/>
              <Toaster richColors/>
              <RouterProvider router={router}>
              </RouterProvider>
          </HelmetProvider>
      </ThemeProvider>
  )
}

export default App
