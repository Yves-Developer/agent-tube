import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <main>
      {/* Hero*/}
      <Hero />
      {/* Features */}
      <Features />
      {/* Pricing */}
      <Pricing />
      {/* Footer CTA */}
      <FooterCTA />
    </main>
  );
};

export default Home;
