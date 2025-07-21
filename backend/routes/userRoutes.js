import express from 'express';
import {getUsers,claimPoint,createUser} from '../controller/userControl.js';

const router=express.Router();

router.get('/user',getUsers);
router.post('/:id/claim',claimPoint);
router.post('/user',createUser);

export default router;