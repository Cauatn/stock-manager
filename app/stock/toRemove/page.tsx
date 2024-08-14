import { Product } from "@/types/types";
import { columns } from "./_components/items/columns";
import { DataTable } from "./_components/items/data-table";
import { Badge } from "@/components/ui/badge";

const img = <img src="https://via.placeholder.com/150" />;

const data: Product[] = [
  {
    id: "m5gr84i9",
    image: img,
    amount: 316,
    status: (
      <Badge variant={"default"} className="bg-emerald-600 rounded-md">
        Disponível
      </Badge>
    ),
    productName: "Teste 1",
    price: 350.0,
  },
  {
    id: "derv1ws0",
    image: img,
    amount: 837,
    status: (
      <Badge variant={"default"} className="bg-yellow-600 rounded-md">
        Poucas unidades
      </Badge>
    ),
    productName: "Graxa de pneu",
    price: 120.0,
  },
  {
    id: "5kma53ae",
    image: img,
    amount: 874,
    status: (
      <Badge variant={"default"} className="bg-red-600 rounded-md">
        Fora de Estoque
      </Badge>
    ),
    productName: "macaco",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "Pé de cabra",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "Alicate",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "failed",
    productName: "banana",
    price: 150.0,
  },
  {
    id: "bhqecj4p",
    image: img,
    amount: 721,
    status: "success",
    productName: "Zarabatana",
    price: 150.0,
  },
];

export default async function ToRemove() {
  return (
    <>
      <header>
        <h1 className="text-4xl">Registro retirada do estoque</h1>
        <p className="text-xl text-slate-800">
          Selecione os items que irão compor a saída
        </p>
      </header>
      <DataTable columns={columns} data={data} />
    </>
  );
}
