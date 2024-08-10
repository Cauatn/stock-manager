import { DataTable } from "@/components/products/data-table";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 w-full">
      <div className="z-10 w-full max-w-5xl justify-between text-sm lg:flex flex-col gap-10">
        <h1 className="text-4xl">Controle de Estoque</h1>
        <DataTable />
      </div>
    </main>
  );
}
