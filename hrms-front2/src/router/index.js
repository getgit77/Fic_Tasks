import { createRouter, createWebHistory } from 'vue-router'

import Landing from '../components/Landing.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import RegisterEmployee from '../components/RegisterEmployee.vue'
import EmployeeList from '../components/EmployeeList.vue'
import EmployeeDetails from '../components/EmployeeDetails.vue'
import Attendance from '../components/Attendance.vue'
import Reports from '../components/Reports.vue'
import SalaryStructure from '../components/SalaryStructure.vue'
import SalaryComponents from '../components/SalaryComponents.vue'
import SalaryRevision from '../components/SalaryRevision.vue'
import UserManagement from '../components/UserManagement.vue'
import RoleManagement from '../components/RoleManagement.vue'
import SystemSettings from '../components/SystemSettings.vue'
import ApprovalRequest from '../components/ApprovalRequest.vue'


const routes = [

    {
        path: '/',
        component: Landing
    },

    {
        path: '/login',
        component: Login
    },

    {
        path: '/register',
        component: UserManagement
    },

    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/employees',
        component: EmployeeList,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/employee-details',
        component: EmployeeDetails,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/attendance',
        component: Attendance,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/reports',
        component: Reports,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/salary-structure',
        component: SalaryStructure,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/salary-components',
        component: SalaryComponents,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/salary-revision',
        component: SalaryRevision,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/register-employee',
        component: RegisterEmployee,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },

    {
        path: '/user-management',
        component: UserManagement,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },

    {
        path: '/role-management',
        component: RoleManagement,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },

    {
        path: '/system-settings',
        component: SystemSettings,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        }
    },

    {
        path: '/approval-request',
        component: ApprovalRequest,
        meta: {
            requiresAuth: true
        }
    }

]


const router = createRouter({

    history: createWebHistory(),

    routes

})


router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('token')

    const userData = localStorage.getItem('user')

    let user = null


    if (userData) {

        try {

            user = JSON.parse(userData)

        } catch {

            user = null

        }

    }


    if (
        to.meta.requiresAuth &&
        !token
    ) {

        next('/login')

        return

    }


    if (
        to.meta.requiresAdmin &&
        (!user || user.role !== 'ADMIN')
    ) {

        next('/dashboard')

        return

    }


    next()

})


export default router