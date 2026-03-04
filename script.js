//global vars
let totalIncome=0;
let rentExpenses=0
let utilitiesExpenses = 0;


//add salary function

function addSalary(){
    let salaryInput = document.getElementById("salaryInput");

    let salary = Number(salaryInput.value);
    console.log(salary)
    console.log(typeof salary)
    totalIncome=salary;
    updateSummary()

}


function addRent(){
    let rentInput=document.getElementById('rentInput')
    let rent = Number(rentInput.value)
    console.log(rent)
    rentExpenses=rent
    updateSummary()
}

function addUtilities(){
    let utilitiesInput = document.getElementById("utilitiesInput")
    let utilities= Number(utilitiesInput.value)
    console.log(utilities)
    utilitiesExpenses= utilities
    updateSummary()
}

function addGroceries(){
    let groceriesInput = document.getElementById("groceriesInput")
    let groceries= Number(groceriesInput.value)
    console.log(groceries)
    groceriesExpenses= groceries
    updateSummary()
}


function updateSummary(){
document.getElementById('totalIncome').innerHTML=totalIncome;
document.getElementById('rentExpenses').innerHTML=rentExpenses;
document.getElementById('utilitiesExpenses').innerHTML=utilitiesExpenses;
document.getElementById('groceriesExpenses').innerHTML=groceriesExpenses;



let yearlyIncome=totalIncome*12;
console.log(yearlyIncome)
document.getElementById("yearlyIncome").innerHTML=yearlyIncome
document.getElementById("yearlyRent").innerHTML=rentExpenses * 12
document.getElementById('yearlyUtilities').innerHTML=utilitiesExpenses *12
document.getElementById('yearlyGroceries').innerHTML=groceriesExpenses*12;
}