import app from './server';
import './database';

(async function (): Promise<void> {
    try {
        await app.listen(app.get('port'));
        console.log(`Server on port ${app.get('port')}`);
    } catch (e) {
        console.log(e);
    }
})();