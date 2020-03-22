import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { NextComponentType } from 'next';

export function withApollo(PageComponent: NextComponentType): (props: {}) => JSX.Element {
    const WithApollo = (props): JSX.Element => {
        const client = new ApolloClient({
            fetch,
            uri: 'http://localhost:3000/api/graphql',
        });

        return (
            <ApolloProvider client={client}>
                <PageComponent {...props} />
            </ApolloProvider>
        );
    };

    return WithApollo;
}
