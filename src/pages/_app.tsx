import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { DarkTheme } from '@/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={DarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;