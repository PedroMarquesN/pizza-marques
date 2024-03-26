import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight, Search, X} from "lucide-react";

export function OrderTableRow() {
    return(
        <TableRow>
            <TableCell>
                <Button variant="outline" size="xs">
                    <Search/>
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-sm font-medium">8s4ad4sds58s16</TableCell>
            <TableCell className="text-muted-foreground"> há 15 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                Jaum Paulete Gabarooni
            </TableCell>
            <TableCell className="font-medium">R$ 149,98</TableCell>
            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight  className="mr-2 h-3 w-3"/>
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X  className="mr-2 h-3 w-3"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}