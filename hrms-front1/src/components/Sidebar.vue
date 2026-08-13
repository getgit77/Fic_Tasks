<script setup>

import { ref } from 'vue'

const salaryOpen = ref(false)

const systemOpen = ref(false)

const approvalOpen = ref(false)


function toggleSalary() {

    salaryOpen.value = !salaryOpen.value

}


function toggleSystem() {

    systemOpen.value = !systemOpen.value

}


function toggleApproval() {

    approvalOpen.value = !approvalOpen.value

}

</script>


<template>

<aside class="sidebar">


    <RouterLink to="/">

        <i class="bi bi-speedometer2"></i>

        <span>
            HRMS Dashboard
        </span>

    </RouterLink>


    <RouterLink to="/employees">

        <i class="bi bi-people-fill"></i>

        <span>
            Employee Management
        </span>

    </RouterLink>


    <RouterLink to="#">

        <i class="bi bi-clock"></i>

        <span>
            Attendance Management
        </span>

    </RouterLink>


    <RouterLink to="#">

        <i class="bi bi-file-earmark"></i>

        <span>
            Reports
        </span>

    </RouterLink>


    <div class="sidebar-item">

        <div
            class="sidebar-link"
            @click="toggleSalary"
        >

            <i class="bi bi-gear-fill"></i>

            <span>
                Salary CONFIG
            </span>

            <i
                class="bi"
                :class="salaryOpen
                    ? 'bi-chevron-up'
                    : 'bi-chevron-down'"
            ></i>

        </div>


        <div
            v-if="salaryOpen"
            class="submenu"
        >

            <RouterLink to="#">
                Salary Structure
            </RouterLink>

            <RouterLink to="#">
                Salary Components
            </RouterLink>

            <RouterLink to="#">
                Salary Revision
            </RouterLink>

        </div>

    </div>


    <div class="sidebar-item">

        <div
            class="sidebar-link"
            @click="toggleSystem"
        >

            <i class="bi bi-gear-fill"></i>

            <span>
                System CONFIG
            </span>

            <i
                class="bi"
                :class="systemOpen
                    ? 'bi-chevron-up'
                    : 'bi-chevron-down'"
            ></i>

        </div>


        <div
            v-if="systemOpen"
            class="submenu"
        >

            <RouterLink to="#">
                User Management
            </RouterLink>

            <RouterLink to="#">
                Role Management
            </RouterLink>

            <RouterLink to="#">
                System Settings
            </RouterLink>

        </div>

    </div>


    <div class="sidebar-item">

        <div
            class="sidebar-link"
            @click="toggleApproval"
        >

            <i class="bi bi-file-earmark-check"></i>

            <span>
                Approval Request
            </span>

            <i
                class="bi"
                :class="approvalOpen
                    ? 'bi-chevron-up'
                    : 'bi-chevron-down'"
            ></i>

        </div>


        <div
            v-if="approvalOpen"
            class="submenu"
        >

            <RouterLink to="#">
                Pending Requests
            </RouterLink>

            <RouterLink to="#">
                Approved Requests
            </RouterLink>

            <RouterLink to="#">
                Rejected Requests
            </RouterLink>

        </div>

    </div>


</aside>

</template>


<style scoped>

.sidebar {

    width: 148px;

    min-height: calc(100vh - 42px);

    background-color: #682d12;

}


.sidebar a {

    display: flex;

    align-items: center;

    min-height: 37px;

    padding: 0 8px;

    color: white;

    text-decoration: none;

    font-size: 11px;

    gap: 7px;

}


.sidebar a:hover {

    background-color: #2d405b;

}


.sidebar-link {

    display: flex;

    align-items: center;

    min-height: 37px;

    padding: 0 8px;

    color: white;

    font-size: 11px;

    gap: 7px;

    cursor: pointer;

}


.sidebar-link:hover {

    background-color: #2d405b;

}


.sidebar-link > i:last-child {

    margin-left: auto;

    font-size: 9px;

}


.submenu {

    background-color: #2d405b;

}


.submenu a {

    min-height: 32px;

    padding-left: 28px;

    font-size: 10px;

}


.submenu a:hover {

    background-color: #263950;

}


@media (max-width: 700px) {

    .sidebar {

        width: 55px;

    }


    .sidebar a {

        justify-content: center;

    }


    .sidebar a span {

        display: none;

    }


    .sidebar-link {

        justify-content: center;

    }


    .sidebar-link span {

        display: none;

    }


    .sidebar-link > i:last-child {

        display: none;

    }


    .submenu {

        display: none;

    }

}

</style>