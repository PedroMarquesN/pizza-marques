import {api} from "@/lib/axios.ts";

interface UptadeProfileBody {
    name: string
    description: string | null
}

export async function updateProfile({name,description}:UptadeProfileBody) {


    await api.put('/profile', {name, description})
}