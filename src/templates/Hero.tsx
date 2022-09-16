import { BackgroundImage } from '../background/BackgroundImage';
import { ContactForm } from '../components/ContactForm';

const Hero = () => {
  return (
    <section className="relative ">
      <BackgroundImage
        src="/assets/images/hero_background.jpg"
        alt="Background hero Image"
      />

      <div className="c-container mx-auto flex flex-row items-center justify-evenly  relative text-white">
        <div className="md:pr-4">
          <div className="h1 mb-4">
            We build slick e-commerce stores that look great and perform even
            better.
          </div>
          <ul>
            <li>Always amazing</li>
            <li>Marketing setup included</li>
            <li>Ecommerce report included</li>
            <li>Optimal ongoing support</li>
          </ul>
        </div>

        <ContactForm firstTitle="Let's work" secondTitle="together" />
      </div>
    </section>
  );
};

export { Hero };
