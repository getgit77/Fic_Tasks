<script setup>

const employee = {
    code: 'EMP001',
    firstName: 'John',
    lastName: 'Smith',
    fathersName: 'David Smith',
    gender: 'Male',
    maritalStatus: 'Single',
    email: 'john@hrms.com',
    mobile: '9876543210',
    alternateMobile: '9876543211',
    dateOfBirth: '15-05-1995',
    department: 'IT',
    designation: 'Software Engineer',
    grade: 'A',
    jobLocation: 'Pune',
    dateOfJoining: '10-06-2022',
    status: 'Active',
    address: 'Pune, Maharashtra',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    pan: 'ABCDE1234F',
    aadhaar: 'XXXX XXXX 1234',
    bankName: 'State Bank of India',
    accountNumber: 'XXXXXXXX1234',
    ifsc: 'SBIN0001234'
}

</script>


<template>

<div class="details-page">

    <div class="page-header">

        <div>

            <h2>
                Employee Details
            </h2>

            <p>
                View employee information
            </p>

        </div>


        <div class="actions">

            <RouterLink
                to="/employees"
                class="back-button"
            >
                Back
            </RouterLink>

            <RouterLink
                to="/register-employee"
                class="edit-button"
            >
                Edit Employee
            </RouterLink>

        </div>

    </div>


    <div class="employee-header">

        <div class="profile">

            <div class="avatar">
                {{ employee.firstName.charAt(0) }}
            </div>

            <div>

                <h2>
                    {{ employee.firstName }}
                    {{ employee.lastName }}
                </h2>

                <p>
                    {{ employee.code }}
                </p>

            </div>

        </div>


        <span class="status">
            {{ employee.status }}
        </span>

    </div>


    <section class="details-section">

        <h3>
            Personal Details
        </h3>


        <div class="details-grid">

            <div>
                <label>
                    Employee Code
                </label>

                <span>
                    {{ employee.code }}
                </span>
            </div>


            <div>
                <label>
                    First Name
                </label>

                <span>
                    {{ employee.firstName }}
                </span>
            </div>


            <div>
                <label>
                    Last Name
                </label>

                <span>
                    {{ employee.lastName }}
                </span>
            </div>


            <div>
                <label>
                    Father's Name
                </label>

                <span>
                    {{ employee.fathersName }}
                </span>
            </div>


            <div>
                <label>
                    Gender
                </label>

                <span>
                    {{ employee.gender }}
                </span>
            </div>


            <div>
                <label>
                    Marital Status
                </label>

                <span>
                    {{ employee.maritalStatus }}
                </span>
            </div>


            <div>
                <label>
                    Date of Birth
                </label>

                <span>
                    {{ employee.dateOfBirth }}
                </span>
            </div>


            <div>
                <label>
                    Email
                </label>

                <span>
                    {{ employee.email }}
                </span>
            </div>


            <div>
                <label>
                    Mobile
                </label>

                <span>
                    {{ employee.mobile }}
                </span>
            </div>


            <div>
                <label>
                    Alternate Mobile
                </label>

                <span>
                    {{ employee.alternateMobile }}
                </span>
            </div>

        </div>

    </section>


    <section class="details-section">

        <h3>
            Organization Details
        </h3>


        <div class="details-grid">

            <div>
                <label>
                    Department
                </label>

                <span>
                    {{ employee.department }}
                </span>
            </div>


            <div>
                <label>
                    Designation
                </label>

                <span>
                    {{ employee.designation }}
                </span>
            </div>


            <div>
                <label>
                    Grade
                </label>

                <span>
                    {{ employee.grade }}
                </span>
            </div>


            <div>
                <label>
                    Job Location
                </label>

                <span>
                    {{ employee.jobLocation }}
                </span>
            </div>


            <div>
                <label>
                    Date of Joining
                </label>

                <span>
                    {{ employee.dateOfJoining }}
                </span>
            </div>


            <div>
                <label>
                    Employee Status
                </label>

                <span>
                    {{ employee.status }}
                </span>
            </div>

        </div>

    </section>


    <section class="details-section">

        <h3>
            Address Details
        </h3>


        <div class="details-grid">

            <div class="wide">
                <label>
                    Address
                </label>

                <span>
                    {{ employee.address }}
                </span>
            </div>


            <div>
                <label>
                    City
                </label>

                <span>
                    {{ employee.city }}
                </span>
            </div>


            <div>
                <label>
                    State
                </label>

                <span>
                    {{ employee.state }}
                </span>
            </div>


            <div>
                <label>
                    Pincode
                </label>

                <span>
                    {{ employee.pincode }}
                </span>
            </div>

        </div>

    </section>


    <section class="details-section">

        <h3>
            Identity Details
        </h3>


        <div class="details-grid">

            <div>
                <label>
                    PAN
                </label>

                <span>
                    {{ employee.pan }}
                </span>
            </div>


            <div>
                <label>
                    Aadhaar
                </label>

                <span>
                    {{ employee.aadhaar }}
                </span>
            </div>

        </div>

    </section>


    <section class="details-section">

        <h3>
            Bank Details
        </h3>


        <div class="details-grid">

            <div>
                <label>
                    Bank Name
                </label>

                <span>
                    {{ employee.bankName }}
                </span>
            </div>


            <div>
                <label>
                    Account Number
                </label>

                <span>
                    {{ employee.accountNumber }}
                </span>
            </div>


            <div>
                <label>
                    IFSC
                </label>

                <span>
                    {{ employee.ifsc }}
                </span>
            </div>

        </div>

    </section>

</div>

</template>


<style scoped>

.details-page {
    padding: 20px;
}


.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}


.page-header h2 {
    margin: 0;
}


.page-header p {
    margin: 5px 0 0;
    color: #777;
    font-size: 13px;
}


.actions {
    display: flex;
    gap: 10px;
}


.back-button,
.edit-button {
    padding: 8px 14px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 13px;
}


.back-button {
    color: #333;
    border: 1px solid #ccc;
    background: white;
}


.edit-button {
    color: white;
    background: #354a68;
}


.employee-header {
    background: white;
    border: 1px solid #ddd;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.profile {
    display: flex;
    align-items: center;
    gap: 15px;
}


.avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #354a68;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}


.profile h2 {
    margin: 0;
}


.profile p {
    margin: 5px 0 0;
    color: #777;
}


.status {
    padding: 6px 12px;
    background: #e8f3e8;
    border-radius: 15px;
    font-size: 13px;
}


.details-section {
    background: white;
    border: 1px solid #ddd;
    margin-top: 20px;
    padding: 20px;
}


.details-section h3 {
    margin-top: 0;
    margin-bottom: 20px;
}


.details-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}


.details-grid div {
    display: flex;
    flex-direction: column;
    gap: 6px;
}


.details-grid label {
    font-size: 12px;
    color: #777;
}


.details-grid span {
    font-size: 14px;
    font-weight: 500;
}


.details-grid .wide {
    grid-column: span 2;
}


@media (max-width: 900px) {

    .details-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 600px) {

    .page-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }

    .employee-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }

    .details-grid .wide {
        grid-column: span 1;
    }

}

</style>