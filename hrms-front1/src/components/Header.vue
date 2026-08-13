<script setup>

import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userName = computed(() => {

    return localStorage.getItem('userName') || 'User'

})

const userRole = computed(() => {

    return localStorage.getItem('userRole') || 'USER'

})

function logout() {

    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    localStorage.removeItem('userRole')

    router.push('/login')

}

</script>


<template>

<header class="header">

    <div class="header-left">

        <h2>
            HRMS
        </h2>

    </div>


    <div class="header-right">

        <div class="user-info">

            <span class="user-name">
                {{ userName }}
            </span>

            <span class="user-role">
                {{ userRole }}
            </span>

        </div>


        <button
            class="logout-button"
            @click="logout"
        >

            <i class="bi bi-box-arrow-right"></i>

            Logout

        </button>

    </div>

</header>

</template>


<style scoped>

.header {

    height: 55px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 20px;

    background-color: white;

    border-bottom: 1px solid #d0d5db;

}


.header-left h2 {

    margin: 0;

    font-size: 18px;

    color: #354a68;

}


.header-right {

    display: flex;

    align-items: center;

    gap: 15px;

}


.user-info {

    display: flex;

    flex-direction: column;

    align-items: flex-end;

}


.user-name {

    font-size: 13px;

    font-weight: bold;

}


.user-role {

    font-size: 10px;

    color: #777;

}


.logout-button {

    display: flex;

    align-items: center;

    gap: 6px;

    padding: 7px 12px;

    background: white;

    color: #354a68;

    border: 1px solid #354a68;

    border-radius: 4px;

    cursor: pointer;

    font-size: 12px;

}


.logout-button:hover {

    background-color: #354a68;

    color: white;

}


@media (max-width: 600px) {

    .user-info {

        display: none;

    }

}

</style>