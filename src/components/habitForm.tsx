import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Field, Form } from '@leveluptuts/fresh';

interface IHabitFormProps {
    setHabits: (prevState) => void;
}

interface IFieldData {
    habit: string;
}

const ADD_HABIT = gql`
    mutation addHabit($habit: HabitInput) {
        addHabit(habit: $habit) {
            _id
            name
        }
    }
`;

const HabitForm = (props: IHabitFormProps): JSX.Element => {
    const [addHabit] = useMutation(ADD_HABIT);
    return (
        // Sadly I can't fix this :(
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        <Form
            onSubmit={(data: IFieldData): void => {
                addHabit({
                    variables: {
                        habit: {
                            name: data.habit,
                        }
                    }
                });
            }}
        >
            <Field>Habit</Field>
        </Form>
    );
};

export default HabitForm;
