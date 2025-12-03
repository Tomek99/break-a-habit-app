import { Router } from 'express';
import { deleteUser, updatePassword } from '../controllers/userController';

const router = Router();

router.route('/delete-user/:id').delete(deleteUser);
router.route('/update-password').put(updatePassword);

export default router;
