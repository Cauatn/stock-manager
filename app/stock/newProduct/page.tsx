"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { ChangeEvent } from "react";

export default function NewProduct() {
  const applyMask = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, "");
    value = (Number(value) / 100).toFixed(2) + "";
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    event.target.value = "R$ " + value;

    console.log(value);
  };

  return (
    <div className="z-10 w-full max-w-7xl text-sm lg:flex flex-col gap-10 py-10 px-10">
      <h1 className="text-4xl">Adição de novo produto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10">
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Nome do Produto</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite o nome do produto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="min-stock">Estoque Mínimo</Label>
              <Input
                id="min-stock"
                type="number"
                min="0"
                placeholder="Estoque mínimo"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="max-stock">Estoque Máximo</Label>
              <Input
                id="max-stock"
                type="number"
                min="0"
                placeholder="Estoque máximo"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="max-stock">Valor de Custo</Label>
              <Input
                id="product-value"
                type="text"
                placeholder="R$ 0,00"
                onChange={(e) => applyMask(e)}
              />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="product-type">Tipo de Produto</Label>
            <div className="inline-flex space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eletronico">Eletrônico</SelectItem>
                  <SelectItem value="vestuario">Vestuário</SelectItem>
                  <SelectItem value="alimenticio">Alimentício</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" className="border space-x-4">
                <span>Novo tipo</span>
                <PlusCircle />
              </Button>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label>Imagem</Label>
            <div className="flex items-center gap-2">
              <Input type="file" />
              <Button variant="outline" size="sm">
                Carregar
              </Button>
            </div>
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="notes">Observações</Label>
          <Textarea id="notes" rows={5} placeholder="Digite as observações" />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Salvar</Button>
      </div>
    </div>
  );
}
