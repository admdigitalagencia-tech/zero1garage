import { useTranslations } from '@/hooks/useTranslations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ServicesGrid from '@/components/ServicesGrid';
import RepairSection from '@/components/RepairSection';
import BodyShopSection from '@/components/BodyShopSection';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const { lang, setLang, t } = useTranslations();

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Stats t={t} />
      <ServicesGrid t={t} />
      <RepairSection t={t} />
      <BodyShopSection t={t} />
      <Reviews t={t} />
      <About t={t} />
      <MapSection t={t} />
      <Footer t={t} />
      <WhatsAppButton />
    </>
  );
};

export default Index;
