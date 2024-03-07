import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pomo App",
  description:
    "Pomo App é uma aplicação web intuitiva e eficiente projetada para ajudá-lo a gerenciar seu tempo com o método Pomodoro. Com uma interface limpa e amigável, o Pomo App oferece uma maneira simples e eficaz de dividir seu tempo em períodos de trabalho concentrado intercalados com intervalos de descanso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
