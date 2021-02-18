import React, { useEffect } from 'react';
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import *  as gtag from '../lib/gtag';
import { useRouter } from 'next/dist/client/router';
import { AppContextProvider } from '../Provider';
const isProduction = process.env.NODE_ENV === "production";


const MyApp: React.FC<AppProps> = ({ Component, pageProps}) =>{
  const router = useRouter()

  useEffect(()=>{
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  },[router.events])
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
    <AppContextProvider>
        <Component {...pageProps} params={router.pathname}/>
        <GlobalStyle></GlobalStyle>
      </AppContextProvider>
    </>
  )
}

export default MyApp
