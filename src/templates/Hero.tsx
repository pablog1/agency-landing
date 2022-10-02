import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';

import { BackgroundImage } from '../background/BackgroundImage';

const Hero = ({ content }: any) => {
  const { partnerLogos } = content;
  const { benefits } = content;
  const title = benefits.map((elem: any) => elem.title);
  console.log(title);

  return (
    <section className="relative pt-32">
      <div>
        <BackgroundImage
          src={`/${content.backgroundImage}`}
          alt="Background hero Image"
        />
      </div>

      <div className="c-container mx-auto flex flex-col lg:flex-row items-center justify-between relative pb-8">
        <div className="lg:w-3/5 rounded-md  p-8">
          <div className="h1 mb-8 !text-white">{content.heading}</div>
          <ul className="font-bold text-primary-600 text-3xl pb-12">
            <li>
              {/* https://www.npmjs.com/package/react-typing-effect */}
              <ReactTypingEffect
                text={title}
                typingDelay={500}
                eraseDelay={2000}
                speed={50}
                eraseSpeed={0}
              />
            </li>
          </ul>

          <Button className="bg-primary-500 p-0 text-base ">
            {/* eslint-disable */}
            <Link href="/#footerContactForm">
              <p className="px-6 py-4">GET IN TOUCH</p>
            </Link>
             {/* eslint-enable */}
          </Button>
        </div>
        <style jsx>
          {`
            .xxxx li {
              background: url(/${content.benefits_icon}) no-repeat left top;
              padding-left: 30px;
              background-position: 0 9px;
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
