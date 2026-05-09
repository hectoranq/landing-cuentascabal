import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import BentoSection from "./components/BentoSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <BentoSection />
      <CTASection />
    </main>
    <Footer />
  </>
  );
}
