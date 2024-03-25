import {Outlet} from "react-router-dom";
import image from "../../assets/_fa5ac735-2516-4842-8bd7-b49435f90d67.jpeg";


export function AuthLayout() {
    return(
        <div className="grid min-h-screen grid-cols-2 antialiased">
            <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
                <div className="flex items-center gap-3 text-lg text-foreground">
                    <img src={image} alt=""/>
                </div>
                <footer className="text-sm">
                    Painel do parceiro &copy; pizza.marques - {new Date().getFullYear()}
                </footer>
            </div>


            <div className="flex flex-col items-center justify-center relative">
                <Outlet />
            </div>
        </div>

    )
}