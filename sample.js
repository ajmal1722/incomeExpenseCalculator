// To display total income 
let income = 0;
let totalExpense = 0;
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
    const result = balance(inputExpense)
        console.log(result)
}


// to display expense table
function getExpense() {
    const inputExpenseElement = document.querySelector('.js-input-expense');
    const inputExpense = parseFloat(inputExpenseElement.value);

    const inputCategoryElement = document.querySelector('.js-input-category');
    const inputCategory = inputCategoryElement.value;

    let totalExpanse = 0;
    if (inputExpenseElement.value !== '' && inputCategoryElement.value !== '') {
        const tableBody = document.querySelector('.js-table');
        const newRow = tableBody.insertRow();
        const cellCategory = newRow.insertCell(0);
        const cellExpense = newRow.insertCell(1);

        // Set the content of the cells with the actual input values
        cellCategory.innerHTML = inputCategory;
        cellExpense.innerHTML = inputExpense;

        // to find the total balance
        totalExpense = totalExpense + inputExpense;
        
        document.querySelector('.js-expense-total').innerHTML = 
        `Total Expense = ${totalExpense}`;

        // Clear input fields
        inputExpenseElement.value = '';
        inputCategoryElement.value = '';
        
        
    }
}




