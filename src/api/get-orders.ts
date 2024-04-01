import {api} from "@/lib/axios.ts";

export interface getOrdersResponse {
    orders: {
        orderId: string,
        createdAt: string
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered",
        customerName: string,
        total: number
    }[],
    meta: {
        pageIndex: number,
        perPage: number,
        totalCount: number
    }
}

export async function getOrders() {
    const response = await api.get<getOrdersResponse>('/orders', {
        params: {
            pageIndex: 0
        }
    })
    return response.data
}