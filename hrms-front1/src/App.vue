<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()

const isLoginPage = computed(() => {

    return route.path === '/login'

})

</script>


<template>

<div v-if="isLoginPage">

    <RouterView />

</div>


<div
    v-else
    class="app"
>


    <Header />


    <div class="main-area">


        <Sidebar />


        <main class="content">

            <RouterView />

        </main>


    </div>


</div>

</template>


<style>

* {

    box-sizing: border-box;

}


body {

    margin: 0;

}


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