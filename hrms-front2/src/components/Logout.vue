<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()


function logout() {

    localStorage.removeItem('token')

    localStorage.removeItem('user')

    localStorage.removeItem('userName')

    localStorage.removeItem('userRole')

    localStorage.removeItem('isLoggedIn')

    router.push('/')

}

</script>


<template>

<button
    class="logout-button"
    @click="logout"
>

    <i class="bi bi-box-arrow-right"></i>

    Logout

</button>

</template>


<style scoped>

.logout-button {

    border: none;

    background-color: transparent;

    color: #354a68;

    padding: 8px 12px;

    cursor: pointer;

    font-size: 12px;

}


.logout-button:hover {

    background-color: #f1f3f5;

}

</style>