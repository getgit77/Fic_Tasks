<script setup>

import { ref, computed } from 'vue'

const activeTab = ref('Pending')

const requests = ref([
    {
        id: 1,
        employeeCode: 'EMP001',
        employeeName: 'John Smith',
        requestType: 'Leave',
        description: 'Casual Leave',
        requestDate: '10-08-2026',
        status: 'Pending'
    },
    {
        id: 2,
        employeeCode: 'EMP002',
        employeeName: 'Rahul Sharma',
        requestType: 'Salary Revision',
        description: 'Salary revision request',
        requestDate: '09-08-2026',
        status: 'Pending'
    },
    {
        id: 3,
        employeeCode: 'EMP003',
        employeeName: 'Priya Patel',
        requestType: 'Leave',
        description: 'Medical Leave',
        requestDate: '05-08-2026',
        status: 'Approved'
    },
    {
        id: 4,
        employeeCode: 'EMP004',
        employeeName: 'Amit Kumar',
        requestType: 'Attendance',
        description: 'Attendance correction',
        requestDate: '04-08-2026',
        status: 'Rejected'
    }
])

const filteredRequests = computed(() => {

    return requests.value.filter(
        request => request.status === activeTab.value
    )

})

function changeTab(tab) {

    activeTab.value = tab

}

</script>


<template>

<div class="approval-page">


    <div class="page-header">

        <div>

            <h2>
                Approval Request
            </h2>

            <p>
                Review and manage employee approval requests
            </p>

        </div>

    </div>


    <div class="summary-section">


        <div class="summary-card">

            <span>
                Pending
            </span>

            <strong>
                2
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Approved
            </span>

            <strong>
                1
            </strong>

        </div>


        <div class="summary-card">

            <span>
                Rejected
            </span>

            <strong>
                1
            </strong>

        </div>


    </div>


    <div class="request-section">


        <div class="tabs">


            <button
                :class="{ active: activeTab === 'Pending' }"
                @click="changeTab('Pending')"
            >
                Pending Requests
            </button>


            <button
                :class="{ active: activeTab === 'Approved' }"
                @click="changeTab('Approved')"
            >
                Approved Requests
            </button>


            <button
                :class="{ active: activeTab === 'Rejected' }"
                @click="changeTab('Rejected')"
            >
                Rejected Requests
            </button>


        </div>


        <div class="request-table">

            <table>

                <thead>

                    <tr>

                        <th>
                            Employee Code
                        </th>

                        <th>
                            Employee Name
                        </th>

                        <th>
                            Request Type
                        </th>

                        <th>
                            Description
                        </th>

                        <th>
                            Request Date
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr
                        v-for="request in filteredRequests"
                        :key="request.id"
                    >

                        <td>
                            {{ request.employeeCode }}
                        </td>

                        <td>
                            {{ request.employeeName }}
                        </td>

                        <td>
                            {{ request.requestType }}
                        </td>

                        <td>
                            {{ request.description }}
                        </td>

                        <td>
                            {{ request.requestDate }}
                        </td>

                        <td>

                            <span
                                class="status"
                                :class="request.status.toLowerCase()"
                            >
                                {{ request.status }}
                            </span>

                        </td>

                        <td>

                            <button
                                v-if="request.status === 'Pending'"
                                class="approve-button"
                            >
                                Approve
                            </button>

                            <button
                                v-if="request.status === 'Pending'"
                                class="reject-button"
                            >
                                Reject
                            </button>

                            <button
                                v-if="request.status !== 'Pending'"
                                class="view-button"
                            >
                                View
                            </button>

                        </td>

                    </tr>


                    <tr v-if="filteredRequests.length === 0">

                        <td
                            colspan="7"
                            class="no-data"
                        >
                            No {{ activeTab.toLowerCase() }} requests found
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>


</div>

</template>


<style scoped>

.approval-page {

    padding: 20px;

}


.page-header {

    margin-bottom: 20px;

}


.page-header h2 {

    margin: 0;

    font-size: 20px;

}


.page-header p {

    margin: 5px 0 0;

    color: #777;

    font-size: 13px;

}


.summary-section {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 15px;

    margin-bottom: 20px;

}


.summary-card {

    background: white;

    border: 1px solid #d0d5db;

    padding: 18px;

    border-radius: 5px;

}


.summary-card span {

    display: block;

    color: #777;

    font-size: 13px;

}


.summary-card strong {

    display: block;

    margin-top: 8px;

    font-size: 24px;

}


.request-section {

    background: white;

    border: 1px solid #d0d5db;

}


.tabs {

    display: flex;

    border-bottom: 1px solid #ddd;

}


.tabs button {

    padding: 12px 18px;

    border: none;

    background: white;

    color: #555;

    cursor: pointer;

    font-size: 12px;

}


.tabs button.active {

    color: #354a68;

    border-bottom: 2px solid #354a68;

    font-weight: bold;

}


.request-table {

    overflow-x: auto;

}


table {

    width: 100%;

    border-collapse: collapse;

}


th {

    padding: 12px;

    background: #f2f4f7;

    text-align: left;

    font-size: 13px;

}


td {

    padding: 12px;

    border-top: 1px solid #e5e5e5;

    font-size: 13px;

}


.status {

    padding: 5px 10px;

    border-radius: 12px;

    font-size: 12px;

}


.status.pending {

    background: #f7efd9;

}


.status.approved {

    background: #e5f4e8;

}


.status.rejected {

    background: #f8e5e5;

}


.approve-button,
.reject-button,
.view-button {

    padding: 6px 10px;

    border-radius: 4px;

    cursor: pointer;

    font-size: 11px;

}


.approve-button {

    background: white;

    color: #287a3e;

    border: 1px solid #287a3e;

}


.reject-button {

    background: white;

    color: #a33a3a;

    border: 1px solid #a33a3a;

    margin-left: 5px;

}


.view-button {

    background: white;

    color: #354a68;

    border: 1px solid #354a68;

}


.no-data {

    text-align: center;

    padding: 30px;

    color: #777;

}


@media (max-width: 700px) {

    .summary-section {

        grid-template-columns: 1fr;

    }


    .tabs {

        overflow-x: auto;

    }

}

</style>