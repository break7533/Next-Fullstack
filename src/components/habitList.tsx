import Habit from './habit';

interface IHabitListProps {
    habits: string[];
}

const HabitList = (props: IHabitListProps): JSX.Element => {
    return (
        <section>
            <h2>My Habits</h2>
            {props.habits.map((habit) => (
                <Habit key={habit} habit={habit} />
            ))}
        </section>
    );
};

export default HabitList;
