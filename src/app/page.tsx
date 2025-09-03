import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import { FAQSection } from "../components/FAQsection";
import ContactMe from "../components/contactme";
import WhatsappButton from "../components/whatsappbutton";
import BackToTopButton from "../components/backtotopbutton";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FAQSection />
      <ContactMe />
      <WhatsappButton phoneNumber="12345678" />
      <BackToTopButton />
    </>
  );
}
