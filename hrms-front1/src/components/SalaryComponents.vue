 <script setup>

import { ref } from 'vue'

const components = ref([
    {
        name: 'Basic Salary',
        type: 'Earning',
        calculation: 'Fixed',
        value: '40000',
        status: 'Active'
    },
    {
        name: 'HRA',
        type: 'Earning',
        calculation: 'Percentage',
        value: '40%',
        status: 'Active'
    },
    {
        name: 'Transport Allowance',
        type: 'Earning',
        calculation: 'Fixed',
        value: '5000',
        status: 'Active'
    },
    {
        name: 'PF',
        type: 'Deduction',
        calculation: 'Percentage',
        value: '12%',
        status: 'Active'
    }
])

const showForm = ref(false)

const componentName = ref('')
const componentType = ref('')
const calculationType = ref('')
const value = ref('')

function openForm() {

    showForm.value = true

}

function closeForm() {

    showForm.value = false

}

</script>


<template>

<div class="components-page">


    <div class="page-header">

        <div>

            <h2>
                Salary Components
            </h2>

            <p>
                Manage salary earning and deduction components
            </p>

        </div>


        <button
            class="add-button"
            @click="openForm"
        >
            Add Component
        </button>

    </div>


    <div
        v-if="showForm"
        class="form-section"
    >

        <h3>
            Add Salary Component
        </h3>


        <div class="form-grid">


            <div class="field">

                <label>
                    Component Name
                </label>

                <input
                    v-model="componentName"
                    type="text"
                    placeholder="Enter component name"
                >

            </div>


            <div class="field">

                <label>
                    Component Type
                </label>

                <select v-model="componentType">

                    <option value="">
                        Select Type
                    </option>

                    <option>
                        Earning
                    </option>

                    <option>
                        Deduction
                    </option>

                </select>

            </div>


            <div class="field">

                <label>
                    Calculation Type
                </label>

                <select v-model="calculationType">

                    <option value="">
                        Select Calculation
                    </option>

                    <option>
                        Fixed
                    </option>

                    <option>
                        Percentage
                    </option>

                </select>

            </div>


            <div class="field">

                <label>
                    Value
                </label>

                <input
                    v-model="value"
                    type="text"
                    placeholder="Enter value"
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
                Save Component
            </button>

        </div>

    </div>


    <div class="component-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Component Name
                    </th>

                    <th>
                        Type
                    </th>

                    <th>
                        Calculation
                    </th>

                    <th>
                        Value
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
                    v-for="component in components"
                    :key="component.name"
                >

                    <td>
                        {{ component.name }}
                    </td>

                    <td>
                        {{ component.type }}
                    </td>

                    <td>
                        {{ component.calculation }}
                    </td>

                    <td>
                        {{ component.value }}
                    </td>

                    <td>

                        <span class="status">
                            {{ component.status }}
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

.components-page {

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

    grid-template-columns: repeat(4, 1fr);

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


.component-table {

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