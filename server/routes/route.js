import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/private', (req, res, next) => {
    res.status(200).json({message: "here is your public resource"});
})

// will match any other path
router.use('/', (req, res, next)=>{
    res.status(404).json({ error: "page not found" });
})

export default router;

// * 처음 세 개만 사용
// * 나머지 두 개는 경로와 기본 경로를 정의하는데 필요할 수 있는 예
// * 즉 나머지 두 개는 예시 및 기본 경로임