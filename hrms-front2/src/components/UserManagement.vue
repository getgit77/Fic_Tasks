<script setup>

import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('USER')

const errors = ref({})
const successMessage = ref('')
const loading = ref(false)


function validateForm() {

    errors.value = {}

    if (!name.value.trim()) {
        errors.value.name = 'Name is required'
    }

    if (!email.value.trim()) {
        errors.value.email = 'Email is required'
    } else if (!email.value.includes('@')) {
        errors.value.email = 'Enter a valid email address'
    }

    if (!password.value) {
        errors.value.password = 'Password is required'
    } else if (password.value.length < 6) {
        errors.value.password =
            'Password must contain at least 6 characters'
    }

    if (!role.value) {
        errors.value.role = 'Please select a role'
    }

    return Object.keys(errors.value).length === 0
}


async function createUser() {

    successMessage.value = ''

    if (!validateForm()) {
        return
    }

    loading.value = true

    try {

        const response = await fetch(
            'http://localhost:3000/api/auth/register',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    name: name.value.trim(),
                    email: email.value.trim(),
                    password: password.value,
                    role: role.value
                })
            }
        )


        const data = await response.json()


        if (!response.ok) {

            errors.value.general =
                data.message || 'Failed to create user'

            return
        }


        successMessage.value =
            'User created successfully'


        name.value = ''
        email.value = ''
        password.value = ''
        role.value = 'USER'

    } catch (error) {

        console.error(error)

        errors.value.general =
            'Unable to connect to server'

    } finally {

        loading.value = false

    }

}

</script>


<template>

<div class="user-page">

    <div class="page-header">

        <h1>
            Add User
        </h1>

        <p>
            Create a new HRMS user account
        </p>

    </div>


    <div class="user-form-card">

        <div
            v-if="successMessage"
            class="success-message"
        >

            <i class="bi bi-check-circle-fill"></i>

            {{ successMessage }}

        </div>


        <div
            v-if="errors.general"
            class="general-error"
        >

            {{ errors.general }}

        </div>


        <form @submit.prevent="createUser">


            <div class="form-group">

                <label>
                    Full Name
                    <span>*</span>
                </label>

                <input
                    v-model="name"
                    type="text"
                    placeholder="Enter full name"
                >

                <small v-if="errors.name">
                    {{ errors.name }}
                </small>

            </div>


            <div class="form-group">

                <label>
                    Email
                    <span>*</span>
                </label>

                <input
                    v-model="email"
                    type="email"
                    placeholder="Enter email address"
                >

                <small v-if="errors.email">
                    {{ errors.email }}
                </small>

            </div>


            <div class="form-group">

                <label>
                    Password
                    <span>*</span>
                </label>

                <input
                    v-model="password"
                    type="password"
                    placeholder="Enter password"
                >

                <small v-if="errors.password">
                    {{ errors.password }}
                </small>

            </div>


            <div class="form-group">

                <label>
                    Role
                    <span>*</span>
                </label>

                <select v-model="role">

                    <option value="USER">
                        USER
                    </option>

                    <option value="ADMIN">
                        ADMIN
                    </option>

                </select>

                <small v-if="errors.role">
                    {{ errors.role }}
                </small>

            </div>


            <div class="form-actions">

                <button
                    type="submit"
                    class="create-button"
                    :disabled="loading"
                >

                    <i class="bi bi-person-plus-fill"></i>

                    {{
                        loading
                            ? 'Creating...'
                            : 'Create User'
                    }}

                </button>

            </div>

        </form>

    </div>

</div>

</template>


<style scoped>

.user-page {

    min-height: calc(100vh - 42px);

    padding: 30px;

    background-color: #f5f7fa;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

}


.page-header {
       width: 550px;

    max-width: 100%;

    margin-bottom: 25px;

}


.page-header h1 {

    margin: 0;

    color: #263950;

    font-size: 24px;

}


.page-header p {

    margin-top: 6px;

    color: #777;

    font-size: 13px;

}


.user-form-card {

    width: 550px;

    max-width: 100%;

    background-color: rgb(194, 231, 240);

    padding: 30px;

    border-radius: 8px;

    box-shadow:
        0 2px 10px rgba(223, 191, 191, 0.08);

}


.form-group {

    margin-bottom: 20px;

}


.form-group label {

    display: block;

    margin-bottom: 7px;

    font-size: 13px;

    font-weight: 600;

    color: #354a68;

}


.form-group label span {

    color: #c0392b;

}


.form-group input,
.form-group select {

    width: 100%;

    box-sizing: border-box;

    padding: 11px 12px;

    border: 1px solid #d2d7dd;

    border-radius: 5px;

    font-size: 13px;

    outline: none;

    background-color: white;

}


.form-group input:focus,
.form-group select:focus {

    border-color: #354a68;

    box-shadow:
        0 0 0 2px rgba(53, 74, 104, 0.08);

}


.form-group small {

    display: block;

    margin-top: 5px;

    color: #c0392b;

    font-size: 11px;

}


.success-message {

    padding: 11px 14px;

    margin-bottom: 20px;

    background-color: #e9f7ef;

    border: 1px solid #b8e2c8;

    color: #277a45;

    border-radius: 5px;

    font-size: 12px;

}


.success-message i {

    margin-right: 6px;

}


.general-error {

    padding: 11px 14px;

    margin-bottom: 20px;

    background-color: #fff0ed;

    border: 1px solid #f0c5bd;

    color: #b13a2e;

    border-radius: 5px;

    font-size: 12px;

}


.form-actions {

    display: flex;

    justify-content: flex-end;

    margin-top: 28px;

    padding-top: 20px;

    border-top: 1px solid #eeeeee;

}


.create-button {

    padding: 10px 18px;

    border-radius: 5px;

    border: none;

    background-color: #682d12;

    color: white;

    font-size: 12px;

    cursor: pointer;

}


.create-button:hover {

    background-color: #4f220d;

}


.create-button:disabled {

    opacity: 0.6;

    cursor: not-allowed;

}


.create-button i {

    margin-right: 6px;

}


@media (max-width: 700px) {

    .user-page {

        padding: 18px;

    }


    .user-form-card {

        padding: 20px;

    }

}

</style>