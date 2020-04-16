/* eslint-disable @typescript-eslint/no-explicit-any */
import Habits from './habits';

export const habitsResolvers = {
    Query: {
        async habits(): Promise<any> {
            try {
                return await Habits.find();
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
        }
    }
};
