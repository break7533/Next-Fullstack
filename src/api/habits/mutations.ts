/* eslint-disable @typescript-eslint/no-explicit-any */
export const habitsMutations = {
    Mutation: {
        async addHabit(_, { habit }): Promise<any> {
            // eslint-disable-next-line no-console
            console.log('Add Habit');
        }
    }
};
