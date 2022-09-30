import fs from 'fs';

import { AboutUs } from '../templates/AboutUs';
import { AccordionTemp } from '../templates/AccordionTemp';
import { Base } from '../templates/Base';
import { ContactFormFooter } from '../templates/ContactFormFooter';
import { Hero } from '../templates/Hero';
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

  console.log(numbers);

  return {
    props: {
      hero,
      numbers,
    },
  };
};
const Index = (props: { hero: any; numbers: any }) => (
  <>
    <Hero content={props.hero} />
    <Numbers content={props.numbers} />
    <Base />
    <OurClients />
    <Services />
    <LogoGrid />
    <AccordionTemp stories={stories} />
    <AboutUs />
    <ContactFormFooter />
    {/*
    <Benefits />
    <VideoWithText />
    <Carousel />
    <Carouselx3 />
    <BannerWithBK
      title="Reach out now and Get a FREE Sample Website Design"
      align="right" // left or right
      tailwindColor="!text-primary-400" // needs !important
      inlineContainer={true}
    />
    <Team team={team} />
*/}
  </>
);

export default Index;
