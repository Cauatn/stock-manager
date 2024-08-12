"use client";

import { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Search } from "lucide-react";

type Item = {
  date: string;
  name: string;
  id: string;
  supplier: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export default function Products() {
  const [items, setItems] = useState<Item[]>([]);

  const [newItem, setNewItem] = useState<Item>({
    date: "",
    name: "",
    id: "",
    supplier: "",
    quantity: 0,
    unitPrice: 0,
    totalPrice: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]:
        name === "unitPrice" || name === "quantity" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setItems([...items, newItem]);

    setNewItem({
      date: "",
      name: "",
      id: "",
      supplier: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
    });
  };

  return (
    <div className="z-10 w-full max-w-7xl text-sm lg:flex flex-col gap-10 py-10 px-10">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl mb-6">Inclusão de Entrada</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-medium mb-4">
              Adicionar item da entrada
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={newItem.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="supplier">Fornecedor</Label>
                  <Input
                    id="supplier"
                    name="supplier"
                    value={newItem.supplier}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="id">ID do Material</Label>
                  <div className="inline-flex relative w-full">
                    <Input
                      id="id"
                      name="id"
                      value={newItem.id}
                      onChange={handleInputChange}
                      required
                    />
                    <Search className="absolute top-[20%] right-3 text-gray-400 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Nome do Material</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newItem.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantidade</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={newItem.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="unitPrice">Valor Unitário</Label>
                  <Input
                    id="unitPrice"
                    name="unitPrice"
                    type="number"
                    value={newItem.unitPrice}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="totalPrice">Valor Total</Label>
                <Input
                  id="totalPrice"
                  name="totalPrice"
                  type="number"
                  value={newItem.quantity * newItem.unitPrice}
                  readOnly
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500">
                Adicionar Item
              </Button>
            </form>
          </div>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Valor Unitário</TableHead>
                  <TableHead>Valor Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>R${item.unitPrice}</TableCell>
                    <TableCell>
                      R${(item.quantity * item.unitPrice).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
