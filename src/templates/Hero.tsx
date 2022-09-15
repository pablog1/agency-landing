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
          <div className="h1 mb-4">We DESIGN customized Web Solutions</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            euismod ex. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Suspendisse.
          </p>
        </div>

        <ContactForm title="Get a Free Quote" />
      </div>
    </section>
  );
};

export { Hero };
