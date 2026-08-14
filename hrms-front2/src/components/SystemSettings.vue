<script setup>

import { ref } from 'vue'

const companyName = ref('HRMS Company')
const companyEmail = ref('admin@hrms.com')
const companyPhone = ref('')
const address = ref('')

const emailNotification = ref(true)
const attendanceNotification = ref(true)
const leaveNotification = ref(true)

const dateFormat = ref('DD-MM-YYYY')
const timeFormat = ref('12 Hour')

function saveSettings() {

    console.log('Settings saved')

}

</script>


<template>

<div class="settings-page">

    <div class="page-header">

        <div>

            <h2>
                System Settings
            </h2>

            <p>
                Manage HRMS system configuration
            </p>

        </div>

    </div>


    <div class="settings-section">

        <h3>
            Company Information
        </h3>


        <div class="form-grid">

            <div class="field">

                <label>
                    Company Name
                </label>

                <input
                    v-model="companyName"
                    type="text"
                >

            </div>


            <div class="field">

                <label>
                    Company Email
                </label>

                <input
                    v-model="companyEmail"
                    type="email"
                >

            </div>


            <div class="field">

                <label>
                    Company Phone
                </label>

                <input
                    v-model="companyPhone"
                    type="text"
                    placeholder="Enter phone number"
                >

            </div>


            <div class="field full-width">

                <label>
                    Address
                </label>

                <textarea
                    v-model="address"
                    placeholder="Enter company address"
                ></textarea>

            </div>

        </div>

    </div>


    <div class="settings-section">

        <h3>
            Notification Settings
        </h3>


        <div class="setting-row">

            <div>

                <strong>
                    Email Notifications
                </strong>

                <p>
                    Receive important HRMS notifications through email
                </p>

            </div>


            <input
                v-model="emailNotification"
                type="checkbox"
            >

        </div>


        <div class="setting-row">

            <div>

                <strong>
                    Attendance Notifications
                </strong>

                <p>
                    Receive notifications related to attendance
                </p>

            </div>


            <input
                v-model="attendanceNotification"
                type="checkbox"
            >

        </div>


        <div class="setting-row">

            <div>

                <strong>
                    Leave Notifications
                </strong>

                <p>
                    Receive notifications related to employee leave
                </p>

            </div>


            <input
                v-model="leaveNotification"
                type="checkbox"
            >

        </div>

    </div>


    <div class="settings-section">

        <h3>
            System Preferences
        </h3>


        <div class="form-grid">

            <div class="field">

                <label>
                    Date Format
                </label>

                <select v-model="dateFormat">

                    <option>
                        DD-MM-YYYY
                    </option>

                    <option>
                        MM-DD-YYYY
                    </option>

                    <option>
                        YYYY-MM-DD
                    </option>

                </select>

            </div>


            <div class="field">

                <label>
                    Time Format
                </label>

                <select v-model="timeFormat">

                    <option>
                        12 Hour
                    </option>

                    <option>
                        24 Hour
                    </option>

                </select>

            </div>

        </div>

    </div>


    <div class="actions">

        <button
            class="save-button"
            @click="saveSettings"
        >
            Save Settings
        </button>

    </div>

</div>

</template>


<style scoped>

.settings-page {

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


.settings-section {

    background: white;

    border: 1px solid #d0d5db;

    padding: 20px;

    margin-bottom: 20px;

}


.settings-section h3 {

    margin-top: 0;

    margin-bottom: 20px;

    font-size: 16px;

}


.form-grid {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 18px;

}


.field {

    display: flex;

    flex-direction: column;

    gap: 6px;

}


.field label {

    font-size: 12px;

    font-weight: bold;

}


.field input,
.field select,
.field textarea {

    padding: 9px;

    border: 1px solid #ccc;

    border-radius: 4px;

}


.field textarea {

    min-height: 80px;

    resize: vertical;

}


.full-width {

    grid-column: 1 / -1;

}


.setting-row {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 15px 0;

    border-bottom: 1px solid #eee;

}


.setting-row:last-child {

    border-bottom: none;

}


.setting-row strong {

    font-size: 13px;

}


.setting-row p {

    margin: 5px 0 0;

    color: #777;

    font-size: 12px;

}


.setting-row input {

    width: 18px;

    height: 18px;

}


.actions {

    display: flex;

    justify-content: flex-end;

}


.save-button {

    padding: 9px 18px;

    background: #354a68;

    color: white;

    border: none;

    border-radius: 4px;

    cursor: pointer;

}


@media (max-width: 700px) {

    .form-grid {

        grid-template-columns: 1fr;

    }


    .full-width {

        grid-column: auto;

    }

}

</style>