"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { getDate } from "@/hooks/date";
import StatusBadge from "@/components/status-badge";

import { Product } from "@/types/types";
import { HOST_URL } from "@/lib/globals";

const img = <img src="https://via.placeholder.com/150" />;

async function fetchData(): Promise<any[]> {
  const response = await fetch(`${HOST_URL}/products`);
  const result = await response.json();

  const products = Array.isArray(result.data) ? result.data : [];

  return products.map((product: any) => ({
    id: product.product_id,
    image: img,
    amount: product.product_quantity_in_stock,
    status:
      product.product_max_stock / 2 <= product.product_quantity_in_stock ? (
        <StatusBadge type="available" />
      ) : (product.product_max_stock / 2) * 0.3 <=
        product.product_quantity_in_stock ? (
        <StatusBadge type="few" />
      ) : (
        <StatusBadge type="unavailable" />
      ),
    productName: product.product_name,
    price: 0.0,
    selectedQuantity: 0,
  }));
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  DATA: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  DATA,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const rawData = await fetchData();
      setData(rawData);
    };

    fetchDataAsync();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [date, setDate] = useState(getDate());

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      rowSelection,
      columnFilters,
    },
    meta: {
      updateData: (rowIndex: number, columnId: number, value: number) => {
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
          )
        );
      },
    },
  });

  return (
    <div className="w-full">
      <div className="inline-flex items-center justify-between w-full">
        <div className="inline-flex space-x-2">
          <div className="flex items-center py-4 relative">
            <Input
              placeholder="Filtre os items..."
              value={
                (table.getColumn("productName")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("productName")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <Search className="absolute text-slate-400 right-3" />
          </div>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <div>
            <Label htmlFor="employee">Funcionário</Label>
            <Input id="employee" name="employee" type="string" required />
          </div>
          <div className="">
            <Label htmlFor="date">Data</Label>
            <Input
              id="date"
              name="date"
              type="date"
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <Link href="/stock/toRemove/info">
            <Button className="bg-blue-600 mt-5">Proximo</Button>
          </Link>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
