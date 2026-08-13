<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const errorMessage = ref('')
const loading = ref(false)

function login() {

    errorMessage.value = ''

    if (!email.value || !password.value) {

        errorMessage.value = 'Please enter email and password'

        return

    }

    loading.value = true

    if (
        email.value === 'test@hrms.com' &&
        password.value === '123456'
    ) {

        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userName', 'Test User')
        localStorage.setItem('userRole', 'USER')

        loading.value = false

        router.push('/')

    } else {

        loading.value = false

        errorMessage.value = 'Invalid email or password'

    }

}

</script>


<template>

<div class="login-page">


    <div class="login-box">


        <h1>
            HRMS
        </h1>


        <p class="login-title">
            Login to your account
        </p>


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
                Password
            </label>

            <input
                v-model="password"
                type="password"
                placeholder="Enter password"
            >

        </div>


        <p
            v-if="errorMessage"
            class="error"
        >
            {{ errorMessage }}
        </p>


        <button
            class="login-button"
            @click="login"
            :disabled="loading"
        >

            {{ loading ? 'Logging in...' : 'Login' }}

        </button>


        <div class="signup-section">

            <span>
                Don't have an account?
            </span>

            <RouterLink to="/register-employee">
                Sign Up
            </RouterLink>

        </div>


    </div>


</div>

</template>


<style scoped>

.login-page {

    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    background-color: #f5f6f8;

}


.login-box {

    width: 360px;

    padding: 30px;

    background-color: white;

    border: 1px solid #d0d5db;

    border-radius: 6px;

}


.login-box h1 {

    margin: 0;

    text-align: center;

    color: #354a68;

}


.login-title {

    text-align: center;

    color: #777;

    font-size: 13px;

    margin-bottom: 25px;

}


.field {

    display: flex;

    flex-direction: column;

    margin-bottom: 18px;

}


.field label {

    margin-bottom: 6px;

    font-size: 12px;

    font-weight: bold;

}


.field input {

    padding: 10px;

    border: 1px solid #ccc;

    border-radius: 4px;

    outline: none;

}


.field input:focus {

    border-color: #354a68;

}


.login-button {

    width: 100%;

    padding: 10px;

    border: none;

    border-radius: 4px;

    background-color: #354a68;

    color: white;

    cursor: pointer;

}


.login-button:hover {

    background-color: #2d405b;

}


.login-button:disabled {

    opacity: 0.6;

    cursor: not-allowed;

}


.error {

    color: #c0392b;

    font-size: 12px;

    margin-bottom: 12px;

}


.signup-section {

    margin-top: 18px;

    text-align: center;

    font-size: 12px;

    color: #777;

}


.signup-section a {

    margin-left: 5px;

    color: #354a68;

    font-weight: bold;

    text-decoration: none;

}


.signup-section a:hover {

    text-decoration: underline;

}


@media (max-width: 500px) {

    .login-box {

        width: calc(100% - 30px);

    }

}

</style>