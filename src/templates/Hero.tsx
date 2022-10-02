import Image from 'next/image';

import { BackgroundImage } from '../background/BackgroundImage';

const Hero = ({ content }: any) => {
  const { partnerLogos } = content;
  return (
    <section className="relative pt-32">
      <div>
        <BackgroundImage
          src={`/${content.backgroundImage}`}
          alt="Background hero Image"
        />
      </div>

      <div className="c-container mx-auto flex flex-col lg:flex-row items-center justify-between relative pb-8">
        <div className="lg:w-3/5 rounded-md bg-opacityColor-100 p-8">
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
              margin-bottom: 30px;
            }
          `}
        </style>
        {/*
        <ContactForm
          firstTitle="Let's work"
          secondTitle="together"
          width="w-full lg:w-2/5"
        />
          */}
      </div>
      <div className="bg-opacityColor-200 relative">
        <ul className="c-container flex justify-between ">
          {Object.keys(partnerLogos).map((keyName, i) => (
            <li key={i} className="flex w-32 h-24 relative mx-2 md:mx-0">
              <Image
                src={`/${partnerLogos[keyName].logo}`}
                objectFit="contain"
                layout="fill"
                alt="Logo"
                className=""
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Hero };
