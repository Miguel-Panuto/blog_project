import { connect } from 'mongoose';

connect(process.env.MONGO_DB_URL as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});