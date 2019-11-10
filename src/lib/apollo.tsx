import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const initApolloClient = (initialState = {}): ApolloClient<{}> => {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState);
  const link = new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
    fetch
  });

  const client = new ApolloClient({
    ssrMode,
    link,
    cache
  });

  return client;
};

export function withApollo(PageComponent: NextComponentType): (props: {}) => JSX.Element {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }): JSX.Element => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx: NextPageContext): Promise<{}> => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apolloClient) = initApolloClient();
    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // If on server side
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState
    };
  };

  return WithApollo;
}
