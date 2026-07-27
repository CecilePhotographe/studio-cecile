export const metadata = {
  title: "Studio Cécile",
  description: "Gestion de studio photo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
