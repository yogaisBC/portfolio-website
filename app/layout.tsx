import type { Metadata } from "next"; 
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lawrence - Portfolio",
  description: "Professional portfolio showcasing my work, skills, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <SpeedInsights/>
        {children}
      </main>
    </SidebarProvider>
  );
}
