import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "invoiceremindertest",
  description: "track invoices and send email reminders",
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
