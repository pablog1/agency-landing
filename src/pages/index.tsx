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

const stories = [
  {
    title: 'Can you help us with for our ecommerce website?',
    content:
      'We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform.',
  },
  {
    title: 'Can you help us with support for our ecommerce website?',
    content:
      'We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform.',
  },
  {
    title: 'Can you help us support for our ecommerce website?',
    content:
      'We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform.',
  },
  {
    title: 'Can you help support for our ecommerce website?',
    content:
      'We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform. We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform.',
  },
];

export const getStaticProps = async () => {
  const jsonFile = JSON.parse(fs.readFileSync('content/home.json').toString());
  const { hero } = jsonFile;
  const { numbers } = jsonFile;
  // eslint-disable-next-line
  const { images_text } = jsonFile;
  const { ourClients } = jsonFile;
  const { services } = jsonFile;
  const { someApps } = jsonFile;

  return {
    props: {
      hero,
      numbers,
      images_text,
      ourClients,
      services,
      someApps,
    },
  };
};
const Index = (props: {
  hero: any;
  numbers: any;
  images_text: any;
  ourClients: any;
  services: any;
  someApps: any;
}) => (
  <>
    <Hero content={props.hero} />
    <Numbers content={props.numbers} />
    <ImageTextBlocks content={props.images_text.block} />
    <OurClients content={props.ourClients} />
    <Services content={props.services} />
    <LogoGrid content={props.someApps} />
    <AccordionTemp stories={stories} />
    <AboutUs />
    <ContactFormFooter />
  </>
);

export default Index;
