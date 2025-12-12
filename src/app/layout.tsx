import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evaluación Práctica 1 - Next.js",
  description: "Desarrollado por Yesmir Guzmán",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          {children}
          <footer style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
            <p>Estudiante: Yesmir Guzmán - C.I: 20130682</p>
            <p>Evaluación Práctica 1 - Next.js</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
