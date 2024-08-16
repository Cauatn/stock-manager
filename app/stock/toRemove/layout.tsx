export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="z-10 w-full max-w-7xl text-sm lg:flex flex-col gap-10 py-10 px-10 mx-auto">
      {children}
    </section>
  );
}
