"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", compras: 186, vendas: 80 },
  { month: "February", compras: 305, vendas: 100 },
  { month: "March", compras: 237, vendas: 120 },
  { month: "April", compras: 73, vendas: 190 },
  { month: "May", compras: 209, vendas: 130 },
  {
    month: "Jun",
    compras: getRandomInt(0, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Jul",
    compras: getRandomInt(0, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Ago",
    compras: getRandomInt(0, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Set",
    compras: getRandomInt(80, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Out",
    compras: getRandomInt(0, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Nov",
    compras: getRandomInt(50, 220),
    vendas: getRandomInt(130, 150),
  },
  {
    month: "Dez",
    compras: getRandomInt(100, 220),
    vendas: getRandomInt(130, 150),
  },
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chartConfig = {
  compras: {
    label: "Compras",
    color: "hsl(var(--chart-1))",
  },
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function DashBoardBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balanço de Vendas</CardTitle>
        <CardDescription>Janeiro - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="compras" fill="var(--color-compras)" radius={4} />
            <Bar dataKey="vendas" fill="var(--color-vendas)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando a relação entre compras e vendas ao longo do ano.
        </div>
      </CardFooter>
    </Card>
  );
}
