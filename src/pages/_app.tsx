// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { NavBar } from '../components/navbar';
import GlobalStyle from '../components/globalStyles/global-styles';
import { FooterView } from '../components/atoms/footer';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
      <FooterView/>
    </>
  );
};

export default MyApp;
