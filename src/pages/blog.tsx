import fs from 'fs';

import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';

export const getStaticProps = async () => {
  const settingsJsonFile = JSON.parse(
    fs.readFileSync('content/settings.json').toString()
  );

  const { logo, siteName, topBar } = settingsJsonFile;

  // Blog articles
  const files = fs.readdirSync('content/blog');
  const paths = files.map((filename) => ({
    blog: [
      JSON.parse(fs.readFileSync(`content/blog/${filename}`).toString()),
      filename,
    ],
  }));

  const blogExtract = paths.map((item) => {
    // eslint-disable-next-line no-param-reassign
    delete item.blog[0].body;
    // console.log(item.blog);
    return item.blog;
  });

  blogExtract.sort((a: any, b: any) => {
    return b[0].date.localeCompare(a[0].date);
  });

  return {
    props: {
      logo,
      siteName,
      topBar,
      blogExtract,
    },
  };
};

const Blog = (props: {
  logo: string;
  siteName: string;
  topBar: string;
  blogExtract: any;
}) => {
  return (
    <>
      <Header
        logo={props.logo}
        siteName={props.siteName}
        topBar={props.topBar}
      />
      <section className="c-container pt-24 md:pt-28 pb-12">
        <h1 className="h1 text-center mb-8">Our Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.keys(props.blogExtract).map((keyName, i) => (
            <div
              key={i}
              className="case-item flex flex-col relative text-black rounded-md"
            >
              <div className="relative h-[60vw] lg:h-[30vw] w-[1200px] max-w-full  rounded-md hover:scale-[1.02] duration-300">
                <Link
                  className=""
                  href={`/blog/${props.blogExtract[keyName][1].replace(
                    '.json',
                    ''
                  )}`}
                >
                  <a>
                    <Image
                      layout="fill"
                      className="object-center object-cover pointer-events-none rounded-md "
                      src={`/${props.blogExtract[keyName][0].image}`}
                      alt={props.blogExtract[keyName][0].title}
                    />
                  </a>
                </Link>
              </div>

              <div className="p-4">
                <Link
                  className=""
                  href={`/blog/${props.blogExtract[keyName][1].replace(
                    '.json',
                    ''
                  )}`}
                >
                  <a className="h3 mb-1 hover-state__link inline-block">
                    {props.blogExtract[keyName][0].title}
                  </a>
                </Link>
                <ReactMarkdown>
                  {props.blogExtract[keyName][0].excerpt}
                </ReactMarkdown>

                <Link
                  className=""
                  href={`/blog/${props.blogExtract[keyName][1].replace(
                    '.json',
                    ''
                  )}`}
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

      <Footer logo={props.logo} siteName={props.siteName} />
    </>
  );
};

export default Blog;
