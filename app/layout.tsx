import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "晴爪 Pawlish 宠物洗护馆",
  description:
    "晴爪 Pawlish 宠物洗护馆，提供猫犬洗护、造型修剪、深层护理和幼宠适应洗护服务。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
