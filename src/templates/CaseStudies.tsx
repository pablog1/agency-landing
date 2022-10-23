import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const CaseStudies = ({ content }: any) => {
  return (
    <section id="case-studies" className="relative c-container pt-12 pb-4">
      <h2 className="h2 text-center pb-8">Case studies</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.keys(content).map((keyName, i) => (
          <div
            key={i}
            className="case-item flex flex-col relative text-black rounded-md bg-gray-200"
          >
            <div className="relative h-[60vw] lg:h-[30vw] w-[1200px] max-w-full bg-blue-gray-400 rounded-t-md">
              <Image
                layout="fill"
                className="object-center object-cover pointer-events-none rounded-t-md"
                src={`/${content[keyName][0].image}`}
                alt={content[keyName][0].title}
              />
            </div>
            <div className="p-4">
              <Link
                className=""
                href={`/case-study/${content[keyName][1].replace('.json', '')}`}
              >
                <a className="h3 mb-1 hover-state__link inline-block">
                  {content[keyName][0].title}
                </a>
              </Link>
              <ReactMarkdown>{content[keyName][0].excerpt}</ReactMarkdown>

              <Link
                className=""
                href={`/case-study/${content[keyName][1].replace('.json', '')}`}
              >
                <a className="mt-2 hover-state__link inline-block">
                  Read more..
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { CaseStudies };
