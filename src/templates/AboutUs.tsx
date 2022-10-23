import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const AboutUs = ({ content }: any) => {
  const { block } = content;
  return (
    <section id="about" className="relative c-container pt-12 pb-4">
      {Object.keys(block).map((keyName, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row md:justify-evenly items-center relative text-black py-5 pb-16"
        >
          <div className="relative h-[350px] hidden md:block w-full md:w-2/5">
            <Image
              layout="fill"
              className="object-center object-contain pointer-events-none"
              src={`/${block[keyName].image}`}
              alt={block[keyName].alt_text}
            />
          </div>
          <div className="md:pl-8 md:w-3/5">
            <h3 className="h2 text-center md:text-left mb-4 w-full">
              {block[keyName].heading}
            </h3>
            <div className="relative h-[130vw] w-full my-4 md:hidden">
              <Image
                layout="fill"
                className="object-center object-contain pointer-events-none"
                src={`/${block[keyName].image}`}
                alt={block[keyName].alt_text}
              />
            </div>
            <div className="prose prose-ul:list-disc prose-li:m-0">
              <ReactMarkdown>{block[keyName].text}</ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export { AboutUs };
