import { Router } from 'express';
import { registerUser, login } from '../controllers/userController';
const router = Router();
router.post('/register', registerUser);
router.post('/login', login);

export default router;
