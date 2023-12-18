const {create}=require('../../controllers/user-controller');
const express=require('express');
const router=express.Router();

router.post('/signup',create);

module.exports=router;