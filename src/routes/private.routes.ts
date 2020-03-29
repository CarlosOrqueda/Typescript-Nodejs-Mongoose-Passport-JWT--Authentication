import {Router} from 'express';
const router = Router();
import passport from 'passport';

import {privateSignIn} from '../controllers/user.controller';

router.get('/private', passport.authenticate('jwt', {session: false}), privateSignIn);

export default router;