export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="z-10 w-full max-w-7xl justify-between text-sm lg:flex flex-col gap-10 py-10 px-10 m-auto">
      {children}
    </section>
  );
}
