import { Navbar } from "../components";
import { CoreFeatures, Features, Footer, FrequentlyAskedQuestions, Hero, Pricing, TechStacks, Testimonials } from "../sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CoreFeatures />
      <TechStacks />
      <Pricing />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  )
}