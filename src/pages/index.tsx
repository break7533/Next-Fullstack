import { useState } from 'react';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from '../components/layout';
import HabitList from '../components/habitList';
import HabitForm from '../components/habitForm';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = (): JSX.Element => {
  const [habits, setHabits] = useState(['Wash teeth']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div></div>;
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Level up your life</h1>
        <div className="list">
          <HabitForm setHabits={setHabits} />
          <HabitList />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
    `}
      </style>
    </Layout>
  );
};

export default withApollo(Home);
