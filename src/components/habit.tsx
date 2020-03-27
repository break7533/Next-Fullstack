import HabitButton from './habitButton';

interface IHabitProps {
    habit: string;
    index: number;
}

const colors = [
    '#718096',
    '#F56565',
    '#F6E05E',
    '#68D391',
    '#63B3ED',
];

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
            <div className="buttons">
                {dates.map((date) => <HabitButton key={date.getTime()} {...{ date }} />)}
            </div>
            <style jsx>{`
            article {
                padding: 20px;
                border-radius: 15px;
                box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
            }
            h3 {
                margin-top: 0;
                border-bottom: solid 4px ${colors[props.index]}
            }
            .buttons {
                display:flex;
            }
        `}
            </style>
        </article>
    );
};

export default Habit;
