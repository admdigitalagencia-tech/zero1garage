import { useTranslations } from '@/hooks/useTranslations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CredibilityBar from '@/components/CredibilityBar';
import ServicesGrid from '@/components/ServicesGrid';
import BodyShopSection from '@/components/BodyShopSection';
import InsuranceSection from '@/components/InsuranceSection';
import ProcessSteps from '@/components/ProcessSteps';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import MapSection from '@/components/MapSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const { lang, setLang, t } = useTranslations();

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <CredibilityBar t={t} />
      <ServicesGrid t={t} />
      <BodyShopSection t={t} />
      <InsuranceSection t={t} />
      <ProcessSteps t={t} />
      <Reviews t={t} />
      <About t={t} />
      <MapSection t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
      <WhatsAppButton />
    </>
  );
};

export default Index;
