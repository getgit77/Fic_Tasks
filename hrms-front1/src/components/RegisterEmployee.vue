<script setup>

import { ref, computed } from 'vue'

const employeeCode = ref('')
const firstName = ref('')
const lastName = ref('')
const fathersName = ref('')
const gender = ref('')
const maritalStatus = ref('')
const dateOfBirth = ref('')
const email = ref('')
const mobile = ref('')

const department = ref('')
const designation = ref('')
const joiningDate = ref('')
const employmentType = ref('')
const reportingManager = ref('')
const workLocation = ref('')

const address = ref('')
const city = ref('')
const state = ref('')
const pincode = ref('')
const country = ref('India')

const bankName = ref('')
const accountHolderName = ref('')
const accountNumber = ref('')
const confirmAccountNumber = ref('')
const ifscCode = ref('')
const branch = ref('')

const panNumber = ref('')
const aadhaarNumber = ref('')
const uan = ref('')

const errors = ref({})
const showSummary = ref(false)

const genders = ['Male', 'Female', 'Other']

const departments = [
    'HR',
    'IT',
    'Finance',
    'Sales',
    'Marketing',
    'Operations'
]

const employmentTypes = [
    'Full Time',
    'Part Time',
    'Contract',
    'Intern'
]

const fullName = computed(() => {

    return `${firstName.value} ${lastName.value}`.trim()

})


function validateForm() {

    errors.value = {}

    if (!employeeCode.value.trim()) {
        errors.value.employeeCode = 'Employee code is required'
    }

    if (!firstName.value.trim()) {

        errors.value.firstName = 'First name is required'

    } else if (!/^[A-Za-z ]+$/.test(firstName.value.trim())) {

        errors.value.firstName =
            'First name should contain only letters'

    }

    if (!lastName.value.trim()) {

        errors.value.lastName = 'Last name is required'

    } else if (!/^[A-Za-z ]+$/.test(lastName.value.trim())) {

        errors.value.lastName =
            'Last name should contain only letters'

    }

    if (!fathersName.value.trim()) {

        errors.value.fathersName =
            "Father's name is required"

    } else if (!/^[A-Za-z ]+$/.test(fathersName.value.trim())) {

        errors.value.fathersName =
            "Father's name should contain only letters"

    }

    if (!gender.value) {

        errors.value.gender =
            'Please select gender'

    }

    if (!maritalStatus.value) {

        errors.value.maritalStatus =
            'Please select marital status'

    }

    if (!dateOfBirth.value) {

        errors.value.dateOfBirth =
            'Date of birth is required'

    }

    if (!email.value.trim()) {

        errors.value.email =
            'Email is required'

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    ) {

        errors.value.email =
            'Enter a valid email address'

    }

    if (!mobile.value.trim()) {

        errors.value.mobile =
            'Mobile number is required'

    } else if (!/^\d{10}$/.test(mobile.value.trim())) {

        errors.value.mobile =
            'Mobile number must contain exactly 10 digits'

    }

    if (!department.value) {

        errors.value.department =
            'Please select department'

    }

    if (!designation.value.trim()) {

        errors.value.designation =
            'Designation is required'

    }

    if (!joiningDate.value) {

        errors.value.joiningDate =
            'Joining date is required'

    }

    if (!employmentType.value) {

        errors.value.employmentType =
            'Please select employment type'

    }

    if (!workLocation.value.trim()) {

        errors.value.workLocation =
            'Work location is required'

    }

    if (!address.value.trim()) {

        errors.value.address =
            'Address is required'

    }

    if (!city.value.trim()) {

        errors.value.city =
            'City is required'

    }

    if (!state.value.trim()) {

        errors.value.state =
            'State is required'

    }

    if (!/^\d{6}$/.test(pincode.value.trim())) {

        errors.value.pincode =
            'Pincode must contain exactly 6 digits'

    }

    if (!bankName.value.trim()) {

        errors.value.bankName =
            'Bank name is required'

    }

    if (!accountHolderName.value.trim()) {

        errors.value.accountHolderName =
            'Account holder name is required'

    }

    if (!/^\d{9,18}$/.test(accountNumber.value.trim())) {

        errors.value.accountNumber =
            'Enter a valid account number'

    }

    if (
        confirmAccountNumber.value !==
        accountNumber.value
    ) {

        errors.value.confirmAccountNumber =
            'Account numbers do not match'

    }

    if (
        !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(
            ifscCode.value.trim().toUpperCase()
        )
    ) {

        errors.value.ifscCode =
            'Enter a valid IFSC code'

    }

    if (!branch.value.trim()) {

        errors.value.branch =
            'Branch is required'

    }

    if (
        !/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(
            panNumber.value.trim()
        )
    ) {

        errors.value.panNumber =
            'Enter a valid PAN number'

    }

    if (!/^\d{12}$/.test(aadhaarNumber.value.trim())) {

        errors.value.aadhaarNumber =
            'Aadhaar number must contain 12 digits'

    }

    if (uan.value && !/^\d{12}$/.test(uan.value.trim())) {

        errors.value.uan =
            'UAN must contain 12 digits'

    }

    return Object.keys(errors.value).length === 0

}


async function saveEmp() {

    showSummary.value = false

    if (!validateForm()) {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        return

    }

    const employeeData = {

        employeeCode: employeeCode.value.trim(),
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        fathersName: fathersName.value.trim(),
        gender: gender.value,
        maritalStatus: maritalStatus.value,
        email: email.value.trim(),
        mobile: mobile.value.trim()

    }

    console.log('Sending employee data:', employeeData)

    try {

        const response = await fetch(
            'http://localhost:3000/api/employees',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(employeeData)
            }
        )

        const data = await response.json()

        console.log('Backend response:', data)

        if (response.ok) {

            showSummary.value = true

        } else {

            console.error('Employee save failed:', data)

        }

    } catch (error) {

        console.error('FETCH ERROR:', error)

    }

}


function clearForm() {

    employeeCode.value = ''
    firstName.value = ''
    lastName.value = ''
    fathersName.value = ''
    gender.value = ''
    maritalStatus.value = ''
    dateOfBirth.value = ''
    email.value = ''
    mobile.value = ''

    department.value = ''
    designation.value = ''
    joiningDate.value = ''
    employmentType.value = ''
    reportingManager.value = ''
    workLocation.value = ''

    address.value = ''
    city.value = ''
    state.value = ''
    pincode.value = ''
    country.value = 'India'

    bankName.value = ''
    accountHolderName.value = ''
    accountNumber.value = ''
    confirmAccountNumber.value = ''
    ifscCode.value = ''
    branch.value = ''

    panNumber.value = ''
    aadhaarNumber.value = ''
    uan.value = ''

    errors.value = {}

    showSummary.value = false

}

</script>


<template>

<div class="register-page">


    <div class="page-heading">

        <div>

            <h1>
                Employee Registration
            </h1>

            <p>
                Add a new employee to the HRMS system
            </p>

        </div>

    </div>


    <section class="form-card">


        <div class="section-heading">

            <div class="section-icon">
                <i class="bi bi-person-vcard"></i>
            </div>

            <div>

                <h2>
                    Personal Details
                </h2>

                <p>
                    Enter the employee's basic information
                </p>

            </div>

        </div>


        <div class="form-grid">


            <div class="field">

                <label>
                    Employee Code <span>*</span>
                </label>

                <input
                    v-model="employeeCode"
                    type="text"
                    placeholder="Enter employee code"
                    :class="{ invalid: errors.employeeCode }"
                >

                <small v-if="errors.employeeCode">
                    {{ errors.employeeCode }}
                </small>

            </div>


            <div class="field">

                <label>
                    First Name <span>*</span>
                </label>

                <input
                    v-model="firstName"
                    type="text"
                    placeholder="Enter first name"
                    :class="{ invalid: errors.firstName }"
                >

                <small v-if="errors.firstName">
                    {{ errors.firstName }}
                </small>

            </div>


            <div class="field">

                <label>
                    Last Name <span>*</span>
                </label>

                <input
                    v-model="lastName"
                    type="text"
                    placeholder="Enter last name"
                    :class="{ invalid: errors.lastName }"
                >

                <small v-if="errors.lastName">
                    {{ errors.lastName }}
                </small>

            </div>


            <div class="field">

                <label>
                    Father's Name <span>*</span>
                </label>

                <input
                    v-model="fathersName"
                    type="text"
                    placeholder="Enter father's name"
                    :class="{ invalid: errors.fathersName }"
                >

                <small v-if="errors.fathersName">
                    {{ errors.fathersName }}
                </small>

            </div>


            <div class="field">

                <label>
                    Gender <span>*</span>
                </label>

                <select
                    v-model="gender"
                    :class="{ invalid: errors.gender }"
                >

                    <option value="">
                        Select gender
                    </option>

                    <option
                        v-for="item in genders"
                        :key="item"
                        :value="item"
                    >
                        {{ item }}
                    </option>

                </select>

                <small v-if="errors.gender">
                    {{ errors.gender }}
                </small>

            </div>


            <div class="field">

                <label>
                    Marital Status <span>*</span>
                </label>

                <select
                    v-model="maritalStatus"
                    :class="{ invalid: errors.maritalStatus }"
                >

                    <option value="">
                        Select marital status
                    </option>

                    <option value="Single">
                        Single
                    </option>

                    <option value="Married">
                        Married
                    </option>

                </select>

                <small v-if="errors.maritalStatus">
                    {{ errors.maritalStatus }}
                </small>

            </div>


            <div class="field">

                <label>
                    Date of Birth <span>*</span>
                </label>

                <input
                    v-model="dateOfBirth"
                    type="date"
                    :class="{ invalid: errors.dateOfBirth }"
                >

                <small v-if="errors.dateOfBirth">
                    {{ errors.dateOfBirth }}
                </small>

            </div>


            <div class="field">

                <label>
                    Email <span>*</span>
                </label>

                <input
                    v-model="email"
                    type="email"
                    placeholder="Enter email address"
                    :class="{ invalid: errors.email }"
                >

                <small v-if="errors.email">
                    {{ errors.email }}
                </small>

            </div>


            <div class="field">

                <label>
                    Mobile Number <span>*</span>
                </label>

                <input
                    v-model="mobile"
                    type="text"
                    maxlength="10"
                    placeholder="Enter 10 digit mobile"
                    :class="{ invalid: errors.mobile }"
                >

                <small v-if="errors.mobile">
                    {{ errors.mobile }}
                </small>

            </div>


        </div>


    </section>


    <section class="form-card">


        <div class="section-heading">

            <div class="section-icon">
                <i class="bi bi-briefcase"></i>
            </div>

            <div>

                <h2>
                    Employment Details
                </h2>

                <p>
                    Enter the employee's employment information
                </p>

            </div>

        </div>


        <div class="form-grid">


            <div class="field">

                <label>
                    Department <span>*</span>
                </label>

                <select
                    v-model="department"
                    :class="{ invalid: errors.department }"
                >

                    <option value="">
                        Select department
                    </option>

                    <option
                        v-for="item in departments"
                        :key="item"
                        :value="item"
                    >
                        {{ item }}
                    </option>

                </select>

                <small v-if="errors.department">
                    {{ errors.department }}
                </small>

            </div>


            <div class="field">

                <label>
                    Designation <span>*</span>
                </label>

                <input
                    v-model="designation"
                    type="text"
                    placeholder="Enter designation"
                    :class="{ invalid: errors.designation }"
                >

                <small v-if="errors.designation">
                    {{ errors.designation }}
                </small>

            </div>


            <div class="field">

                <label>
                    Joining Date <span>*</span>
                </label>

                <input
                    v-model="joiningDate"
                    type="date"
                    :class="{ invalid: errors.joiningDate }"
                >

                <small v-if="errors.joiningDate">
                    {{ errors.joiningDate }}
                </small>

            </div>


            <div class="field">

                <label>
                    Employment Type <span>*</span>
                </label>

                <select
                    v-model="employmentType"
                    :class="{ invalid: errors.employmentType }"
                >

                    <option value="">
                        Select employment type
                    </option>

                    <option
                        v-for="item in employmentTypes"
                        :key="item"
                        :value="item"
                    >
                        {{ item }}
                    </option>

                </select>

                <small v-if="errors.employmentType">
                    {{ errors.employmentType }}
                </small>

            </div>


            <div class="field">

                <label>
                    Reporting Manager
                </label>

                <input
                    v-model="reportingManager"
                    type="text"
                    placeholder="Enter reporting manager"
                >

            </div>


            <div class="field">

                <label>
                    Work Location <span>*</span>
                </label>

                <input
                    v-model="workLocation"
                    type="text"
                    placeholder="Enter work location"
                    :class="{ invalid: errors.workLocation }"
                >

                <small v-if="errors.workLocation">
                    {{ errors.workLocation }}
                </small>

            </div>


        </div>


    </section>


    <section class="form-card">


        <div class="section-heading">

            <div class="section-icon">
                <i class="bi bi-house"></i>
            </div>

            <div>

                <h2>
                    Address Details
                </h2>

                <p>
                    Enter the employee's residential address
                </p>

            </div>

        </div>


        <div class="address-grid">


            <div class="field address-field">

                <label>
                    Address <span>*</span>
                </label>

                <textarea
                    v-model="address"
                    placeholder="Enter complete address"
                    :class="{ invalid: errors.address }"
                ></textarea>

                <small v-if="errors.address">
                    {{ errors.address }}
                </small>

            </div>


            <div class="field">

                <label>
                    City <span>*</span>
                </label>

                <input
                    v-model="city"
                    type="text"
                    placeholder="Enter city"
                    :class="{ invalid: errors.city }"
                >

                <small v-if="errors.city">
                    {{ errors.city }}
                </small>

            </div>


            <div class="field">

                <label>
                    State <span>*</span>
                </label>

                <input
                    v-model="state"
                    type="text"
                    placeholder="Enter state"
                    :class="{ invalid: errors.state }"
                >

                <small v-if="errors.state">
                    {{ errors.state }}
                </small>

            </div>


            <div class="field">

                <label>
                    Pincode <span>*</span>
                </label>

                <input
                    v-model="pincode"
                    type="text"
                    maxlength="6"
                    placeholder="Enter pincode"
                    :class="{ invalid: errors.pincode }"
                >

                <small v-if="errors.pincode">
                    {{ errors.pincode }}
                </small>

            </div>


            <div class="field">

                <label>
                    Country
                </label>

                <input
                    v-model="country"
                    type="text"
                    readonly
                >

            </div>


        </div>


    </section>


    <section class="form-card">


        <div class="section-heading">

            <div class="section-icon">
                <i class="bi bi-bank"></i>
            </div>

            <div>

                <h2>
                    Bank Details
                </h2>

                <p>
                    Enter the employee's bank account information
                </p>

            </div>

        </div>


        <div class="form-grid">


            <div class="field">

                <label>
                    Bank Name <span>*</span>
                </label>

                <input
                    v-model="bankName"
                    type="text"
                    placeholder="Enter bank name"
                    :class="{ invalid: errors.bankName }"
                >

                <small v-if="errors.bankName">
                    {{ errors.bankName }}
                </small>

            </div>


            <div class="field">

                <label>
                    Account Holder Name <span>*</span>
                </label>

                <input
                    v-model="accountHolderName"
                    type="text"
                    placeholder="Enter account holder name"
                    :class="{ invalid: errors.accountHolderName }"
                >

                <small v-if="errors.accountHolderName">
                    {{ errors.accountHolderName }}
                </small>

            </div>


            <div class="field">

                <label>
                    Account Number <span>*</span>
                </label>

                <input
                    v-model="accountNumber"
                    type="password"
                    placeholder="Enter account number"
                    :class="{ invalid: errors.accountNumber }"
                >

                <small v-if="errors.accountNumber">
                    {{ errors.accountNumber }}
                </small>

            </div>


            <div class="field">

                <label>
                    Confirm Account Number <span>*</span>
                </label>

                <input
                    v-model="confirmAccountNumber"
                    type="password"
                    placeholder="Confirm account number"
                    :class="{ invalid: errors.confirmAccountNumber }"
                >

                <small v-if="errors.confirmAccountNumber">
                    {{ errors.confirmAccountNumber }}
                </small>

            </div>


            <div class="field">

                <label>
                    IFSC Code <span>*</span>
                </label>

                <input
                    v-model="ifscCode"
                    type="text"
                    maxlength="11"
                    placeholder="Example: SBIN0001234"
                    :class="{ invalid: errors.ifscCode }"
                >

                <small v-if="errors.ifscCode">
                    {{ errors.ifscCode }}
                </small>

            </div>


            <div class="field">

                <label>
                    Branch <span>*</span>
                </label>

                <input
                    v-model="branch"
                    type="text"
                    placeholder="Enter branch"
                    :class="{ invalid: errors.branch }"
                >

                <small v-if="errors.branch">
                    {{ errors.branch }}
                </small>

            </div>


        </div>


    </section>


    <section class="form-card">


        <div class="section-heading">

            <div class="section-icon">
                <i class="bi bi-card-text"></i>
            </div>

            <div>

                <h2>
                    Identification Details
                </h2>

                <p>
                    Enter statutory and identification information
                </p>

            </div>

        </div>


        <div class="form-grid">


            <div class="field">

                <label>
                    PAN Number <span>*</span>
                </label>

                <input
                    v-model="panNumber"
                    type="text"
                    maxlength="10"
                    placeholder="Enter PAN number"
                    :class="{ invalid: errors.panNumber }"
                >

                <small v-if="errors.panNumber">
                    {{ errors.panNumber }}
                </small>

            </div>


            <div class="field">

                <label>
                    Aadhaar Number <span>*</span>
                </label>

                <input
                    v-model="aadhaarNumber"
                    type="text"
                    maxlength="12"
                    placeholder="Enter Aadhaar number"
                    :class="{ invalid: errors.aadhaarNumber }"
                >

                <small v-if="errors.aadhaarNumber">
                    {{ errors.aadhaarNumber }}
                </small>

            </div>


            <div class="field">

                <label>
                    UAN
                </label>

                <input
                    v-model="uan"
                    type="text"
                    maxlength="12"
                    placeholder="Enter UAN"
                    :class="{ invalid: errors.uan }"
                >

                <small v-if="errors.uan">
                    {{ errors.uan }}
                </small>

            </div>


        </div>


    </section>


    <div class="form-actions">


        <button
            class="clear-button"
            @click="clearForm"
        >

            <i class="bi bi-arrow-counterclockwise"></i>

            Clear

        </button>


        <button
            class="save-button"
            @click="saveEmp"
        >

            <i class="bi bi-check-lg"></i>

            Save Employee

        </button>


    </div>


    <section
        v-if="showSummary"
        class="summary-card"
    >

        <div class="summary-heading">

            <i class="bi bi-check-circle-fill"></i>

            <div>

                <h3>
                    Employee Registered Successfully
                </h3>

                <p>
                    Employee information has been saved successfully.
                </p>

            </div>

        </div>


        <div class="summary-grid">

            <div>
                <span>Employee Code</span>
                <strong>{{ employeeCode }}</strong>
            </div>

            <div>
                <span>Name</span>
                <strong>{{ fullName }}</strong>
            </div>

            <div>
                <span>Department</span>
                <strong>{{ department }}</strong>
            </div>

            <div>
                <span>Designation</span>
                <strong>{{ designation }}</strong>
            </div>

            <div>
                <span>Email</span>
                <strong>{{ email }}</strong>
            </div>

            <div>
                <span>Mobile</span>
                <strong>{{ mobile }}</strong>
            </div>

        </div>


    </section>


</div>

</template>


<style scoped>

.register-page {

    min-height: calc(100vh - 55px);

    padding: 28px 32px;

    background: #f4f6f9;

}


.page-heading {

    margin-bottom: 24px;

}


.page-heading h1 {

    margin: 0;

    color: #26364a;

    font-size: 25px;

    font-weight: 600;

}


.page-heading p {

    margin: 7px 0 0;

    color: #7a8491;

    font-size: 13px;

}


.form-card {

    margin-bottom: 20px;

    background: #ffffff;

    border: 1px solid #dfe4ea;

    border-radius: 8px;

    box-shadow: 0 2px 8px rgba(30, 45, 60, 0.05);

    overflow: hidden;

}


.section-heading {

    display: flex;

    align-items: center;

    gap: 13px;

    padding: 19px 24px;

    background: #fbfcfd;

    border-bottom: 1px solid #e7eaee;

}


.section-icon {

    width: 38px;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 6px;

    background: #354a68;

    color: white;

    font-size: 17px;

}


.section-heading h2 {

    margin: 0;

    color: #29394d;

    font-size: 16px;

    font-weight: 600;

}


.section-heading p {

    margin: 4px 0 0;

    color: #89929d;

    font-size: 11px;

}


.form-grid {

    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 20px 22px;

    padding: 24px;

}


.address-grid {

    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 20px 22px;

    padding: 24px;

}


.address-field {

    grid-column: span 2;

}


.field {

    display: flex;

    flex-direction: column;

    min-width: 0;

}


.field label {

    margin-bottom: 7px;

    color: #394858;

    font-size: 12px;

    font-weight: 600;

}


.field label span {

    margin-left: 2px;

    color: #d34b4b;

}


.field input,
.field select,
.field textarea {

    width: 100%;

    border: 1px solid #cfd6de;

    border-radius: 5px;

    background: #ffffff;

    color: #354250;

    font-family: inherit;

    font-size: 12px;

    outline: none;

}


.field input,
.field select {

    height: 39px;

    padding: 0 11px;

}


.field textarea {

    min-height: 78px;

    padding: 10px 11px;

    resize: vertical;

}


.field input::placeholder,
.field textarea::placeholder {

    color: #a4abb3;

}


.field input:focus,
.field select:focus,
.field textarea:focus {

    border-color: #354a68;

    box-shadow: 0 0 0 2px rgba(53, 74, 104, 0.10);

}


.field input.invalid,
.field select.invalid,
.field textarea.invalid {

    border-color: #d34b4b;

    background: #fffafa;

}


.field small {

    margin-top: 5px;

    color: #d34b4b;

    font-size: 10px;

}


.form-actions {

    display: flex;

    justify-content: flex-end;

    gap: 10px;

    margin-bottom: 20px;

    padding: 17px 20px;

    background: white;

    border: 1px solid #dfe4ea;

    border-radius: 8px;

}


.clear-button,
.save-button {

    height: 39px;

    padding: 0 18px;

    border-radius: 5px;

    font-size: 12px;

    font-weight: 500;

    cursor: pointer;

}


.clear-button {

    border: 1px solid #cbd2da;

    background: white;

    color: #56616d;

}


.clear-button:hover {

    background: #f2f4f6;

}


.save-button {

    display: flex;

    align-items: center;

    gap: 7px;

    border: 1px solid #354a68;

    background: #354a68;

    color: white;

}


.save-button:hover {

    background: #2c3e58;

}


.summary-card {

    padding: 22px 24px;

    background: white;

    border: 1px solid #dfe4ea;

    border-radius: 8px;

    box-shadow: 0 2px 8px rgba(30, 45, 60, 0.05);

}


.summary-heading {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 20px;

}


.summary-heading > i {

    color: #2d8a55;

    font-size: 23px;

}


.summary-heading h3 {

    margin: 0;

    color: #29394d;

    font-size: 15px;

}


.summary-heading p {

    margin: 4px 0 0;

    color: #7d8792;

    font-size: 11px;

}


.summary-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 15px;

}


.summary-grid > div {

    padding: 13px;

    border: 1px solid #e3e7eb;

    border-radius: 5px;

    background: #fafbfc;

}


.summary-grid span {

    display: block;

    margin-bottom: 5px;

    color: #7c8792;

    font-size: 10px;

}


.summary-grid strong {

    color: #344456;

    font-size: 12px;

    font-weight: 600;

}


@media (max-width: 1100px) {

    .form-grid,
    .address-grid {

        grid-template-columns: repeat(2, minmax(0, 1fr));

    }

}


@media (max-width: 650px) {

    .register-page {

        padding: 20px 15px;

    }

    .form-grid,
    .address-grid {

        grid-template-columns: 1fr;

    }

    .address-field {

        grid-column: span 1;

    }

    .summary-grid {

        grid-template-columns: 1fr;

    }

    .form-actions {

        flex-direction: column-reverse;

    }

    .clear-button,
    .save-button {

        width: 100%;

        justify-content: center;

    }

}

</style>