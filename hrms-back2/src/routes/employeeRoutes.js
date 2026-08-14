 const express = require('express');

const router = express.Router();

const {
    createEmployee
} = require('../controllers/employeeController');

const {
    authorizeAdmin
} = require('../middleware/roleMiddleware');


const authenticateToken=require('../middleware/authMiddleware');

router.post('/', authenticateToken,authorizeAdmin,createEmployee);





module.exports = router;