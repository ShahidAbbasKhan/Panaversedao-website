import "./globals.css";
import Header from "@/componets/layout/Header";
export const metadata = {
  title: "Panaverse DAO",
  description: "Developed by Shahid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
