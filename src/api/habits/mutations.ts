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
        },

        async addEvent(_, { habitId, date }): Promise<any> {
            try {
                date.setHours(0, 0, 0, 0);
                const habit = await Habits.findOneAndUpdate(
                    {
                        _id: habitId,
                        'events.date': {
                            $ne: date
                        }
                    },
                    {
                        $addToSet: {
                            events: {
                                // Sadly I can't fix this :(
                                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                                // @ts-ignore
                                date
                            }
                        }
                    }
                );
                return habit;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log('e', e);
            }
        },

        async removeEvent(_, { habitId, eventId }): Promise<any> {
            try {
                const habit = await Habits.findOneAndUpdate(
                    {
                        _id: habitId
                    },
                    {
                        $pull: {
                            events: {
                                // Sadly I can't fix this :(
                                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                                // @ts-ignore
                                _id: eventId
                            }
                        }
                    }
                );
                return habit;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log('e', e);
            }
        }
    }
};
