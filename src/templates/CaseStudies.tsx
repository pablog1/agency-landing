import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = ({ content }: any) => {
  return (
    <section id="case-studies" className="relative c-container pt-12 pb-4">
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(content).map((keyName, i) => (
          <div
            key={i}
            className="case-item flex flex-col relative text-black  bg-red-100 m-8"
          >
            <div className="relative h-[800px] w-[800px] max-w-full max-h-[50%]">
              <Image
                layout="fill"
                className="object-center object-cover pointer-events-none"
                src={`/${content[keyName][0].image}`}
                alt={content[keyName][0].title}
              />
            </div>
            <h3 className="h2 mb-4">{content[keyName][0].title}</h3>
            <Link
              href={`/case-study/${content[keyName][1].replace('.json', '')}`}
            >
              <a> {content[keyName][0].title}</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export { CaseStudies };
