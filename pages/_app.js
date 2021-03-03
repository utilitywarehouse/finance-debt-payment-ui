import { ApolloProvider } from '@apollo/client';
import React from 'react';
import Layout from '../components/Layout';
import { useApollo } from '../lib/apolloClient';
import '../styles/app.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp
