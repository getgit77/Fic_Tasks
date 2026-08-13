import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import RegisterEmployee from '../components/RegisterEmployee.vue'
import Login from '../components/Login.vue'
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
        component: Dashboard
    },

    {
        path: '/login',
        component: Login
    },

    {
        path: '/register-employee',
        component: RegisterEmployee
    },

    {
        path: '/employees',
        component: EmployeeList
    },

    {
        path: '/employee-details',
        component: EmployeeDetails
    },

    {
        path: '/attendance',
        component: Attendance
    },

    {
        path: '/reports',
        component: Reports
    },

    {
        path: '/salary-structure',
        component: SalaryStructure
    },

    {
        path: '/salary-components',
        component: SalaryComponents
    },

    {
        path: '/salary-revision',
        component: SalaryRevision
    },

    {
        path: '/user-management',
        component: UserManagement
    },

    {
        path: '/role-management',
        component: RoleManagement
    },

    {
        path: '/system-settings',
        component: SystemSettings
    },

    {
        path: '/approval-request',
        component: ApprovalRequest
    }

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router