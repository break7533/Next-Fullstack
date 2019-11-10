import HabitButton from './habitButton';

const getLast7Days = (): Date[] => {
    const dates = '0123456'.split('').map((day: string) => {
        const tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - parseInt(day));
        return tempDate;
    });
    return dates;
};

const Habit = ({ habit }): JSX.Element => {
    const dates = getLast7Days();
    return (
        <article>
            <h3>{habit}</h3>
            <div>
                {dates.map((date) => (
                    <HabitButton key={date.toDateString()} date={date} />
                ))}
            </div>
        </article>
    );
};

export default Habit;
