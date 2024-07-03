import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YUMA Bio",
  description: "YUMA Bio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return children;
}
