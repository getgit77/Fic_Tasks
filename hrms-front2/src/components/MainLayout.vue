<script setup>

import Header from './Header.vue'
import Sidebar from './Sidebar.vue'

</script>


<template>

<div class="app">

    <Header />

    <div class="main-area">

        <Sidebar />

        <main class="content">

            <RouterView />

        </main>

    </div>

</div>

</template>


<style scoped>

.app {

    min-height: 100vh;

    background-color: #f5f6f8;

}

.main-area {

    display: flex;

    min-height: calc(100vh - 55px);

}

.content {

    flex: 1;

    overflow-x: auto;

}

</style>