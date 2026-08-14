<script setup>

import { ref } from 'vue'

const revisions = ref([
    {
        employeeCode: 'EMP001',
        employeeName: 'John Smith',
        previousSalary: '60000',
        revisedSalary: '68000',
        effectiveDate: '01-08-2026',
        reason: 'Annual Revision',
        status: 'Approved'
    },
    {
        employeeCode: 'EMP002',
        employeeName: 'Rahul Sharma',
        previousSalary: '50000',
        revisedSalary: '55000',
        effectiveDate: '01-07-2026',
        reason: 'Performance',
        status: 'Approved'
    },
    {
        employeeCode: 'EMP003',
        employeeName: 'Priya Patel',
        previousSalary: '52000',
        revisedSalary: '58000',
        effectiveDate: '01-09-2026',
        reason: 'Promotion',
        status: 'Pending'
    }
])

const showForm = ref(false)

const employeeCode = ref('')
const employeeName = ref('')
const previousSalary = ref('')
const revisedSalary = ref('')
const effectiveDate = ref('')
const reason = ref('')


function openForm() {

    showForm.value = true

}


function closeForm() {

    showForm.value = false

}

</script>


<template>

<div class="revision-page">


    <div class="page-header">

        <div>

            <h2>
                Salary Revision
            </h2>

            <p>
                Manage employee salary revisions
            </p>

        </div>


        <button
            class="add-button"
            @click="openForm"
        >
            Add Salary Revision
        </button>

    </div>


    <div
        v-if="showForm"
        class="form-section"
    >

        <h3>
            Add Salary Revision
        </h3>


        <div class="form-grid">


            <div class="field">

                <label>
                    Employee Code
                </label>

                <input
                    v-model="employeeCode"
                    type="text"
                    placeholder="Enter employee code"
                >

            </div>


            <div class="field">

                <label>
                    Employee Name
                </label>

                <input
                    v-model="employeeName"
                    type="text"
                    placeholder="Enter employee name"
                >

            </div>


            <div class="field">

                <label>
                    Previous Salary
                </label>

                <input
                    v-model="previousSalary"
                    type="number"
                    placeholder="Enter previous salary"
                >

            </div>


            <div class="field">

                <label>
                    Revised Salary
                </label>

                <input
                    v-model="revisedSalary"
                    type="number"
                    placeholder="Enter revised salary"
                >

            </div>


            <div class="field">

                <label>
                    Effective Date
                </label>

                <input
                    v-model="effectiveDate"
                    type="date"
                >

            </div>


            <div class="field">

                <label>
                    Reason
                </label>

                <select v-model="reason">

                    <option value="">
                        Select Reason
                    </option>

                    <option>
                        Annual Revision
                    </option>

                    <option>
                        Performance
                    </option>

                    <option>
                        Promotion
                    </option>

                    <option>
                        Other
                    </option>

                </select>

            </div>


        </div>


        <div class="form-actions">

            <button
                class="cancel-button"
                @click="closeForm"
            >
                Cancel
            </button>


            <button class="save-button">
                Save Revision
            </button>

        </div>

    </div>


    <div class="revision-table">

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
                        Previous Salary
                    </th>

                    <th>
                        Revised Salary
                    </th>

                    <th>
                        Effective Date
                    </th>

                    <th>
                        Reason
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
                    v-for="revision in revisions"
                    :key="revision.employeeCode"
                >

                    <td>
                        {{ revision.employeeCode }}
                    </td>

                    <td>
                        {{ revision.employeeName }}
                    </td>

                    <td>
                        ₹{{ revision.previousSalary }}
                    </td>

                    <td>
                        ₹{{ revision.revisedSalary }}
                    </td>

                    <td>
                        {{ revision.effectiveDate }}
                    </td>

                    <td>
                        {{ revision.reason }}
                    </td>

                    <td>

                        <span
                            class="status"
                            :class="revision.status.toLowerCase()"
                        >
                            {{ revision.status }}
                        </span>

                    </td>

                    <td>

                        <button class="view-button">
                            View
                        </button>

                        <button class="edit-button">
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

.revision-page {

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

    border: none;

    border-radius: 4px;

    cursor: pointer;

}


.form-section {

    background: white;

    border: 1px solid #d0d5db;

    padding: 20px;

    margin-bottom: 20px;

}


.form-section h3 {

    margin-top: 0;

    margin-bottom: 20px;

}


.form-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;

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

    border: 1px solid #ccc;

    border-radius: 4px;

}


.form-actions {

    display: flex;

    justify-content: flex-end;

    gap: 10px;

    margin-top: 20px;

}


.cancel-button {

    padding: 8px 14px;

    border: 1px solid #ccc;

    background: white;

    border-radius: 4px;

    cursor: pointer;

}


.save-button {

    padding: 8px 14px;

    border: none;

    background: #354a68;

    color: white;

    border-radius: 4px;

    cursor: pointer;

}


.revision-table {

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

    padding: 5px 10px;

    border-radius: 12px;

    font-size: 12px;

}


.status.approved {

    background: #e5f4e8;

}


.status.pending {

    background: #f7efd9;

}


.view-button,
.edit-button {

    padding: 6px 10px;

    border-radius: 4px;

    cursor: pointer;

}


.view-button {

    background: white;

    color: #354a68;

    border: 1px solid #354a68;

}


.edit-button {

    background: white;

    color: #555;

    border: 1px solid #aaa;

    margin-left: 5px;

}


@media (max-width: 900px) {

    .form-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}


@media (max-width: 600px) {

    .page-header {

        flex-direction: column;

        align-items: flex-start;

        gap: 15px;

    }


    .form-grid {

        grid-template-columns: 1fr;

    }

}

</style>