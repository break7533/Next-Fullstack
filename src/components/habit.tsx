import HabitButton from './habitButton';

interface IHabitProps {
    habit: string;
}

const getLastSevenDays = (): Date[] => {
    return '0123456'.split('').map((day) => {
        const tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - parseInt(day));
        return tempDate;
    });
};

const Habit = (props: IHabitProps): JSX.Element => {
    const dates = getLastSevenDays();
    return (
        <article>
            <h3>{props.habit}</h3>
            <div>
                {dates.map((date) => <HabitButton key={date.getTime()} {...{ date }} />)}
            </div>
        </article>
    );
};

export default Habit;
