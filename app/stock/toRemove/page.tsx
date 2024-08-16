"use client";

import { Product } from "@/types/types";
import { columns } from "./_components/items/columns";
import { DataTable } from "./_components/items/data-table";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import StatusBadge from "@/components/status-badge";
import { get } from "http";
import { getDate } from "@/hooks/date";
import { useState } from "react";

const img = <img src="https://via.placeholder.com/150" />;

const data: Product[] = [
  {
    id: "m5gr84i9",
    image: img,
    amount: 316,
    status: <StatusBadge type="available" />,
    productName: "Teste 1",
    price: 350.0,
  },
  {
    id: "derv1ws0",
    image: img,
    amount: 837,
    status: <StatusBadge type="few" />,
    productName: "Graxa de pneu",
    price: 120.0,
  },
  {
    id: "5kma53ae",
    image: img,
    amount: 874,
    status: <StatusBadge type="unavailable" />,
    productName: "macaco",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "Pé de cabra",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "Alicate",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "banana",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "success",
    productName: "Zarabatana",
    price: 150.0,
  },
];

export default function ToRemove() {
  return (
    <>
      <header>
        <h1 className="text-4xl">Registro retirada do estoque</h1>
        <p className="text-xl text-slate-800">
          Selecione os items que irão compor a saída
        </p>
      </header>
      <DataTable columns={columns} DATA={data} />
    </>
  );
}
