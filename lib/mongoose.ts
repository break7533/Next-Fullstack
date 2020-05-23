import mongoose from 'mongoose';

const connectDb = (handler: Function) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (req: Request, res: Response): Promise<any> => {
        if (mongoose.connections[0].readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
        }
        return handler(req, res);
    };
};

const db = mongoose.connection;
db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Connected to Mongo');
});

export default connectDb;
