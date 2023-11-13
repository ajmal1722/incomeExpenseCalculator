// function addIncome (){

//     const inputIncomeElement = document.querySelector('.js-input-income');
//     let inputIncome = inputIncomeElement.value;
    
//     console.log (inputIncome);
//     inputIncomeElement.value = ''
//     document.querySelector ('.js-display-income').innerHTML = ` $ ${inputIncome}`;
// }

// const expenseList = [];

// renderExpense();

// function renderExpense (){
//     expenseHTML = '';
//     for (let i = 0; i < expenseList.length; i++) {
//         const expense = expenseList[i];
//         const html = `<div>${expenseList}</div>`
//         expenseHTML += html;
//     }

//     document.querySelector('.js-display-expense').innerHTML = expenseHTML;
// }
// function addExpense () {
//     const inputExpenseElement = document.querySelector('.js-input-expense');
//     const inputExpense = inputExpenseElement.value;
    
//     expenseList.push (inputExpense);
//     inputExpenseElement.value = '';
//     // expenseList.push(expense);
//     // document.querySelector('.js-display-expense').innerHTML = `<p>${expenseList}</p>`;
//         // console.log (expenseList); 
//     renderExpense();
// }


// To display total income 
let income1 = 0;
let income = parseFloat(income1)
function getIncome () {
    const inputIncomeElement = document.querySelector('.js-input-income');
    const inputIncome = parseFloat (inputIncomeElement.value);
    if (inputIncomeElement.value !== ''){
        income = income + inputIncome;
    
    document.querySelector('.js-income-display').innerHTML = income;
    inputIncomeElement.value = '';
    } else {
        alert ('Enter a proper Income amount');
    }
}
