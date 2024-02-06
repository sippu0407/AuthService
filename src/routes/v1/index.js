const {create, signIn, isAuthenticated,isAdmin}=require('../../controllers/user-controller');
const express=require('express');
const { validAuth } = require('../../middleware/authentication');
const router=express.Router();

//authentication
router.post('/signup',validAuth,create);
router.post('/signin',validAuth,signIn);
router.get('/isAuthenticated',isAuthenticated);

//authorization
router.get('/isAdmin',isAdmin);

module.exports=router;