import Nav from "../components/nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-gray-600">
      <div>
        <Nav/>
        {children}
      </div>
      </body>
  );
}
