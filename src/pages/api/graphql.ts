import { ApolloServer, gql } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
    Query: {
        sayHello: (): string => {
            return 'Hello Everybody!';
        }
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

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
