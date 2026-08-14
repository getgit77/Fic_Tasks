
<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

function goToLogin() {

    router.push('/login')

}

function goToRegister() {

    router.push('/user-management')

}

</script>


<template>

<div class="landing-page">

    <header class="landing-header">

        <div class="logo">
            HRMS
        </div>

        <div class="header-actions">

            <button
                class="login-button"
                @click="goToLogin"
            >
                Login
            </button>

            <button
                class="register-button"
                @click="goToRegister"
            >
                Sign Up
            </button>

        </div>

    </header>


    <main class="landing-content">

        <div class="hero-content">

            <p class="welcome">
                HUMAN RESOURCE MANAGEMENT SYSTEM
            </p>

            <h1>
                Manage Your Workforce
                <br>
                Efficiently
            </h1>

            <p class="description">
                A centralized platform to manage employees,
                attendance, salary, reports and HR operations
                in one place.
            </p>


            <div class="hero-actions">

                <button
                    class="primary-button"
                    @click="goToLogin"
                >
                    Login to HRMS
                </button>

                <button
                    class="secondary-button"
                    @click="goToRegister"
                >
                    Create Account
                </button>

            </div>

        </div>


        <div class="hero-card">

            <div class="card-title">
                HRMS
            </div>

            <div class="feature">

                <i class="bi bi-people-fill"></i>

                <div>
                    <strong>
                        Employee Management
                    </strong>

                    <span>
                        Manage employee information
                    </span>
                </div>

            </div>


            <div class="feature">

                <i class="bi bi-clock"></i>

                <div>
                    <strong>
                        Attendance
                    </strong>

                    <span>
                        Track employee attendance
                    </span>
                </div>

            </div>


            <div class="feature">

                <i class="bi bi-cash-stack"></i>

                <div>
                    <strong>
                        Salary Management
                    </strong>

                    <span>
                        Manage salary configuration
                    </span>

                </div>

            </div>


            <div class="feature">

                <i class="bi bi-bar-chart"></i>

                <div>
                    <strong>
                        Reports
                    </strong>

                    <span>
                        Access HR reports
                    </span>

                </div>

            </div>

        </div>

    </main>


    <footer>

        HRMS &copy; 2026

    </footer>

</div>

</template>


<style scoped>

.landing-page {

    min-height: 100vh;

    background-color: #f5f6f8;

    color: #263950;

}


.landing-header {

    height: 64px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 50px;

    background-color: white;

    border-bottom: 1px solid #e5e7eb;

}


.logo {

    font-size: 21px;

    font-weight: 700;

    color: #682d12;

}


.header-actions {

    display: flex;

    gap: 10px;

}


.login-button,
.register-button {

    padding: 8px 18px;

    border-radius: 4px;

    font-size: 12px;

    cursor: pointer;

}


.login-button {

    border: 1px solid #682d12;

    background-color: white;

    color: #682d12;

}


.register-button {

    border: 1px solid #682d12;

    background-color: #682d12;

    color: white;

}


.landing-content {

    min-height: calc(100vh - 115px);

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 90px;

    padding: 50px;

}


.hero-content {

    max-width: 570px;

}


.welcome {

    margin-bottom: 12px;

    color: #682d12;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.2px;

}


.hero-content h1 {

    margin: 0;

    color: #263950;

    font-size: 42px;

    line-height: 1.15;

}


.description {

    max-width: 500px;

    margin-top: 20px;

    color: #6b7280;

    font-size: 14px;

    line-height: 1.7;

}


.hero-actions {

    display: flex;

    gap: 12px;

    margin-top: 28px;

}


.primary-button,
.secondary-button {

    padding: 11px 20px;

    border-radius: 5px;

    font-size: 12px;

    cursor: pointer;

}


.primary-button {

    border: 1px solid #682d12;

    background-color: #682d12;

    color: white;

}


.secondary-button {

    border: 1px solid #682d12;

    background-color: white;

    color: #682d12;

}


.hero-card {

    width: 330px;

    padding: 25px;

    background-color: white;

    border-radius: 8px;

    box-shadow:
        0 5px 20px rgba(0, 0, 0, 0.08);

}


.card-title {

    margin-bottom: 20px;

    color: #682d12;

    font-size: 18px;

    font-weight: 700;

}


.feature {

    display: flex;

    align-items: center;

    gap: 13px;

    padding: 14px 0;

    border-bottom: 1px solid #eeeeee;

}


.feature:last-child {

    border-bottom: none;

}


.feature i {

    width: 30px;

    color: #682d12;

    font-size: 17px;

}


.feature strong {

    display: block;

    margin-bottom: 3px;

    font-size: 12px;

}


.feature span {

    color: #888;

    font-size: 10px;

}


footer {

    height: 51px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #999;

    font-size: 10px;

}


@media (max-width: 800px) {

    .landing-header {

        padding: 0 20px;

    }


    .landing-content {

        flex-direction: column;

        gap: 35px;

        padding: 35px 20px;

    }


    .hero-content {

        text-align: center;

    }


    .hero-content h1 {

        font-size: 32px;

    }


    .description {

        margin-left: auto;

        margin-right: auto;

    }


    .hero-actions {

        justify-content: center;

    }


    .hero-card {

        width: 100%;

        max-width: 400px;

    }

}

</style>










































































































































