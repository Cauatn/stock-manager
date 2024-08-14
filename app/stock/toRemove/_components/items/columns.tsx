"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
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
  // {
  //   accessorKey: "price",
  //   header: () => <div className="">Preço Unitario</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("price"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("pt-BR", {
  //       style: "currency",
  //       currency: "BRL",
  //     }).format(amount);

  //     return <div className="font-medium">{formatted}</div>;
  //   },
  // },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize text-right">{row.getValue("status")}</div>
    ),
  },
];
