import './global.css'
import {RouterProvider} from "react-router-dom";
import {router} from "@/routes.tsx";
import {Helmet, HelmetProvider} from "react-helmet-async";

function App() {


  return (
      <HelmetProvider>
          <Helmet  titleTemplate="%s | Pizza Marques Delivery"/>
          <RouterProvider router={router}>
          </RouterProvider>
      </HelmetProvider>
  )
}

export default App
