import fs from 'fs';

import { AboutUs } from '../templates/AboutUs';
import { AccordionTemp } from '../templates/AccordionTemp';
import { ContactFormFooter } from '../templates/ContactFormFooter';
import { Hero } from '../templates/Hero';
import { ImageTextBlocks } from '../templates/ImageTextBlocks';
import { LogoGrid } from '../templates/LogoGrid';
import { Numbers } from '../templates/Numbers';
import { OurClients } from '../templates/OurClients';
import { Services } from '../templates/ServicesCard';

export const getStaticProps = async () => {
  const jsonFile = JSON.parse(fs.readFileSync('content/home.json').toString());
  const { hero } = jsonFile;
  const { numbers } = jsonFile;
  // eslint-disable-next-line
  const { images_text } = jsonFile;
  const { ourClients } = jsonFile;
  const { services } = jsonFile;
  const { someApps } = jsonFile;
  const { faq } = jsonFile;
  const { about } = jsonFile;

  return {
    props: {
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
    <Hero content={props.hero} />
    <Numbers content={props.numbers} />
    <ImageTextBlocks content={props.images_text.block} />
    <OurClients content={props.ourClients} />
    <Services content={props.services} />
    <LogoGrid content={props.someApps} />
    <AccordionTemp content={props.faq} />
    <AboutUs content={props.about} />
    <ContactFormFooter />
  </>
);

export default Index;
