import Hero from "../components/Hero";
import Features from "../components/Features";
import JorneyFeatures from "../components/JorneyFeatures";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import Heading from "../components/Heading";
import Test from "../components/HeroTextRight";
import Jorney from "../components/Jorney";
import Recommendations from "../components/Recommendations";
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.jorney-features":
      return <JorneyFeatures key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.heading":
      return <Heading key={index} data={section} />;
    case "sections.hero-text-right":
      return <Test key={index} data={section} />;
    case "sections.deep-journey":
      return <Jorney key={index} data={section} />;
    case "sections.recommendations":
      return <Recommendations key={index} data={section} />;
    default:
      return null;
  }
}
