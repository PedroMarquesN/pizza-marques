import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useQuery} from "@tanstack/react-query";
import {getManagedRestaurant} from "@/api/get-managed-restaurant.ts";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string()
})

type StoryProfileSchema = z.infer<typeof storeProfileSchema>
export function StoryProfileDialog() {
    const {data:managedRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant
    })
    const {register, handleSubmit}= useForm<StoryProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description:managedRestaurant?.description ?? ''
        }
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações visiveis para clientes</DialogDescription>
            </DialogHeader>
            <form>
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
                    <Button variant="ghost">Cancelar</Button>
                    <Button variant="success">Salvar</Button>
                </DialogFooter>
            </form>

        </DialogContent>
    )
}