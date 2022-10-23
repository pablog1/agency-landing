import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

type PostArticleProps = {
  article: any;
};

const MarkdownComponents: object = {
  // Code will go here

  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className="postImgWrapper flex justify-center my-8 h-[77vw] max-h-[450px] relative">
          <Image
            layout="fill"
            src={`/${image.properties.src}`}
            className="postImg object-contain w-full"
            alt={alt}
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

const PostArticle = (props: PostArticleProps) => (
  <article className="c-container !max-w-screen-2xl mb-8">
    <h1 className="h1 mt-32 mb-4 text-center !text-black">
      {props.article.title}
    </h1>
    <picture className="flex justify-center py-12">
      <Image
        className="object-center object-contain pointer-events-none rounded-md"
        src={`/${props.article.image}`}
        alt={props.article.title}
        objectFit="cover"
        width="1200"
        height="800"
      />
    </picture>

    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={props.article.body}
      components={MarkdownComponents}
      className="article!max-w-screen-lg mx-auto prose-p:mb-8 prose-headings:font-bold prose-headings:mb-4 prose-h2:text-2xl prose-h3:text-lg "
    />
  </article>
);

export { PostArticle };
