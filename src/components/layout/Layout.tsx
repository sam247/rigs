import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ConversionClickTracker from "@/components/ConversionClickTracker";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <ConversionClickTracker />
    </div>
  );
};

export default Layout;
