const express = require('express');
const bodyParser = require('body-parser');
const userService = require('../services/userService');

const router = express.Router();
router.use(bodyParser.json());

router.post('/users', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router