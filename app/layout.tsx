import "@styles/global.css";

export const metadata: Metadata = {
  title: "Unite Portfolio",
  description: "Portfolio using next.js with typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
