import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from '../components/layout';
import HabitList from '../components/habitList';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div></div>;
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Level up your life</h1>
        <HabitList />
      </div>

      <style jsx>
        {`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}
      </style>
    </Layout>
  );
};

export default withApollo(Home);
