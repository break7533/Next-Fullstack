import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from 'apollo-boost';
import { NextPageContext } from 'next';
import { AppContext } from 'next/app';


interface INextPageContextWithApollo extends NextPageContext {
    apolloClient: ApolloClient<NormalizedCacheObject> | null;
    apolloState: NormalizedCacheObject;
    ctx: NextPageContextApp;
}

type NextPageContextApp = INextPageContextWithApollo & AppContext;

const isDev = process.env.NODE_ENV !== 'production';
const url = isDev ? 'http://localhost:3000' : 'https://next-fullstack.break7533.now.sh';

const initApolloClient = (initialState = {}): ApolloClient<{}> => {
    const cache = new InMemoryCache().restore(initialState);
    const link = new HttpLink({
        fetch,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        fetchOptions: {
            mode: 'cors',
        },
        uri: `${url}/api/graphql`,
        useGETForQueries: true,
    });
    const ssrMode = typeof window === 'undefined';
    const client = new ApolloClient({
        ssrMode,
        link,
        cache,
    });
    return client;
};

export function withApollo(PageComponent): React.ReactNode {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }): JSX.Element => {
        const client = apolloClient || initApolloClient(apolloState);

        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    WithApollo.getInitialProps = async (ctx: NextPageContextApp): Promise<{}> => {
        const { AppTree } = ctx;
        const apolloClient = (ctx.apolloClient = initApolloClient());

        let pageProps = {};
        if (PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
        }

        // If on server
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
                    />
                );
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
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
