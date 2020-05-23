import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Habit from './habit';

const GET_HABITS = gql`
    query getHabits {
        habits {
            _id
            name
            events {
                _id,
                date
            }
        }
    }
`;

const HabitList = (): JSX.Element => {
    const { data, loading, error } = useQuery(GET_HABITS);
    if (error) {
        return <section />;
    }

    if (loading) return <section />;

    const { habits } = data;

    return (
        <section>
            <h2>My Habits</h2>
            {habits.map((habit, index) => (
                <Habit key={habit._id} habit={habit} index={index} />
            ))}
        </section>
    );
};

export default HabitList;