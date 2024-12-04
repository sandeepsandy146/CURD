import addEmpInfoToTable from "./functions/index.js";
import { submitButton, empName, designation, age } from "./models/nodes.js";
let employeeDetails = JSON.parse(localStorage.getItem('employeeDetails')) || [];
let edit = false;
let editIndex = "";
employeeDetails.forEach((data) => addEmpInfoToTable(data));
submitButton.addEventListener("click", () => {
  if (empName.value === "" || age.value === "") {
    alert("All fields are mandatory!");
    return;
  } else if (age.value < 20 || age.value > 60) {
    alert("Employee age must be between 20 and 60!");
    return;
  }
  const employeeInfo = {
    empName: empName.value,
    age: age.value,
    designation: designation.value
  };

  if (edit) {
    employeeDetails[editIndex] = { ...employeeInfo };
    edit = false;
    editIndex = "";
  } else {
    employeeDetails.push(employeeInfo);
  }
  localStorage.setItem("employeeDetails", JSON.stringify(employeeDetails));
});

// Edit 
window.editRecord = function (name) {
  const record = employeeDetails.find((emp) => emp.empName === name);
  if (record) {
    empName.value = record.empName;
    age.value = record.age;
    designation.value = record.designation;
    edit = true;
    editIndex = employeeDetails.indexOf(record);
  }
};

// Delete
window.deleteRecord = function (name) {
  const delIndex = employeeDetails.findIndex((emp) => emp.empName === name);
  if (delIndex !== -1) {
    employeeDetails.splice(delIndex, 1);
    localStorage.setItem("employeeDetails", JSON.stringify(employeeDetails));
  }
};
