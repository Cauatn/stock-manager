"use client";

import { FormEvent, useState } from "react";

import ItemsList from "./_components/ItemsList";
import ItemForm from "./_components/ItemForm";
import { getDate } from "@/hooks/date";

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
  const date = getDate();
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

    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue)) {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    } else {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: name === "unitPrice" ? parsedValue : value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
