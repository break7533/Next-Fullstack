import Habit from './habit';

interface IHabitListProps {
    habits: string[];
}

const HabitList = (props: IHabitListProps): JSX.Element => {
    return (
        <section>
            <h2>My Habits</h2>
            {props.habits.map((habit, index) => (
                <Habit key={habit} habit={habit} index={index} />
            ))}
        </section>
    );
};

export default HabitList;
