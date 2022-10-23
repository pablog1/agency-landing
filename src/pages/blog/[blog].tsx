import fs from 'fs';

import { PostArticle } from '../../components/postArticle';
import { Footer } from '../../templates/Footer';
import { Header } from '../../templates/Header';

export const getStaticPaths = async () => {
  const files = fs.readdirSync('content/blog');
  // console.log('files: ', files);
  const paths = files.map((filename) => ({
    params: {
      blog: filename.replace('.json', ''),
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

  const { blog } = params;
  // console.log(blog);
  const article = JSON.parse(
    fs.readFileSync(`content/blog/${blog}.json`).toString()
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
      <PostArticle article={props.article} />

      <Footer logo={props.logo} siteName={props.siteName} />
    </>
  );
};

export default Post;
