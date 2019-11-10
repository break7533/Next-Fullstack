import { useState } from 'react';

const HabitButton = (): JSX.Element => {
    const [complete, setComplete] = useState(false);
    return (
        <button onClick={(): void => setComplete(!complete)}>
            {complete ? 'X' : 'O'}
        </button>
    );
};

export default HabitButton;
