import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getManagedRestaurant} from "@/api/get-managed-restaurant.ts";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {updateProfile} from "@/api/uptade-profile.ts";
import {toast} from "sonner";


const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string().nullable()
})

type StoryProfileSchema = z.infer<typeof storeProfileSchema>




export function StoryProfileDialog() {
    const queryClient = useQueryClient()


    const {data:managedRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant,

    })


    const {register, handleSubmit, formState:{isSubmitting}}= useForm<StoryProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description:managedRestaurant?.description ?? ''
        }
    })

    function updateManagedRestaurantCache({name, description}:StoryProfileSchema) {
        const cached = queryClient.getQueryData(['managed-restaurant'])

        if (cached){
            queryClient.setQueryData(['managed-restaurant'], {
                ...cached,
                name,
                description
            })
        }

    }
    const {mutateAsync: updadeProfileFn} = useMutation({
        mutationFn: updateProfile,
        onMutate({name, description}) {
            updateManagedRestaurantCache({name,description})
        }
    })

    async function handleUpdateProfile(data:StoryProfileSchema){
        try{
            await updadeProfileFn({
                name: data.name,
                description: data.description
            })
            toast.success('Perfil Atualizado')

        }catch {
            toast.error('Erro ao atualizar')

        }
    }


    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações visiveis para clientes</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                        <Input className="col-span-3" id="name" {...register('name')}/>
                    </div>
                </div>

                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" {...register("description")}/>
                    </div>
                </div>


                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost">Cancelar</Button>
                    </DialogClose>
                    <Button variant="success" disabled={isSubmitting}>Salvar</Button>
                </DialogFooter>
            </form>

        </DialogContent>
    )
}