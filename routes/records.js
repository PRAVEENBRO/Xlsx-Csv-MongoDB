const express = require('express');
const router = express.Router()
const dataSchema = require("../model/dataSchema")
const controller = require('../controller/datacontroller.js')



router.get('/', controller.landingpage);

// =================== CREAT-USERS =================== //  
router.get('/upload', controller.upload_file);

// =================== READ-USERS =================== //  
router.get('/filedata', controller.filedata);

// =================== EDIT-USERS =================== //  
router.get('/edit-User/:_id', controller.get_edit_user);
router.post('/edit-User/:_id', controller.post_edit_user);

// =================== DELETE-USERS =================== //  
router.get('/delete-User/:_id', controller.delete_user);
router.post('/delete-alldata', controller.delete_alluser);

module.exports = router
