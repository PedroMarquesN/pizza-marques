import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {date:'10/12', revenue:1200},
    {date:'11/12', revenue:200},
    {date:'12/12', revenue:800},
    {date:'13/12', revenue:1800},
    {date:'14/12', revenue:1200},
    {date:'15/12', revenue:1400},
    {date:'16/12', revenue:2000}
]
export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={data} style={{fontSize:12}}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number)=>
                                value.toLocaleString('pt-BR', {
                                    style:'currency',
                                    currency:'BRL'
                                })
                            }
                        />
                        <CartesianGrid vertical={false} className="stroke-muted"/>
                        <Area dataKey="revenue" type="monotone" stroke="#8884d8" fill="#8884d8"/>


                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}