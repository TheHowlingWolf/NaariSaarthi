const express = require('express');
const router = express.Router();

//index
router.get('/',(req,res)=> res.render('welcome'));

//dashboard
router.get('/dashboard',(req,res)=> res.render('dashboard'));


//Sectors Page
router.get('/sectors',(req,res)=> res.render('sectors'));

//Training Page
router.get('/training',(req,res)=> res.render('training'));

//Seller Page
router.get('/seller-zone',(req,res)=> res.render('seller-zone'));

//E-corner Page
router.get('/e-corner',(req,res)=> res.render('e-corner'));

module.exports = router;