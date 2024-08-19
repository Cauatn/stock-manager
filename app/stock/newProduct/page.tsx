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
import { HOST_URL } from "@/lib/globals";
import { PlusCircle } from "lucide-react";

export default function NewProduct() {
  async function handleSubmit(form: FormData) {
    "use server";

    let product_name = form.get("name");
    let product_note = form.get("notes");
    let product_min_stock = form.get("min-stock");
    let product_max_stock = form.get("max-stock");
    let product_tag = form.get("tag");

    fetch(`${HOST_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: product_name,
        product_description: product_note,
        product_quantity_in_stock: Number(product_min_stock),
        product_max_stock: Number(product_max_stock),
        product_min_stock: Number(product_min_stock),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form
      action={handleSubmit}
      className="z-10 w-full max-w-7xl text-sm lg:flex flex-col gap-10 py-10 px-10"
    >
      <h1 className="text-4xl">Adição de novo produto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10">
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Nome do Produto</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite o nome do produto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="min-stock">Estoque Mínimo</Label>
              <Input
                id="min-stock"
                name="min-stock"
                type="number"
                min="0"
                placeholder="Estoque mínimo"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="max-stock">Estoque Máximo</Label>
              <Input
                id="max-stock"
                name="max-stock"
                type="number"
                min="0"
                placeholder="Estoque máximo"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="max-stock">Valor de Custo</Label>
              <Input
                id="product-value"
                name="product-value"
                type="text"
                placeholder="R$ 0,00"
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
          <Textarea
            id="notes"
            name="notes"
            rows={5}
            placeholder="Digite as observações"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Cancelar</Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
