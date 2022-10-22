import fs from 'fs';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { Footer } from '../../templates/Footer';
import { Header } from '../../templates/Header';

const MarkdownComponents: object = {
  // Code will go here

  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className="postImgWrapper flex justify-center py-8">
          <Image
            src={`/${image.properties.src}`}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
          {hasCaption ? (
            <div className="caption" aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('content/case_studies');
  // console.log('files: ', files);
  const paths = files.map((filename) => ({
    params: {
      caseStudy: filename.replace('.json', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const settingsJsonFile = JSON.parse(
    fs.readFileSync('content/settings.json').toString()
  );

  const { caseStudy } = params;
  // console.log(caseStudy);
  const article = JSON.parse(
    fs.readFileSync(`content/case_studies/${caseStudy}.json`).toString()
  );

  const { logo, siteName, topBar } = settingsJsonFile;

  return {
    props: {
      logo,
      siteName,
      topBar,
      article,
    },
  };
};

const Post = (props: {
  logo: string;
  siteName: string;
  topBar: string;
  article: any;
}) => {
  return (
    <>
      <Header
        logo={props.logo}
        siteName={props.siteName}
        topBar={props.topBar}
      />
      <article className="c-container">
        <h1 className="h1 mt-32 mb-4">{props.article.title}</h1>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={props.article.body}
          components={MarkdownComponents}
        />
      </article>

      <Footer logo={props.logo} siteName={props.siteName} />
    </>
  );
};

export default Post;