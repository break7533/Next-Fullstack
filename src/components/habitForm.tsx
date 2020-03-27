import { Field, Form } from '@leveluptuts/fresh';

interface IHabitFormProps {
    setHabits: (prevState) => void;
}

interface IFieldData {
    habit: string;
}

const HabitForm = (props: IHabitFormProps): JSX.Element => {
    return (
        // Sadly I can't fix this :(
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        <Form
            onSubmit={(data: IFieldData): void => {
                props.setHabits((prevState) => [...prevState, data.habit]);
            }}
        >
            <Field>Habit</Field>
        </Form>
    );
};

export default HabitForm;
