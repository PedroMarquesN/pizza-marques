import {Helmet} from "react-helmet-async";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import { toast } from 'sonner'
import {z} from 'zod'
import {Link} from "react-router-dom";

const signInForm = z.object({
    email: z.string().email(),
    password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
    const {register, handleSubmit,formState:{isSubmitting}} = useForm<SignInForm>()

    async function handleSignIn(data:SignInForm) {
        try{

            await new Promise(resolve => setTimeout(resolve,2000))

            toast.success('Eviamos um link de autenticação para seu email.',{
                action: {
                    label:"Reenviar",
                    onClick: () => handleSignIn(data)
                }
            })


        }catch {
            toast.error('Credenciais inválidas.')
        }

    }
    return(
        <>
            <Helmet title="Login"/>
            <div className="p-8 bg">
                <Button asChild variant="link" className="absolute right-8 top-8">
                <Link to="/sign-up" className="">
                    Novo Usuário
                </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleSignIn)} action="" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu Email</Label>
                            <Input id="email" type="email" {...register('email')}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="senha">Digite sua Senha</Label>
                            <Input id="senha" type="password" {...register('password')}/>
                        </div>
                        <Button  disabled={isSubmitting} className="w-full" type="submit">Acessar Painel</Button>
                    </form>
                </div>
            </div>

        </>

    )
}