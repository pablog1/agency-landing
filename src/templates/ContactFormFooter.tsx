import Image from 'next/image';

import { ContactForm } from '../components/ContactForm';

const ContactFormFooter = () => {
  return (
    <section className="relative c-container pt-12 pb-4">
      <div className="flex flex-col md:flex-row justify-evenly relative text-black py-5">
        <div className="text-center relative min-h-[200px] md:w-1/5">
          <Image
            layout="fill"
            className="object-center object-contain pointer-events-none"
            src="/assets/images/box.jpg"
            alt="About Us"
          />
        </div>
        <div className="w-full lg:max-w-lg">
          <ContactForm
            firstTitle="Let's work"
            secondTitle="together"
            width="w-full"
          />
        </div>
        <div className="text-center relative min-h-[200px] md:w-1/5">
          <Image
            layout="fill"
            className="object-center object-contain pointer-events-none"
            src="/assets/images/box.jpg"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
};

export { ContactFormFooter };
