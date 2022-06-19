// Write your solution in this file!
const employee = {
    name: "Howard",
    streetAddress: "123 Main",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    console.log(employee)
    console.log(key)
    console.log(value)
    const updatedEmployee = { ...employee, ...{ [key]: value } }
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    console.log(employee)
    console.log(key)
    console.log(value)
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key, value) {
    const updatedEmployee = { ...employee, ...{ [key]: value } }
    delete employee.key
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key] 
    return employee
}