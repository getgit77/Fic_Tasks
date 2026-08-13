const pool = require('../db');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;


        const hashedPassword = await bcrypt.hash(password, 10);


        const result = await pool.query(
            `INSERT INTO users
            (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, role`,
            [
                name,
                email,
                hashedPassword
            ]
        );


        res.status(201).json({
            message: 'User registered successfully',
            user: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Failed to register user',
            error: error.message
        });

    }

};


const loginUser = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        const result = await pool.query(
            `SELECT *
             FROM users
             WHERE email = $1`,
            [email]
        );


        if (result.rows.length === 0) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }


        const user = result.rows[0];


        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!passwordMatch) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }


        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Login failed',
            error: error.message
        });

    }

};


module.exports = {
    registerUser,
    loginUser
};