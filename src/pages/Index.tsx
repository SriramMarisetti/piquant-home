import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CategoriesSection from "../components/home/CategoriesSection";
import AllProductsSection from "../components/home/AllProductsSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaBannerSection from "../components/home/CtaBannerSection";
import FooterSection from "../components/home/FooterSection";

const Index = () => (
  <div className="animate-fade-in">
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <CategoriesSection />
    <AllProductsSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <CtaBannerSection />
    <FooterSection />
  </div>
);

export default Index;
