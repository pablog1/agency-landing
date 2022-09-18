import { ServiceCard } from '../components/serviceCard';

const Services = () => {
  return (
    <section className="relative c-container">
      <div className="flex flex-col xl:flex-row justify-center items-center relative text-black mt-28">
        <ServiceCard
          title="Shopify PLUS Development"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisi vulputate in."
          src="/assets/images/logo_shopify_plus.png"
          alt="Shopify Plus"
        />
        <ServiceCard
          title="Monthly Website Support"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisi vulputate in."
          src="/assets/images/logo_shopify_partners.png"
          alt="Shopify Partners"
        />
        <ServiceCard
          title="Shopify Development"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisi vulputate in."
          src="/assets/images/logo_shopify.png"
          alt="Shopify"
        />
      </div>
    </section>
  );
};

export { Services };
