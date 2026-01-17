import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}
