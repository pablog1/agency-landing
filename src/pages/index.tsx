import fs from 'fs';

import { AboutUs } from '../templates/AboutUs';
import { AccordionTemp } from '../templates/AccordionTemp';
import { ContactFormFooter } from '../templates/ContactFormFooter';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { Hero } from '../templates/Hero';
import { ImageTextBlocks } from '../templates/ImageTextBlocks';
import { LogosCarousel } from '../templates/logoCarousel';
import { OurClients } from '../templates/OurClients';
import { Services } from '../templates/ServicesCard';

export const getStaticProps = async () => {
  const settingsJsonFile = JSON.parse(
    fs.readFileSync('content/settings.json').toString()
  );

  const homeJsonFile = JSON.parse(
    fs.readFileSync('content/home.json').toString()
  );

  const { hero } = homeJsonFile;
  const { numbers } = homeJsonFile;
  // eslint-disable-next-line
  const { images_text } = homeJsonFile;
  const { ourClients } = homeJsonFile;
  const { services } = homeJsonFile;
  const { someApps } = homeJsonFile;
  const { faq } = homeJsonFile;
  const { about } = homeJsonFile;

  const { logo, siteName, topBar } = settingsJsonFile;
  return {
    props: {
      logo,
      siteName,
      topBar,
      hero,
      numbers,
      images_text,
      ourClients,
      services,
      someApps,
      faq,
      about,
    },
  };
};

const Index = (props: {
  logo: string;
  siteName: string;
  topBar: string;
  hero: object;
  numbers: object;
  images_text: any;
  ourClients: object;
  services: object;
  someApps: object;
  faq: object;
  about: object;
}) => (
  <>
    <Header logo={props.logo} siteName={props.siteName} topBar={props.topBar} />
    <Hero content={props.hero} />
    {/* <Numbers content={props.numbers} /> */}
    <ImageTextBlocks content={props.images_text.block} />
    <OurClients content={props.ourClients} />
    <Services content={props.services} />
    {/* <LogoGrid content={props.someApps} /> */}
    <LogosCarousel content={props.someApps} />
    <AccordionTemp content={props.faq} />
    <AboutUs content={props.about} />
    <ContactFormFooter />
    <Footer logo={props.logo} siteName={props.siteName} />
  </>
);

export default Index;
