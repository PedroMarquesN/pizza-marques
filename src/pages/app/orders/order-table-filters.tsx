import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Search, X} from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="id do pedido" className="h-8 w-auto"/>
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>Todos</SelectItem>
                    <SelectItem value='pending'>Pendente</SelectItem>
                    <SelectItem value='canceled'>Cancelado</SelectItem>
                    <SelectItem value='processing'>Em preparo</SelectItem>
                    <SelectItem value='delivering'>Em entrega</SelectItem>
                    <SelectItem value='delivered'>Entregue</SelectItem>
                </SelectContent>
            </Select>

            <Button variant="secondary" type="submit" size="xs">
                <Search className="h-4 w-4 mr-2"/>
                Filtrar Resultados
            </Button>

            <Button variant="outline" type="button" size="xs">
                <X className="h-4 w-4 mr-2"/>
                Remover Filtros
            </Button>
        </form>
    )
}