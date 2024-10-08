import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold inline-flex space-x-4">
              <p className="text-blue-800">Inspecione</p> <p>Engenharia</p>
            </h1>
            <p className="text-balance text-muted-foreground">
              Entre com sua matrícula abaixo para ter acesso ao sistema
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Número da matricula</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua a senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href={"/stock"}>
              {" "}
              <Button type="submit" className="w-full bg-blue-500">
                Entrar
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              Entre com o Email
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não possui uma conta?{" "}
            <Link href="#" className="underline">
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
