"use client";

import { Navbar } from "@/components/navbar";
import { DataTable } from "@/components/products/data-table";

export default function Products() {
  return (
    <div className="w-full">
      {/* <Navbar title="asd" /> */}
      <div className="z-10 w-full max-w-7xl justify-between text-sm lg:flex flex-col gap-10 py-10 px-10 mx-auto">
        <h1 className="text-4xl">Controle de Estoque</h1>
        <DataTable />
      </div>
    </div>
  );
}
