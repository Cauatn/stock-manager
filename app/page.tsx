import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const estoque = [
  {
    invoice: <img src="https://via.placeholder.com/150" />,
    paymentStatus: "Paid",
    totalAmount: 250.0,
    paymentMethod: "Credit Card",
  },
  {
    invoice: <img src="https://via.placeholder.com/150" />,
    paymentStatus: "Pending",
    totalAmount: 150.0,
    paymentMethod: "PayPal",
  },
  {
    invoice: <img src="https://via.placeholder.com/150" />,
    paymentStatus: "Unpaid",
    totalAmount: 350.0,
    paymentMethod: "Bank Transfer",
  },
];

export default function Home() {
  const total = estoque.reduce((acc, item) => acc + item.totalAmount, 0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 w-full">
      <div className="z-10 w-full max-w-5xl justify-between text-sm lg:flex flex-col gap-10">
        <h1 className="text-4xl">Controle de Estoque</h1>
        <div className="flex flex-row space-x-4 ">
          <Input placeholder="busca" />
          <a href="/newItem">
            <Button className="bg-blue-400">Cadastrar novo produto</Button>
          </a>
        </div>
        <Table>
          <TableCaption>Uma lista de todos o seu inventario.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Imagem</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Nome do produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {estoque.map((invoice) => (
              <TableRow key={invoice.invoice.toString()}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">0</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">100</TableCell>
              <TableCell className="text-right">{total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </main>
  );
}
