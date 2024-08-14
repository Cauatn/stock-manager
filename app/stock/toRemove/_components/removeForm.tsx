import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Item } from "../info/page";

import { DataTable } from "./leaveItems/data-table";
import { columns } from "./leaveItems/columns";

type ItemFormProps = {
  newItem: Item;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  date: string;
};

const img = <img src="https://via.placeholder.com/150" />;

const data = [
  {
    image: img,
    productName: "Produto 1",
    amount: 10,
  },
  {
    image: img,
    productName: "Produto 2",
    amount: 20,
  },
  {
    image: img,
    productName: "Produto 3",
    amount: 30,
  },
];

export default function RemoveForm({
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
          <Input id="date" name="date" type="date" required />
        </div>
        <div>
          <Label htmlFor="employee">Funcionário</Label>
          <Input id="employee" name="employee" type="string" required />
        </div>
      </div>
      <DataTable columns={columns} data={data} />
      <Button type="submit" className="w-full bg-blue-500">
        Concluir saída
      </Button>
    </form>
  );
}
