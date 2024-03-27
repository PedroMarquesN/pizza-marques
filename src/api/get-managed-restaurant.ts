import {api} from "@/lib/axios.ts";

interface GetManagedRestaurantProps {
    name: string,
    id: string,
    createdAt: Date | null,
    updatedAt: Date | null,
    description: string | null,
    managerId: string | null
}


export async function getManagedRestaurant() {
    const response = await api.get<GetManagedRestaurantProps>('/managed-restaurant')

    return response.data
}