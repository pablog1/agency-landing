import { ContactForm } from '../components/ContactForm';

const ContactFormFooter = () => {
  return (
    <section id="footerContactForm" className="relative c-container pb-4">
      <div className="flex flex-col md:flex-row justify-evenly relative text-black pb-5">
        <div className="text-center relative min-h-[200px] md:w-1/9"></div>
        <div className="w-full lg:max-w-2xl">
          <ContactForm
            firstTitle="Let's work"
            secondTitle="together"
            width="w-full"
          />
        </div>
        <div className="text-center relative min-h-[200px] md:w-1/9"></div>
      </div>
    </section>
  );
};

export { ContactFormFooter };
