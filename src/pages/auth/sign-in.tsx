import {Helmet} from "react-helmet-async";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

export function SignIn() {
    return(
        <>
            <Helmet title="Login"/>
            <div className="p-8 bg">
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>
                    </div>

                    <form action="" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu Email</Label>
                            <Input id="email" type="email"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="senha">Digite sua Senha</Label>
                            <Input id="senha" type="password"/>
                        </div>
                        <Button className="w-full" type="submit">Acessar Painel</Button>
                    </form>
                </div>
            </div>

        </>

    )
}