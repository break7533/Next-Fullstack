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
            <style jsx>{`
                span {
                    display: flex;
                    flex-direction: column;
                }
                span + span {
                    margin-left: 10px;
                }
                button {
                    border: none;
                    margin-top: 1rem;
                }
            `}
            </style>
        </span>
    );
};

export default HabitButton;
