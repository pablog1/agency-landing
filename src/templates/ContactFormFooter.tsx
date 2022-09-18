import Image from 'next/image';

import { ContactForm } from '../components/ContactForm';

const ContactFormFooter = () => {
  return (
    <section className="relative c-container pt-12 pb-4">
      <div className="flex flex-col md:flex-row justify-evenly relative text-black py-5">
        <div className="text-center relative min-h-[200px] md:w-2/5">
          <Image
            layout="fill"
            className="object-center object-contain pointer-events-none"
            src="/assets/images/team_member.jpg"
            alt="About Us"
          />
        </div>
        <div className="md:pl-8 md:w-3/5">
          <h3 className="h2 mb-4">Contact</h3>
          <ContactForm firstTitle="Let's work" secondTitle="together" />
        </div>
        <div className="text-center relative min-h-[200px] md:w-2/5">
          <Image
            layout="fill"
            className="object-center object-contain pointer-events-none"
            src="/assets/images/team_member.jpg"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
};

export { ContactFormFooter };
