import {Helmet} from "react-helmet-async";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import { toast } from 'sonner'
import {z} from 'zod'
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {registerRestaurant} from "@/api/register-restaurant.ts";

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone:z.string(),
    email: z.string().email(),

})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const {register, handleSubmit,formState:{isSubmitting}} = useForm<SignUpForm>()
    const navigate = useNavigate()

    const{mutateAsync: registerRestaurantFn} = useMutation({
        mutationFn: registerRestaurant
    })
    async function handleSignUp(data:SignUpForm) {
        try{

            await registerRestaurantFn({
                email: data.email,
                phone: data.phone,
                managerName:data.managerName,
                restaurantName:data.restaurantName
            })

            toast.success('Restaurante cadastrado com sucesso !',{
                action: {
                    label:"Login",
                    onClick: () => navigate(`/sign-in?email=${data.email}`)
                }
            })


        }catch {
            toast.error('Erro ao cadastrar restaurante')
        }

    }
    return(
        <>
            <Helmet title="Login"/>
            <div className="p-8 bg">
                <Button asChild variant="link" className="absolute right-8 top-8">
                    <Link to="/sign-in" className="">
                        Fazer Login
                    </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar Conta Grátis
                        </h1>
                        <p className="text-sm text-muted-foreground">
                           Seja um parceiro e comece suas vendas!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleSignUp)} action="" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu Nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu Celular</Label>
                            <Input id="phone" type="tel" {...register('phone')}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu Email</Label>
                            <Input id="email" type="email" {...register('email')}/>
                        </div>

                        <Button disabled={isSubmitting} className="w-full" type="submit">Acessar Painel</Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com nossos
                            <a href="#" className="underline underline-offset-4"> Termos de serviço</a> e
                             <a href="#" className="underline underline-offset-4"> Políticas
                            de privacidade.</a>

                        </p>
                    </form>
                </div>
            </div>

        </>

    )
}