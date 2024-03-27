import {api} from "@/lib/axios.ts";

export interface RegisterRestaurantProps {
    phone: string
    email: string
    managerName: string
    restaurantName: string
}

export async function registerRestaurant({email, restaurantName,managerName,phone}:RegisterRestaurantProps) {
    await api.post('/restaurants', {
        email,
        phone,
        managerName,
        restaurantName
    })
}