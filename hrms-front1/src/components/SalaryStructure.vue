<script setup>

import { ref } from 'vue'

const structures = ref([
    {
        name: 'Software Engineer',
        grade: 'A',
        basic: '40000',
        hra: '16000',
        allowance: '10000',
        deduction: '5000',
        status: 'Active'
    },
    {
        name: 'HR Executive',
        grade: 'B',
        basic: '30000',
        hra: '12000',
        allowance: '8000',
        deduction: '4000',
        status: 'Active'
    },
    {
        name: 'Accountant',
        grade: 'B',
        basic: '32000',
        hra: '13000',
        allowance: '7000',
        deduction: '4000',
        status: 'Active'
    }
])

const showForm = ref(false)

const structureName = ref('')
const grade = ref('')
const basicSalary = ref('')
const hra = ref('')
const allowance = ref('')
const deduction = ref('')

function openForm() {

    showForm.value = true

}

function closeForm() {

    showForm.value = false

}

</script>


<template>

<div class="salary-page">


    <div class="page-header">

        <div>

            <h2>
                Salary Structure
            </h2>

            <p>
                Manage employee salary structures
            </p>

        </div>


        <button
            class="add-button"
            @click="openForm"
        >
            Add Salary Structure
        </button>

    </div>


    <div
        v-if="showForm"
        class="form-section"
    >

        <h3>
            Add Salary Structure
        </h3>


        <div class="form-grid">


            <div class="field">

                <label>
                    Structure Name
                </label>

                <input
                    v-model="structureName"
                    type="text"
                    placeholder="Enter structure name"
                >

            </div>


            <div class="field">

                <label>
                    Grade
                </label>

                <select v-model="grade">

                    <option value="">
                        Select Grade
                    </option>

                    <option>
                        A
                    </option>

                    <option>
                        B
                    </option>

                    <option>
                        C
                    </option>

                </select>

            </div>


            <div class="field">

                <label>
                    Basic Salary
                </label>

                <input
                    v-model="basicSalary"
                    type="number"
                    placeholder="Enter basic salary"
                >

            </div>


            <div class="field">

                <label>
                    HRA
                </label>

                <input
                    v-model="hra"
                    type="number"
                    placeholder="Enter HRA"
                >

            </div>


            <div class="field">

                <label>
                    Allowance
                </label>

                <input
                    v-model="allowance"
                    type="number"
                    placeholder="Enter allowance"
                >

            </div>


            <div class="field">

                <label>
                    Deduction
                </label>

                <input
                    v-model="deduction"
                    type="number"
                    placeholder="Enter deduction"
                >

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
                Save Structure
            </button>

        </div>

    </div>


    <div class="salary-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Structure Name
                    </th>

                    <th>
                        Grade
                    </th>

                    <th>
                        Basic Salary
                    </th>

                    <th>
                        HRA
                    </th>

                    <th>
                        Allowance
                    </th>

                    <th>
                        Deduction
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
                    v-for="structure in structures"
                    :key="structure.name"
                >

                    <td>
                        {{ structure.name }}
                    </td>

                    <td>
                        {{ structure.grade }}
                    </td>

                    <td>
                        ₹{{ structure.basic }}
                    </td>

                    <td>
                        ₹{{ structure.hra }}
                    </td>

                    <td>
                        ₹{{ structure.allowance }}
                    </td>

                    <td>
                        ₹{{ structure.deduction }}
                    </td>

                    <td>

                        <span class="status">
                            {{ structure.status }}
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

.salary-page {

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


.salary-table {

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

    background: #e5f4e8;

    font-size: 12px;

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