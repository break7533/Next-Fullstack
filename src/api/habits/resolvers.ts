/* eslint-disable @typescript-eslint/no-explicit-any */
export const habitsResolvers = {
    Query: {
        async habits(): Promise<any> {
            // eslint-disable-next-line no-console
            console.log('Habits');
            return [{
                _id: 'someFunkyId',
                name: 'Make my bed',
            }, {
                _id: 'secondId',
                name: 'Wash dishes',
            }];
        }
    }
};
