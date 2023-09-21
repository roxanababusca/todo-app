import Layout from '../components/Layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });


export default function App({ 
  Component, 
  pageProps: { session, ...pageProps },
 }) {
  return(
    <div className={`${raleway.variable} font-sans`}>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps}/>
        </SessionProvider> 
      </Layout>
    </div> 
  );
}
