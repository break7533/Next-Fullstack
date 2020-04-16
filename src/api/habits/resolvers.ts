export const habitsResolvers = {
    Query: {
        async habits() {
            // eslint-disable-next-line no-console
            console.log('Habits');
            return [{
                _id: 'someFunkyId',
                name: 'Make my bed',
            }];
        }
    }
};
