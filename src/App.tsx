import './global.css'
import {RouterProvider} from "react-router-dom";
import {router} from "@/routes.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { Toaster } from 'sonner'
function App() {


  return (
      <HelmetProvider>
          <Helmet  titleTemplate="%s | Pizza Marques Delivery"/>
          <Toaster richColors/>
          <RouterProvider router={router}>
          </RouterProvider>
      </HelmetProvider>
  )
}

export default App
