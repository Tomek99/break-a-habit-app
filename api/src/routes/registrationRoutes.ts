import { Router } from 'express';
import { createUser } from '../controllers/registrationController';

const router = Router();

router.route('/create-user').post(createUser);

export default router;
