import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Building, ChevronDown, LogOut} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getProfile} from "@/api/get-profile.ts";
import {getManagedRestaurant} from "@/api/get-managed-restaurant.ts";

export function AccountMenu() {
    const {data:profile} = useQuery({
        queryKey:['profile'],
        queryFn:getProfile
    })

    const {data:managedRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    {managedRestaurant?.name}
                    <ChevronDown className="h4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>{profile?.name}</span>
                    <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="mr-4 h-4 w-4"/>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="mr-4 h-4 w-4"/>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}