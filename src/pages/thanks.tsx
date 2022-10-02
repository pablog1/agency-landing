import fs from 'fs';

import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';

export const getStaticProps = async () => {
  const settingsJsonFile = JSON.parse(
    fs.readFileSync('content/settings.json').toString()
  );

  const { logo, siteName, topBar } = settingsJsonFile;
  return {
    props: {
      logo,
      siteName,
      topBar,
    },
  };
};

const Index = (props: { logo: string; siteName: string; topBar: string }) => (
  <>
    <Header logo={props.logo} siteName={props.siteName} topBar={props.topBar} />
    <div>
      <h1 className="my-60 mx-auto w-full text-center text-black text-3xl">
        Thanks!
      </h1>
    </div>

    <Footer logo={props.logo} siteName={props.siteName} />
  </>
);

export default Index;
