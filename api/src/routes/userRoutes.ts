import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const router = Router();

router.route('/get-users').get(getUsers);

export default router;
