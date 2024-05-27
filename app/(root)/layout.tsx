import HeaderBox from "@/components/HeaderBox";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <HeaderBox />
      {children}
    </main>
  );
}
