const express = require('express');
const router = express.Router();

//Login Page
router.get('/login',(req,res)=> res.render('login'));

//Register Page
router.get('/register',(req,res)=> res.render('register'));

//Sectors Page
router.get('/sectors',(req,res)=> res.render('sectors'));

//Training Page
router.get('/training',(req,res)=> res.render('training'));

//Seller Page
router.get('/seller-zone',(req,res)=> res.render('seller-zone'));

//E-corner Page
router.get('/e-corner',(req,res)=> res.render('e-corner'));


module.exports = router;