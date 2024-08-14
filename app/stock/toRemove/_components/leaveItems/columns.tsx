"use client";

import { Input } from "@/components/ui/input";
import { Product } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import AmountComponent from "../amountCell";

export type leaveItemsColumns = {
  image: any;
  productName: string;
  amount: number;
};

export const columns: ColumnDef<leaveItemsColumns>[] = [
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
    header: () => <div className="">Quantidade</div>,
    cell: ({ row }) => {
      return <AmountComponent />;
    },
  },
];
