import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import type { Metadata } from "next";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arteez",
  description: "Projet RNCP Arteez",
};

export default function RootLayout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: Metadata["title"];
  description: Metadata["description"];
}) {
  // const navigate = useRouter();
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <button
          className="group flex items-center group-hover:text-yellow-800"
          // onClick={() => navigate.back()}
        >
          {/** marche pas car rendu côté client et peut pas rendre fichier coté
          client car compilé dans le back */}
          <ArrowLeftIcon className="p-2 h-7 w-7" />
          <span>Retour</span>
        </button>
        {children}
      </body>
    </html>
  );
}
