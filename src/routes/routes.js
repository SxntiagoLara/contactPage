import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => res.render('index',{title: 'My first website with node js'}))

router.get('/about', (req, res) => res.render('about',{ title: 'what about me?'}))

router.get('/contact', (req, res) => res.render('contact',{title : 'contact on dm with me'}))




export default router