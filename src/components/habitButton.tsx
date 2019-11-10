import { useState } from 'react';

const HabitButton = ({ date }): JSX.Element => {
    const [complete, setComplete] = useState(false);
    return (
        <span>
            {date.getDate()}/{date.getMonth() + 1}
            <button onClick={(): void => setComplete(!complete)}>
                {complete ? 'X' : 'O'}
            </button>
        </span>
    );
};

export default HabitButton;
