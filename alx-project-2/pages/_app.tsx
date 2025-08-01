import type { AppProps } from 'next/app';
import Header from '@/components/layout/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
