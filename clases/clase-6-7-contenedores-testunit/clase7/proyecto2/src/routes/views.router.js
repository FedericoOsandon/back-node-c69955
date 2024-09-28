import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})
// A04 diseño inseguro - Controladores

router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;