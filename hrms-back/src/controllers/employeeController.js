  
  const pool = require('../db');

  const createEmployee=async(req,res)=>{


try{
    const {
            employeeCode,
            firstName,
            lastName,
            fathersName,
            gender,
            maritalStatus,
            email,
            mobile
    }=req.body;
    const result=await pool.query(
        `insert into employees (
            employee_code,
                first_name,
                last_name,
                fathers_name,
                gender,
                marital_status,
                email,
                mobile
        )
        values 
        ($1,$2,$3,$4,$5,$6,$7,$8)
        returning *`,
        [
            employeeCode,
                firstName,
                lastName,
                fathersName,
                gender,
                maritalStatus,
                email,
                mobile

        ]

    );
    
    res.status(201).json({
        message:'emp created',
        employee:result.rows[0]
    });


  }catch(error){

    console.error(error);
    res.status(500).json({
        message:'failed to create emp',
        error:error.message
    });

  }

  console.log("Received employee:");
console.log(req.body);



  };

  module.exports={
    createEmployee
  };