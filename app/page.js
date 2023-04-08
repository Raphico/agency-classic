import { Navbar } from "../components";
import { CoreFeatures, Features, Hero, Pricing, TechStacks } from "../sections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CoreFeatures />
      <TechStacks />
      <Pricing />
    </div>
  )
}