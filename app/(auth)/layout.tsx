export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={"h-screen w-screen bg-gray-300"}>{children}</main>;
}
