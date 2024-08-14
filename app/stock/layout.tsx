"use client";

import { Sidebar } from "@/components/sidebar/Sidebar";

import { useSidebarToggle } from "@/hooks/use-side-bar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export default function Stock({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-white dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 w-full justify-center flex",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
}
