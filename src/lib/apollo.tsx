import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';

export function withApollo(PageComponent: React.ElementType): (props: JSX.IntrinsicAttributes) => JSX.Element {
  const WithApollo = (props: JSX.IntrinsicAttributes): JSX.Element => {
    const client = new ApolloClient({
      uri: 'http://localhost:3000/api/graphql',
      fetch
    });

    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };

  return WithApollo;
}
