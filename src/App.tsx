import './global.css'
import {RouterProvider} from "react-router-dom";
import {router} from "@/routes.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { Toaster } from 'sonner'
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/lib/react-query.ts";
function App() {


  return (
      <ThemeProvider storageKey="marquessolutions-theme" defaultTheme="dark">
          <HelmetProvider >
              <Helmet  titleTemplate="%s | Pizza Marques Delivery"/>
              <Toaster richColors/>
              <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}>
              </RouterProvider>
              </QueryClientProvider>
          </HelmetProvider>
      </ThemeProvider>
  )
}

export default App
