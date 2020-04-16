/* eslint-disable @typescript-eslint/no-explicit-any */
export const habitsResolvers = {
    Query: {
        async habits(): Promise<any> {
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
