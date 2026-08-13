<script setup>

import { ref } from 'vue'

const users = ref([
    {
        name: 'Admin User',
        email: 'admin@hrms.com',
        role: 'ADMIN',
        status: 'Active'
    },
    {
        name: 'Test User',
        email: 'test@hrms.com',
        role: 'USER',
        status: 'Active'
    },
    {
        name: 'HR User',
        email: 'hr@hrms.com',
        role: 'USER',
        status: 'Inactive'
    }
])

const showForm = ref(false)

const name = ref('')
const email = ref('')
const role = ref('')
const status = ref('Active')

function openForm() {

    showForm.value = true

}

function closeForm() {

    showForm.value = false

}

</script>


<template>

<div class="users-page">


    <div class="page-header">

        <div>

            <h2>
                User Management
            </h2>

            <p>
                Manage system users and their access
            </p>

        </div>


        <button
            class="add-button"
            @click="openForm"
        >
            Add User
        </button>

    </div>


    <div
        v-if="showForm"
        class="form-section"
    >

        <h3>
            Add User
        </h3>


        <div class="form-grid">


            <div class="field">

                <label>
                    Name
                </label>

                <input
                    v-model="name"
                    type="text"
                    placeholder="Enter name"
                >

            </div>


            <div class="field">

                <label>
                    Email
                </label>

                <input
                    v-model="email"
                    type="email"
                    placeholder="Enter email"
                >

            </div>


            <div class="field">

                <label>
                    Role
                </label>

                <select v-model="role">

                    <option value="">
                        Select Role
                    </option>

                    <option>
                        ADMIN
                    </option>

                    <option>
                        USER
                    </option>

                </select>

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
                Save User
            </button>

        </div>

    </div>


    <div class="user-summary">

        <div class="summary-card">

            <span>
                Total Users
            </span>

            <strong>
                3
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Active Users
            </span>

            <strong>
                2
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Administrators
            </span>

            <strong>
                1
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Regular Users
            </span>

            <strong>
                2
            </strong>

        </div>

    </div>


    <div class="user-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Name
                    </th>

                    <th>
                        Email
                    </th>

                    <th>
                        Role
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
                    v-for="user in users"
                    :key="user.email"
                >

                    <td>
                        {{ user.name }}
                    </td>

                    <td>
                        {{ user.email }}
                    </td>

                    <td>

                        <span class="role">
                            {{ user.role }}
                        </span>

                    </td>

                    <td>

                        <span
                            class="status"
                            :class="user.status.toLowerCase()"
                        >
                            {{ user.status }}
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

.users-page {

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


.user-summary {

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


.user-table {

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


.role {

    padding: 5px 10px;

    border-radius: 12px;

    background: #eef1f6;

    font-size: 12px;

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


@media (max-width: 900px) {

    .form-grid {

        grid-template-columns: repeat(2, 1fr);

    }


    .user-summary {

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


    .user-summary {

        grid-template-columns: 1fr;

    }

}

</style>