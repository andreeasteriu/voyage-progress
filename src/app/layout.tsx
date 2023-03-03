import "./globals.css";

export const metadata = {
  title: "Voyage Progress",
  description:
    "A Voyage Progress React component which shows roughly how far the ferry is along its' path.",
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
