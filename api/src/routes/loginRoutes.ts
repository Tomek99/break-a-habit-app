import { Router } from 'express';
import { loginUser } from '../controllers/loginController';

const router = Router();

router.route('/').post(loginUser);

export default router;
