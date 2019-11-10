import HabitButton from './habitButton';

const Habit = (): JSX.Element => {
    return (
        <article>
            <h3> Habit Title</h3>
            <div>
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
            </div>
        </article>
    );
};

export default Habit;
