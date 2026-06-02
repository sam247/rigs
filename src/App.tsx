import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Domestic from "./pages/Domestic";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyElectricianHertfordshire from "./pages/services/EmergencyElectricianHertfordshire";
import Blog from "./pages/Blog";
import ConsumerUnitVsFuseBox from "./pages/blog/ConsumerUnitVsFuseBox";
import LocationPage from "./pages/electrician/LocationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercial" element={<Navigate to="/domestic" replace />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/services" element={<Navigate to="/domestic" replace />} />
          <Route path="/services/emergency-electrician" element={<EmergencyElectricianHertfordshire />} />
          <Route path="/services/fuse-board-upgrades" element={<Navigate to="/domestic#fuse-board-upgrades" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/consumer-unit-vs-fuse-box" element={<ConsumerUnitVsFuseBox />} />
          <Route path="/electrician/:slug" element={<LocationPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
