<script setup>

import { ref } from 'vue'

const totalEmployees = ref(125)
const presentToday = ref(108)
const absentToday = ref(10)
const onLeave = ref(7)

const recentEmployees = ref([
    {
        code: 'EMP001',
        name: 'John Smith',
        department: 'IT',
        status: 'Active'
    },
    {
        code: 'EMP002',
        name: 'Rahul Sharma',
        department: 'HR',
        status: 'Active'
    },
    {
        code: 'EMP003',
        name: 'Priya Patel',
        department: 'Finance',
        status: 'Active'
    },
    {
        code: 'EMP004',
        name: 'Amit Kumar',
        department: 'IT',
        status: 'Inactive'
    }
])

const attendance = ref([
    {
        name: 'John Smith',
        checkIn: '09:05 AM',
        checkOut: '06:10 PM',
        status: 'Present'
    },
    {
        name: 'Rahul Sharma',
        checkIn: '09:20 AM',
        checkOut: '06:00 PM',
        status: 'Present'
    },
    {
        name: 'Priya Patel',
        checkIn: '-',
        checkOut: '-',
        status: 'On Leave'
    },
    {
        name: 'Amit Kumar',
        checkIn: '-',
        checkOut: '-',
        status: 'Absent'
    }
])

</script>


<template>

<div class="dashboard-page">


    <div class="page-header">

        <div>

            <h2>
                HRMS Dashboard
            </h2>

            <p>
                Overview of employee and attendance information
            </p>

        </div>

    </div>


    <div class="summary-section">


        <div class="summary-card">

            <div class="card-icon">

                <i class="bi bi-people-fill"></i>

            </div>

            <div>

                <span>
                    Total Employees
                </span>

                <strong>
                    {{ totalEmployees }}
                </strong>

            </div>

        </div>


        <div class="summary-card">

            <div class="card-icon">

                <i class="bi bi-person-check-fill"></i>

            </div>

            <div>

                <span>
                    Present Today
                </span>

                <strong>
                    {{ presentToday }}
                </strong>

            </div>

        </div>


        <div class="summary-card">

            <div class="card-icon">

                <i class="bi bi-person-x-fill"></i>

            </div>

            <div>

                <span>
                    Absent Today
                </span>

                <strong>
                    {{ absentToday }}
                </strong>

            </div>

        </div>


        <div class="summary-card">

            <div class="card-icon">

                <i class="bi bi-calendar-check"></i>

            </div>

            <div>

                <span>
                    On Leave
                </span>

                <strong>
                    {{ onLeave }}
                </strong>

            </div>

        </div>


    </div>


    <div class="dashboard-grid">


        <div class="dashboard-section">


            <div class="section-header">

                <h3>
                    Recent Employees
                </h3>

                <RouterLink to="/employees">
                    View All
                </RouterLink>

            </div>


            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Employee Code
                            </th>

                            <th>
                                Name
                            </th>

                            <th>
                                Department
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        <tr
                            v-for="employee in recentEmployees"
                            :key="employee.code"
                        >

                            <td>
                                {{ employee.code }}
                            </td>

                            <td>
                                {{ employee.name }}
                            </td>

                            <td>
                                {{ employee.department }}
                            </td>

                            <td>

                                <span
                                    class="status"
                                    :class="employee.status.toLowerCase()"
                                >
                                    {{ employee.status }}
                                </span>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


        </div>


        <div class="dashboard-section">


            <div class="section-header">

                <h3>
                    Today's Attendance
                </h3>

                <RouterLink to="/attendance">
                    View All
                </RouterLink>

            </div>


            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Employee
                            </th>

                            <th>
                                Check In
                            </th>

                            <th>
                                Check Out
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        <tr
                            v-for="employee in attendance"
                            :key="employee.name"
                        >

                            <td>
                                {{ employee.name }}
                            </td>

                            <td>
                                {{ employee.checkIn }}
                            </td>

                            <td>
                                {{ employee.checkOut }}
                            </td>

                            <td>

                                <span
                                    class="status"
                                    :class="employee.status.toLowerCase().replace(' ', '-')"
                                >
                                    {{ employee.status }}
                                </span>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


        </div>


    </div>


    <div class="quick-actions">


        <h3>
            Quick Actions
        </h3>


        <div class="action-grid">


            <RouterLink
                to="/register-employee"
                class="action-card"
            >

                <i class="bi bi-person-plus-fill"></i>

                <span>
                    Register Employee
                </span>

            </RouterLink>


            <RouterLink
                to="/employees"
                class="action-card"
            >

                <i class="bi bi-people-fill"></i>

                <span>
                    Employee List
                </span>

            </RouterLink>


            <RouterLink
                to="/attendance"
                class="action-card"
            >

                <i class="bi bi-clock-fill"></i>

                <span>
                    Attendance
                </span>

            </RouterLink>


            <RouterLink
                to="/reports"
                class="action-card"
            >

                <i class="bi bi-file-earmark-text"></i>

                <span>
                    Reports
                </span>

            </RouterLink>


        </div>


    </div>


</div>

</template>


<style scoped>

.dashboard-page {

    padding: 20px;

}


.page-header {

    margin-bottom: 20px;

}


.page-header h2 {

    margin: 0;

    font-size: 20px;

}


.page-header p {

    margin: 5px 0 0;

    color: #777;

    font-size: 13px;

}


.summary-section {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;

    margin-bottom: 20px;

}


.summary-card {

    display: flex;

    align-items: center;

    gap: 15px;

    background: white;

    border: 1px solid #d0d5db;

    padding: 18px;

    border-radius: 5px;

}


.card-icon {

    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #f0f2f5;

    border-radius: 5px;

    font-size: 20px;

}


.summary-card span {

    display: block;

    color: #777;

    font-size: 12px;

}


.summary-card strong {

    display: block;

    margin-top: 5px;

    font-size: 24px;

}


.dashboard-grid {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;

    margin-bottom: 20px;

}


.dashboard-section {

    background: white;

    border: 1px solid #d0d5db;

    padding: 20px;

}


.section-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 15px;

}


.section-header h3 {

    margin: 0;

    font-size: 16px;

}


.section-header a {

    color: #354a68;

    text-decoration: none;

    font-size: 12px;

}


.table-container {

    overflow-x: auto;

}


table {

    width: 100%;

    border-collapse: collapse;

}


th {

    padding: 10px;

    background: #f2f4f7;

    text-align: left;

    font-size: 12px;

}


td {

    padding: 10px;

    border-top: 1px solid #e5e5e5;

    font-size: 12px;

}


.status {

    padding: 5px 9px;

    border-radius: 12px;

    font-size: 11px;

}


.status.active,
.status.present {

    background: #e5f4e8;

}


.status.inactive,
.status.absent {

    background: #f8e5e5;

}


.status.on-leave {

    background: #f7efd9;

}


.quick-actions {

    background: white;

    border: 1px solid #d0d5db;

    padding: 20px;

}


.quick-actions h3 {

    margin-top: 0;

    font-size: 16px;

}


.action-grid {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;

}


.action-card {

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 8px;

    min-height: 80px;

    border: 1px solid #ddd;

    border-radius: 5px;

    color: #354a68;

    text-decoration: none;

    font-size: 12px;

}


.action-card i {

    font-size: 22px;

}


.action-card:hover {

    background: #f5f6f8;

}


@media (max-width: 1000px) {

    .summary-section {

        grid-template-columns: repeat(2, 1fr);

    }


    .dashboard-grid {

        grid-template-columns: 1fr;

    }


    .action-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}


@media (max-width: 600px) {

    .summary-section {

        grid-template-columns: 1fr;

    }


    .action-grid {

        grid-template-columns: 1fr;

    }

}

</style>