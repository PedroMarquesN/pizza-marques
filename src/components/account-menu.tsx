import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Building, ChevronDown, LogOut} from "lucide-react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getProfile} from "@/api/get-profile.ts";
import {getManagedRestaurant} from "@/api/get-managed-restaurant.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {Dialog, DialogTrigger} from "@/components/ui/dialog.tsx";
import {StoryProfileDialog} from "@/components/story-profile-dialog.tsx";
import {signOut} from "@/api/sign-out.ts";
import {useNavigate} from "react-router-dom";

export function AccountMenu() {
    const navigate = useNavigate()

    const {data:profile, isLoading: isLoadingProfile} = useQuery({
        queryKey:['profile'],
        queryFn:getProfile,

    })

    const {data:managedRestaurant, isLoading: isLoadingManagedRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant,

    })

    const {mutateAsync: signOutFn, isPending: isSigningOut} = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            navigate('sign-in', { replace: true})
        }
    })


    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        {isLoadingManagedRestaurant ? (
                            <Skeleton className="h-4 w-40"/>
                        ) : managedRestaurant?.name
                        }
                        <ChevronDown className="h4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        {isLoadingProfile ? (
                            <div className="space-y-1.5">
                                <Skeleton  className="h-4 w-40"/>
                                <Skeleton  className="h-4 w-40"/>
                            </div>
                        ): (
                            <>
                                <span>{profile?.name}</span>
                                <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                            </>
                        )}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="mr-4 h-4 w-4"/>
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400" disabled={isSigningOut}>
                        <button className="w-full" onClick={() => signOutFn()}>
                            <LogOut className="mr-4 h-4 w-4"/>
                            <span>Sair</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <StoryProfileDialog/>
        </Dialog>
    )
}