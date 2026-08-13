const pool = require('../db');

const createEmployee = async (req, res) => {

    try {

        const {
            employeeCode,
            firstName,
            lastName,
            fathersName,
            dateOfBirth,
            gender,
            maritalStatus,
            email,
            mobile,
            alternateMobile,

            jobLocation,
            department,
            designation,
            grade,

            vendorName,
            dateOfJoining,
            employeeStatus,

            currentAddress,
            permanentAddress,
            permanentState,
            permanentDistrict,
            pinCode,
            localMigrant,

            aadhaarNumber,
            panNumber,
            uanNumber,
            esicNumber,

            bankAccountName,
            accountNumber,
            ifscCode,

            referredBy,
            referredEmployeeCode,

            transportation,
            busRoute,
            foodFacility,

            qualification,
            experience
        } = req.body;


        const result = await pool.query(
            `INSERT INTO employees (
                employee_code,
                first_name,
                last_name,
                fathers_name,
                date_of_birth,
                gender,
                marital_status,
                email,
                mobile,
                alternate_mobile,
                job_location,
                department,
                designation,
                grade,
                vendor_name,
                date_of_joining,
                employee_status,
                current_address,
                permanent_address,
                permanent_state,
                permanent_district,
                pin_code,
                local_migrant,
                aadhaar_number,
                pan_number,
                uan_number,
                esic_number,
                bank_account_name,
                account_number,
                ifsc_code,
                referred_by,
                referred_employee_code,
                transportation,
                bus_route,
                food_facility,
                qualification,
                experience
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
                $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
                $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
                $31, $32, $33, $34, $35, $36, $37
            )
            RETURNING *`,
            [
                employeeCode,
                firstName,
                lastName,
                fathersName,
                dateOfBirth,
                gender,
                maritalStatus,
                email,
                mobile,
                alternateMobile,

                jobLocation,
                department,
                designation,
                grade,

                vendorName,
                dateOfJoining,
                employeeStatus,

                currentAddress,
                permanentAddress,
                permanentState,
                permanentDistrict,
                pinCode,
                localMigrant,

                aadhaarNumber,
                panNumber,
                uanNumber,
                esicNumber,

                bankAccountName,
                accountNumber,
                ifscCode,

                referredBy,
                referredEmployeeCode,

                transportation,
                busRoute,
                foodFacility,

                qualification,
                experience
            ]
        );


        res.status(201).json({
            message: 'Employee created successfully',
            employee: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Failed to create employee',
            error: error.message
        });

    }

};


module.exports = {
    createEmployee
};