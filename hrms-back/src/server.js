 require('dotenv').config();

const express = require('express');
const cors = require('cors');

const pool = require('./db');

const employeeRoutes = require('./routes/employeeRoutes');


const app = express();

const port = process.env.PORT || 3000;


app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {

    res.json({
        message: 'HRMS backend is running'
    });

});


app.get('/api/test', async (req, res) => {

    try {

        const result = await pool.query('SELECT NOW()');

        res.json({
            message: 'Database connected',
            time: result.rows[0].now
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Connection failed'
        });

    }

});


app.use('/api/employees', employeeRoutes);


app.listen(port, () => {

    console.log(`Server running ${port}`);

});