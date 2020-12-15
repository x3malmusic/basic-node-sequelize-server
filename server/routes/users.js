import { Router } from "express";
import { getUsers, getUserData, editUser, deleteUser } from "../controllers/users";
import { verifyToken } from "../middlewares/jwtVerify";

const router = Router();

router.get('/users', verifyToken, getUsers)

router.get('/user', verifyToken, getUserData)

router.put('/user', verifyToken, editUser)
router.patch('/user', verifyToken, editUser)

router.delete('/user', verifyToken, deleteUser)


export default router