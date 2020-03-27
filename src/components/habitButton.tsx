import { useState } from 'react';

interface IHabitButtonProps {
    date: Date;
}

const HabitButton = (props: IHabitButtonProps): JSX.Element => {
    const [complete, setComplete] = useState(false);
    return (
        <span>
            {props.date.getDate()}/{props.date.getMonth() + 1}
            <button onClick={(): void => setComplete(!complete)}>
                {complete ? 'X' : 'O'}
            </button>
        </span>
    );
};

export default HabitButton;
