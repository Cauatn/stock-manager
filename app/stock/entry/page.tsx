"use client";

import { FormEvent, useState } from "react";

import ItemsList from "./_components/ItemsList";
import ItemForm from "./_components/ItemForm";

export type Item = {
  date: string;
  name: string;
  id: string;
  supplier: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export default function Products() {
  var curr = new Date();
  curr.setDate(curr.getDate());
  let date = curr.toISOString().substring(0, 10);

  const [items, setItems] = useState<Item[]>([]);

  const [newItem, setNewItem] = useState<Item>({
    date: date,
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

    setItems([
      ...items,
      {
        date: newItem.date,
        name: newItem.name,
        id: newItem.id,
        supplier: newItem.supplier,
        quantity: newItem.quantity,
        unitPrice: newItem.unitPrice,
        totalPrice: newItem.quantity * newItem.unitPrice,
      },
    ]);

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
    <section className="z-10 w-full max-w-7xl text-sm lg:flex flex-col gap-10 py-10 px-10">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl mb-6">Inclusão de Entrada</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-medium mb-4">
              Adicionar item da entrada
            </h2>
            <ItemForm
              newItem={newItem}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              date={date}
            />
          </div>
          <ItemsList items={items} />
        </div>
      </div>
    </section>
  );
}
