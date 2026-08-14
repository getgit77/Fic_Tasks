<script setup>

import { ref } from 'vue'

const search = ref('')

const employees = ref([
    {
        code: 'EMP001',
        name: 'John Smith',
        department: 'IT',
        designation: 'Software Engineer',
        mobile: '9876543210',
        status: 'Active'
    },
    {
        code: 'EMP002',
        name: 'Rahul Sharma',
        department: 'HR',
        designation: 'HR Executive',
        mobile: '9876543211',
        status: 'Active'
    },
    {
        code: 'EMP003',
        name: 'Priya Patel',
        department: 'Finance',
        designation: 'Accountant',
        mobile: '9876543212',
        status: 'On Leave'
    }
])

</script>


<template>

<div class="employee-page">


    <div class="page-header">


        <div>

            <h2>
                Employee Management
            </h2>

            <p>
                Manage employee information
            </p>

        </div>


        <RouterLink
            to="/register-employee"
            class="add-button"
        >
            Add Employee
        </RouterLink>


    </div>


    <div class="filters">


        <input
            v-model="search"
            type="text"
            placeholder="Search Employee"
        />


        <select>

            <option value="">
                Department
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


        <select>

            <option value="">
                Status
            </option>

            <option>
                Active
            </option>

            <option>
                On Leave
            </option>

        </select>


    </div>


    <div class="employee-table">


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
                        Designation
                    </th>

                    <th>
                        Mobile
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
                    v-for="employee in employees"
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
                        {{ employee.designation }}
                    </td>


                    <td>
                        {{ employee.mobile }}
                    </td>


                    <td>

                        <span class="status">

                            {{ employee.status }}

                        </span>

                    </td>


                    <td>

                        <RouterLink
                            to="/employee-details"
                            class="view-button"
                        >
                            View
                        </RouterLink>


                        <button
                            class="edit-button"
                        >
                            Edit
                        </button>

                    </td>


                </tr>


            </tbody>


        </table>


    </div>


</div>

</template>


<style scoped>

.employee-page {

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

    font-size: 20px;

}


.page-header p {

    margin: 5px 0 0;

    color: #777;

    font-size: 13px;

}


.add-button {

    padding: 9px 15px;

    background: #354a68;

    color: white;

    text-decoration: none;

    border-radius: 4px;

    font-size: 13px;

}


.filters {

    display: flex;

    gap: 12px;

    margin-bottom: 20px;

}


.filters input,
.filters select {

    padding: 9px;

    border: 1px solid #ccc;

    border-radius: 4px;

}


.filters input {

    width: 280px;

}


.employee-table {

    background: white;

    border: 1px solid #d0d5db;

    overflow-x: auto;

}


table {

    width: 100%;

    border-collapse: collapse;

}


th {

    background: #f2f4f7;

    text-align: left;

    padding: 12px;

    font-size: 13px;

}


td {

    padding: 12px;

    border-top: 1px solid #e5e5e5;

    font-size: 13px;

}


.status {

    padding: 4px 9px;

    border-radius: 12px;

    background: #e8f3e8;

}


.view-button {

    display: inline-block;

    padding: 6px 12px;

    border: 1px solid #354a68;

    background: white;

    color: #354a68;

    border-radius: 4px;

    text-decoration: none;

    margin-right: 5px;

}


.edit-button {

    padding: 6px 12px;

    border: 1px solid #777;

    background: white;

    color: #333;

    border-radius: 4px;

    cursor: pointer;

}


@media (max-width: 800px) {

    .page-header {

        align-items: flex-start;

        flex-direction: column;

        gap: 15px;

    }


    .filters {

        flex-wrap: wrap;

    }


    .filters input {

        width: 100%;

    }

}

</style>