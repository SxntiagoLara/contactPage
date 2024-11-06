import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => res.render('index',{title: 'Soy Saaniel'}))
router.get('/about', (req, res) => res.render('about',{ title: '¿Más de mí?'}))
router.get('/contact', (req, res) => res.render('contact',{title : 'Contáctame'}))




export default router