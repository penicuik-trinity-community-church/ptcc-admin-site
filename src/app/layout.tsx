import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin site for PTCC",
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
