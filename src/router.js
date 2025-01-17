const express = require('express')
const postsController = require('./controllers/postsController')
const adminController = require('./controllers/adminController')

const router = express.Router()

//Rotas do Blog
router.get('/', postsController.index);
router.get("/posts/:id", postsController.show);

//Rotas do Admin
router.get("/admin",adminController.index);
router.get("/admin/create",adminController.create);
router.post("/admin/create",adminController.save);



module.exports = router