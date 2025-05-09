import express from 'express';
import { registerUser, loginUser } from '../controllers/authcontroller';
import { protect } from '../middlewares/authMiddleware';
import { validateRegisterInput, validateLoginInput } from '../utils/validation';
// import { roleController } from "../controllers/roleController";
// import { userDetailsController } from "../controllers/userDetailsController";
// import { updatePasswordController } from "../controllers/updateProfileController";

const authRouter = express.Router();

authRouter.post('/register', validateRegisterInput, registerUser);
authRouter.post('/login', validateLoginInput, loginUser);
// authRouter.get('/role/:email', roleController);
// authRouter.post('/register', userDetailsController);
// authRouter.put('/change-password', updatePasswordController);

export default authRouter;