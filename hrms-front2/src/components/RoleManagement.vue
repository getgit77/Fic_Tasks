<script setup>

import { ref } from 'vue'

const roles = ref([
    {
        name: 'ADMIN',
        description: 'Full access to the HRMS system',
        users: 1,
        status: 'Active'
    },
    {
        name: 'USER',
        description: 'Access to regular HRMS features',
        users: 2,
        status: 'Active'
    }
])

const showForm = ref(false)

const roleName = ref('')
const description = ref('')
const status = ref('Active')

function openForm() {

    showForm.value = true

}

function closeForm() {

    showForm.value = false

}

</script>


<template>

<div class="roles-page">


    <div class="page-header">

        <div>

            <h2>
                Role Management
            </h2>

            <p>
                Manage system roles and access levels
            </p>

        </div>


        <button
            class="add-button"
            @click="openForm"
        >
            Add Role
        </button>

    </div>


    <div
        v-if="showForm"
        class="form-section"
    >

        <h3>
            Add Role
        </h3>


        <div class="form-grid">


            <div class="field">

                <label>
                    Role Name
                </label>

                <input
                    v-model="roleName"
                    type="text"
                    placeholder="Enter role name"
                >

            </div>


            <div class="field">

                <label>
                    Description
                </label>

                <input
                    v-model="description"
                    type="text"
                    placeholder="Enter description"
                >

            </div>


            <div class="field">

                <label>
                    Status
                </label>

                <select v-model="status">

                    <option>
                        Active
                    </option>

                    <option>
                        Inactive
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
                Save Role
            </button>

        </div>

    </div>


    <div class="role-summary">


        <div class="summary-card">

            <span>
                Total Roles
            </span>

            <strong>
                {{ roles.length }}
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Active Roles
            </span>

            <strong>
                2
            </strong>

        </div>


    </div>


    <div class="role-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Role Name
                    </th>

                    <th>
                        Description
                    </th>

                    <th>
                        Users
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
                    v-for="role in roles"
                    :key="role.name"
                >

                    <td>
                        {{ role.name }}
                    </td>

                    <td>
                        {{ role.description }}
                    </td>

                    <td>
                        {{ role.users }}
                    </td>

                    <td>

                        <span
                            class="status"
                            :class="role.status.toLowerCase()"
                        >
                            {{ role.status }}
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

.roles-page {

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


.role-summary {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

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


.role-table {

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


.status.active {

    background: #e5f4e8;

}


.status.inactive {

    background: #f8e5e5;

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


@media (max-width: 800px) {

    .form-grid {

        grid-template-columns: 1fr;

    }

}


@media (max-width: 600px) {

    .page-header {

        flex-direction: column;

        align-items: flex-start;

        gap: 15px;

    }

    .role-summary {

        grid-template-columns: 1fr;

    }

}

</style>