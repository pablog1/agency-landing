import { Number } from '../components/number';

const Numbers = () => {
  return (
    <section className="relative c-container mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center relative text-black">
        <Number
          title="+20"
          src="/assets/images/logo_shopify_plus.png"
          alt="Shopify Plus"
        />
        <Number
          title="+100"
          src="/assets/images/logo_shopify_partners.png"
          alt="Shopify Partners"
        />
        <Number
          title="+25"
          src="/assets/images/logo_shopify.png"
          alt="Shopify"
        />
      </div>
    </section>
  );
};

export { Numbers };
