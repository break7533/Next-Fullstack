import { ApolloServer, gql } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';
import { mergeResolvers, mergeTypeDefs } from '@graphql-toolkit/schema-merging';
import { habitsMutations } from '../../src/api/habits/mutations';
import { habitsResolvers } from '../../src/api/habits/resolvers';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Habits from '../../src/api/habits/Habits.graphql';

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const fakeResolvers = {
    Query: {
        sayHello: (): string => {
            return 'Hello Everybody!';
        }
    }
};

const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);

const resolvers = mergeResolvers([fakeResolvers, habitsResolvers, habitsMutations]);

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
});

export const config = {
    api: {
        bodyParser: false
    }
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);

// import { NextApiRequest, NextApiResponse } from 'next';

// export default (req: NextApiRequest, res: NextApiResponse): void => {
//     res.status(200).json({
//         test: 'Hello Leonor',
//     });
// };

// Long way
// export default (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.statusCode = 200;
//   res.end(
//     JSON.stringify({
//       test: "Hello level up"
//     })
//   );
// };
