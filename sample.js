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
let income = 0;
function getIncome () {
    const inputIncomeElement = document.querySelector('.js-input-income');
    const inputIncome = parseFloat (inputIncomeElement.value);
    if (inputIncomeElement.value !== ''){
        income = income + inputIncome;
    
    document.querySelector('.js-income-display').innerHTML = income;
    inputIncomeElement.value = '';
    document.querySelector('.js-income-category').value ='';
    } else {
        alert ('Enter a proper Income amount');
    }
}


// to display expense table
function getExpense() {
    const inputExpenseElement = document.querySelector('.js-input-expense');
    const inputExpense = parseFloat(inputExpenseElement.value);

    const inputCategoryElement = document.querySelector('.js-input-category');
    const inputCategory = inputCategoryElement.value;

    if (inputExpenseElement.value !== '' && inputCategoryElement.value !== '') {
        const tableBody = document.querySelector('.js-table');
        const newRow = tableBody.insertRow();
        const cellCategory = newRow.insertCell(0);
        const cellExpense = newRow.insertCell(1);

        // Set the content of the cells with the actual input values
        cellCategory.innerHTML = inputCategory;
        cellExpense.innerHTML = inputExpense;

        // Clear input fields
        inputExpenseElement.value = '';
        inputCategoryElement.value = '';

        console.log(inputCategory);
    }
}
