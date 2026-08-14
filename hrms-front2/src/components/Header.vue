<script setup>

import Logout from './Logout.vue'

</script>


<template>

<header class="header">

    <div class="header-title">

        HRMS

    </div>


    <div class="header-right">

        <span class="user-name">

            {{ localStorage.getItem('userName') }}

        </span>

        <Logout />

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

    border-bottom: 1px solid #ddd;

}


.header-title {

    color: #682d12;

    font-size: 18px;

    font-weight: bold;

}


.header-right {

    display: flex;

    align-items: center;

    gap: 10px;

}


.user-name {

    color: #354a68;

    font-size: 12px;

}

</style>