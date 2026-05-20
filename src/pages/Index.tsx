import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="RIGS Electrical | Trusted Tring Electrician | Hertfordshire"
        description="NICEIC registered Tring electricians for rewires, EV chargers, fault finding and more across Hertfordshire. Request a callback today."
        path="/"
      />
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <ProjectsShowcase />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
