import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import { Item } from "../page";

type ItemFormProps = {
  newItem: Item;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  date: string;
};

export default function ItemForm({
  newItem,
  handleInputChange,
  handleSubmit,
  date,
}: ItemFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Data</Label>
          <Input
            id="date"
            name="date"
            type="date"
            defaultValue={newItem.date}
            onChange={(e) => {
              date = e.target.value;
              handleInputChange(e);
            }}
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
            min={0}
            value={newItem.quantity}
            placeholder="0"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="unitPrice">Valor Unitário</Label>
          <div className="inline-flex space-x-1 items-center w-full">
            <span className="font-medium text-xl">R$</span>
            <Input
              id="unitPrice"
              name="unitPrice"
              placeholder="0,00"
              type="number"
              value={newItem.unitPrice}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="totalPrice">Valor Total</Label>
        <Input
          id="totalPrice"
          name="totalPrice"
          value={
            isNaN(newItem.quantity) || isNaN(newItem.unitPrice)
              ? "R$ 0,00"
              : `R$ ${(newItem.quantity * newItem.unitPrice).toFixed(2)}`
          }
          readOnly
        />
      </div>
      <Button type="submit" className="w-full bg-blue-500">
        Adicionar Item
      </Button>
    </form>
  );
}
