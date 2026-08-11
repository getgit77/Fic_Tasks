<script>
import {ref,computed} from 'vue'
const employeeCode=ref('')

const firstName=ref('')
const lastName=ref('')
const gender=ref('')
const maritualStatus=ref('')
const email=ref('')
const mobile=ref('')

const genders=['male','female']


const fullName=computed(()=>
{
  return `${firstName.value} ${lastName.value}`.trim()
})

function saveEmp(){
  console.log('employee code',employeeCode.value)
  console.log('name',fullName.value)
  console.log('Gender:', gender.value)

  console.log('Marital Status:', maritalStatus.value)

  console.log('Email:', email.value)

  console.log('Mobile:', mobile.value)
}

</script>


<template>

<div class="page">
<h1> hrms</h1>
<section class="personal-details">
<h2> personal details</h2>
<div class="form-grid">
<div class="field">
<label>  
employee code
</label>

<input 
type="text"
v-model="employeeCode"
placeholder="enter employee code"/>


</div>

<div class="field">
  <label>
    first name
  </label>

  <input type="text"
  v-model="firstName"
  placeholder="enter first name"/>


</div>

<div class="field">
  <label>
    last name
  </label>
  <input type="text"
  v-model="lastName"
  placeholder="enter last name"/>
</div>

<div class="field">
  <label>
    father's name 
  </label>
  <input type="text"
  placeholder="enter fathers name"/>

</div>

<div class="field">
  <label>Gender</label>

  <select v-model="gender">
    <option value="">
      select Gender
    </option>
    <option value="Male">
      male
    </option>
    <option value="female">
      female
    </option>
  </select>
</div>

<div class="field">
  <label> 
    maritualStatus
  </label>

  <select v-model="maritualStatus">
    <option value="">
      select maritual status
    </option>
    <option value="single">
      single
    </option>
    <option value="married">
      married
    </option>
  </select>
</div>

<div class="field">
  <select v-model="gender">
    <option value="">
      select gender
    </option>

    <option 
    v-for="item in genders"
    :key="item"
    :value="item"
    >
    {{item}}
  </option>

  </select>
</div>


<div class="field">
  <label>
    employee email
  </label>

  <input type="email"
  v-model="email"
  placeholder="enter mail"
  />
</div>

<div class="field">

  <label>
    Mobile Number
  </label>

  <input
    type="text"
    v-model="mobile"
    placeholder="Enter 10 Digit Mobile Number"
  />

</div>

<p v-if="firstName || lastName">
  entered name:
  <strong>{{fullName}}</strong>
</p>



</div>

<button 
class="save-button"
@click="saveEmp">
save details
</button>

</section>

</div>
</template>


<style>
body{
  margin:0;

}
.page{
background-color: white;
  border: 1px solid #d0d5db;
  padding: 20px;
}

.personal-details{
background-color: olive;
  border: 1px solid #d0d5db;
  padding: 20px;
}

.personal-details h2{
  font-size: 18px;
  margin-top: 0;
}

.form-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}

.field{
  display:flex;
  flex-direction:column;
}
.field label {
  margin-bottom: 6px;
  font-weight: bold;
}


.field input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

@media (min-width:600px){
  .form-grid{
    grid-template-columns:repeat(2,1fr);
    gap:20px;
  }

}

@media(min-width:1024 px){
  .form-grid{
    grid-template-columns:repeat(4,1fr);
  }
}



</style>
