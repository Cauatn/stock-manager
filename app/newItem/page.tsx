import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewItem() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full max-w-5xl  justify-between text-sm lg:flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">New Item</h1>
        <form className="mt-4 space-y-4">
          <Input placeholder="Enter item name" />
          <Input placeholder="Enter item price" />
          <Input placeholder="Enter item quantity" />
          <Button type="submit">Add Item</Button>
        </form>
      </div>
    </main>
  );
}
