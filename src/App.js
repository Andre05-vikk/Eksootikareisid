import React from 'react';
import Navbar from './components/Navbar';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}

export default App;