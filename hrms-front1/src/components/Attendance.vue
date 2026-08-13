<script setup>

import { ref } from 'vue'

const selectedDate = ref('2026-08-12')

const attendance = ref([
    {
        code: 'EMP001',
        name: 'John Smith',
        department: 'IT',
        checkIn: '09:05 AM',
        checkOut: '06:10 PM',
        status: 'Present'
    },
    {
        code: 'EMP002',
        name: 'Rahul Sharma',
        department: 'HR',
        checkIn: '09:15 AM',
        checkOut: '06:00 PM',
        status: 'Present'
    },
    {
        code: 'EMP003',
        name: 'Priya Patel',
        department: 'Finance',
        checkIn: '-',
        checkOut: '-',
        status: 'Leave'
    },
    {
        code: 'EMP004',
        name: 'Amit Kumar',
        department: 'IT',
        checkIn: '-',
        checkOut: '-',
        status: 'Absent'
    }
])

</script>


<template>

<div class="attendance-page">

    <div class="page-header">

        <div>

            <h2>
                Attendance Management
            </h2>

            <p>
                Manage employee attendance
            </p>

        </div>

    </div>


    <div class="attendance-summary">

        <div class="summary-card">

            <span>
                Total Employees
            </span>

            <strong>
                124
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Present
            </span>

            <strong>
                108
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Absent
            </span>

            <strong>
                8
            </strong>

        </div>


        <div class="summary-card">

            <span>
                On Leave
            </span>

            <strong>
                8
            </strong>

        </div>

    </div>


    <div class="filters">

        <div class="field">

            <label>
                Date
            </label>

            <input
                v-model="selectedDate"
                type="date"
            />

        </div>


        <div class="field">

            <label>
                Department
            </label>

            <select>

                <option value="">
                    All Departments
                </option>

                <option>
                    IT
                </option>

                <option>
                    HR
                </option>

                <option>
                    Finance
                </option>

            </select>

        </div>


        <div class="field">

            <label>
                Status
            </label>

            <select>

                <option value="">
                    All Status
                </option>

                <option>
                    Present
                </option>

                <option>
                    Absent
                </option>

                <option>
                    Leave
                </option>

            </select>

        </div>


        <button class="search-button">
            Search
        </button>

    </div>


    <div class="attendance-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Employee Code
                    </th>

                    <th>
                        Employee Name
                    </th>

                    <th>
                        Department
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

                    <th>
                        Action
                    </th>

                </tr>

            </thead>


            <tbody>

                <tr
                    v-for="employee in attendance"
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
                        {{ employee.checkIn }}
                    </td>

                    <td>
                        {{ employee.checkOut }}
                    </td>

                    <td>

                        <span
                            class="status"
                            :class="employee.status.toLowerCase()"
                        >
                            {{ employee.status }}
                        </span>

                    </td>

                    <td>

                        <button class="view-button">
                            View
                        </button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</div>

</template>


<style scoped>

.attendance-page {

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


.attendance-summary {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;

    margin-bottom: 20px;

}


.summary-card {

    background: white;

    border: 1px solid #d0d5db;

    padding: 18px;

    border-radius: 5px;

}


.summary-card span {

    display: block;

    color: #777;

    font-size: 13px;

}


.summary-card strong {

    display: block;

    margin-top: 8px;

    font-size: 24px;

}


.filters {

    display: flex;

    align-items: flex-end;

    gap: 15px;

    background: white;

    border: 1px solid #d0d5db;

    padding: 18px;

    margin-bottom: 20px;

}


.field {

    display: flex;

    flex-direction: column;

    gap: 6px;

}


.field label {

    font-size: 12px;

    font-weight: bold;

}


.field input,
.field select {

    padding: 9px;

    min-width: 170px;

    border: 1px solid #ccc;

    border-radius: 4px;

}


.search-button {

    padding: 9px 18px;

    border: none;

    border-radius: 4px;

    background: #354a68;

    color: white;

    cursor: pointer;

}


.attendance-table {

    background: white;

    border: 1px solid #d0d5db;

    overflow-x: auto;

}


table {

    width: 100%;

    border-collapse: collapse;

}


th {

    padding: 12px;

    background: #f2f4f7;

    text-align: left;

    font-size: 13px;

}


td {

    padding: 12px;

    border-top: 1px solid #e5e5e5;

    font-size: 13px;

}


.status {

    display: inline-block;

    padding: 5px 10px;

    border-radius: 12px;

    font-size: 12px;

}


.status.present {

    background: #e5f4e8;

}


.status.absent {

    background: #f8e5e5;

}


.status.leave {

    background: #f7efd9;

}


.view-button {

    padding: 6px 12px;

    border: 1px solid #354a68;

    background: white;

    color: #354a68;

    border-radius: 4px;

    cursor: pointer;

}


@media (max-width: 900px) {

    .attendance-summary {

        grid-template-columns: repeat(2, 1fr);

    }

    .filters {

        flex-wrap: wrap;

    }

}


@media (max-width: 600px) {

    .attendance-summary {

        grid-template-columns: 1fr;

    }

}

</style>