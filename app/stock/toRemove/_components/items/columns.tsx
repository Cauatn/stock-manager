"use client";

import { Product } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import AmountCell from "../amountCell";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => <div className="size-12">{row.getValue("image")}</div>,
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return <div> Nome do Produto</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("productName")}</div>
    ),
  },

  {
    accessorKey: "amount",
    header: () => <div className="">Quantidade em estoque</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      return <div className="font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize text-left">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "selectedQuantity",
    header: () => <div className="">Retirada</div>,
    cell: AmountCell,
  },
];
