import { ThemeProvider } from '@material-tailwind/react';
import { AppProps } from 'next/app';

import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
);

export default MyApp;
