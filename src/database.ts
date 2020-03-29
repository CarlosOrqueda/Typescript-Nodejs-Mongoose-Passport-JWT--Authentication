import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config/config'

const dbOptions: ConnectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}

async function connect (): Promise<void> {
    try {
        await mongoose.connect(config.DB.URI, dbOptions);
        console.log('Mongodb connection stablished');
    } catch (e) {
        console.log(e);
        process.exit(0);
    }
}

export default connect();