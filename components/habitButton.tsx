import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface IHabitButtonProps {
    habitId: string;
    events: [{
        _id: string;
        date: Date;
    }];
    date: Date;
}

const ADD_EVENT = gql`
    mutation addEvent($date: Date, $habitId: ID) {
        addEvent(date: $date, habitId: $habitId) {
            _id
            name
            events {
                _id
                date
            }
        }
    }
`;

const REMOVE_EVENT = gql`
    mutation removeEvent($eventId: ID, $habitId: ID) {
        removeEvent(eventId: $eventId, habitId: $habitId) {
            _id
            name
            events {
                _id
                date
            }
        }
    }
`;

const HabitButton = (props: IHabitButtonProps): JSX.Element => {
    const [addEvent] = useMutation(ADD_EVENT, {
        refetchQueries: ['getHabits']
    });

    const [removeEvent] = useMutation(REMOVE_EVENT, {
        refetchQueries: ['getHabits']
    });

    const foundDate = props.events.find((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === props.date.getDate();
    });

    return (
        <span>
            {props.date.getDate()}/{props.date.getMonth() + 1}
            {
                foundDate ? (
                    <button onClick={(): any => removeEvent({
                        variables: {
                            habitId: props.habitId,
                            eventId: foundDate._id,
                        }
                    })}>
                        X
                    </button>
                ) : (
                        <button onClick={(): any => addEvent({
                            variables: {
                                habitId: props.habitId,
                                date: props.date,
                            }
                        })}>
                            O
                        </button>
                    )
            }
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
