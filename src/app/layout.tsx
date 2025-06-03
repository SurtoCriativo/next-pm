import "./globals.css";
import { archivo, gochiHand } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Next PM",
  description: "Fontes locais aplicadas com sucesso!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${gochiHand.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
