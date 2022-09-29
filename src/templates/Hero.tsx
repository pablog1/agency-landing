import { BackgroundImage } from '../background/BackgroundImage';
import { ContactForm } from '../components/ContactForm';

const Hero = ({ content }: any) => {
  return (
    <section className="relative ">
      <div className="opacity-40">
        <BackgroundImage
          src={`/${content.background_image}`}
          alt="Background hero Image"
        />
      </div>

      <div className="c-container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
        <div className="lg:w-3/5 lg:pr-4 pt-8">
          <div className="h1 mb-8 ">{content.heading}</div>
          <ul className="font-bold">
            {Object.keys(content.benefits).map((keyName, i) => (
              <li key={i}>{content.benefits[keyName].title}</li>
            ))}
          </ul>
        </div>
        <style jsx>
          {`
            li {
              background: url(/${content.benefits_icon}) no-repeat left top;
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
