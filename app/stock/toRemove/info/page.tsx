"use client";

import { FormEvent, useState } from "react";
import RemoveForm from "../_components/removeForm";

export type Item = {
  date: string;
  name: string;
  id: string;
  supplier: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export default function Info() {
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

    const item = {
      date: newItem.date,
      name: newItem.name,
      id: newItem.id,
      supplier: newItem.supplier,
      quantity: newItem.quantity,
      unitPrice: newItem.unitPrice,
      totalPrice: newItem.quantity * newItem.unitPrice,
    };

    setItems([...items, item]);

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

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  return (
    <section className="h-screen">
      <header>
        <h1 className="text-4xl">Registro retirada do estoque</h1>
        <p className="text-xl text-slate-800">
          Informe os dados que serão usados para o registro
        </p>
      </header>
      <div>
        <RemoveForm
          newItem={newItem}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          date={date}
        />
      </div>
    </section>
  );
}
