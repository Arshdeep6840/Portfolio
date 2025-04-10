import "./globals.css";


export const metadata = {
  title: "Portfolio | Arshdeep Singh",
  description: "Data Scientist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
