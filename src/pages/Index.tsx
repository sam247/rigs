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
        title="Electrician Tring | Emergency Electricians Tring | Tring, Hertfordshire UK"
        description="NICEIC registered Tring electricians for rewires, kitchen & bathroom electrics, fault finding and more across Hertfordshire. Request a callback today."
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
