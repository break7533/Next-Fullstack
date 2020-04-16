/* eslint-disable @typescript-eslint/no-explicit-any */
import Habits from './habits';

export const habitsMutations = {
    Mutation: {
        async addHabit(_, { habit }): Promise<any> {
            try {
                return await Habits.create({
                    ...habit
                });
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
        }
    }
};
