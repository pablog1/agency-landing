import { BackgroundImage } from '../background/BackgroundImage';
import { ContactForm } from '../components/ContactForm';

const Hero = () => {
  return (
    <section className="relative ">
      <div className="opacity-40">
        <BackgroundImage
          src="/assets/images/hero_background.webp"
          alt="Background hero Image"
        />
      </div>

      <div className="c-container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
        <div className="lg:w-3/5 lg:pr-4 pt-8">
          <div className="h1 mb-8 ">
            We build slick e-commerce stores that look great and perform even
            better.
          </div>
          <ul className="font-bold">
            <li>Always amazing</li>
            <li>Marketing setup included</li>
            <li>Ecommerce report included</li>
            <li>Optimal ongoing support</li>
          </ul>
        </div>
        <style jsx>
          {`
            li {
              background: url(/assets/images/tick_icon.svg) no-repeat left top;
              padding-left: 30px;
              margin-bottom: 10px;
            }
          `}
        </style>
        <ContactForm
          firstTitle="Let's work"
          secondTitle="together"
          width="w-full lg:w-2/5"
        />
      </div>
    </section>
  );
};

export { Hero };
