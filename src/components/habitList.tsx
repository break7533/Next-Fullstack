import Habit from './habit';

const HabitList = (): JSX.Element => {
    return (
        <section>
            <h2>My Habits</h2>
            <Habit />
            <Habit />
            <Habit />
        </section>
    );
};

export default HabitList;
