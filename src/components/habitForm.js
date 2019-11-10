/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Field, Form } from '@leveluptuts/fresh';

const HabitForm = ({ setHabits }) => {
    return (
        <Form
            onSubmit={data => {
                setHabits(prevState => [...prevState, data.habit]);
            }}
        >
            <Field>Habit</Field>
        </Form>
    );
};

export default HabitForm;
