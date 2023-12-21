const {create, signIn, isAuthenticated}=require('../../controllers/user-controller');
const express=require('express');
const { validAuth } = require('../../middleware/authentication');
const router=express.Router();

const {validAuth}=require("../../middleware/authentication");

router.post('/signup',validAuth,create);
router.post('/signin',validAuth,signIn);
router.get('/isAuthenticated',isAuthenticated);

module.exports=router;