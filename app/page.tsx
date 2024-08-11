import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Tela inicial do app
      <Link href={"/stock"}>
        <Button>Ir</Button>
      </Link>
    </main>
  );
}
