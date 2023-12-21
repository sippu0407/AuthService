const {create, signIn}=require('../../controllers/user-controller');
const express=require('express');
const { validAuth } = require('../../middleware/authentication');
const router=express.Router();

const {validAuth}=require("../../middleware/authentication");

router.post('/signup',create);
router.post('/signin',validAuth,signIn);

module.exports=router;