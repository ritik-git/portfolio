import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';


import { memo } from 'react';
import WhatsAppFloatingButton from '../components/WhatsappIcon';


const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {


  return (
    <>
     <Component {...pageProps} />
     
     <WhatsAppFloatingButton/> 
   
    </>
  );
});

export default MyApp;
