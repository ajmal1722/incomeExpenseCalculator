// To display total income 
let income = 0;
let totalExpense = 0;
let balance;
function getIncome () {
    const inputCategoryElement = document.querySelector ('.js-income-category');
    const inputCategory = inputCategoryElement.value;

    const inputIncomeElement = document.querySelector('.js-input-income');
    const inputIncome = parseFloat (inputIncomeElement.value);
    
    if (inputIncomeElement.value !== '' && inputCategoryElement.value !== ''){

        const tableBody = document.querySelector('.js-table-income');
        const newRow = tableBody.insertRow();
        const cellCategory = newRow.insertCell(0);
        const cellExpense = newRow.insertCell(1);

        cellCategory.innerHTML = inputCategory;
        cellExpense.innerHTML = inputIncome;

        income = income + inputIncome;

        // balance
        let balance = income;
        balance = balance - totalExpense;
        document.querySelector('.js-balance-display').innerHTML = 
        balance;
    
        document.querySelector('.js-income-display').innerHTML = income;

        updatePieChart (income, totalExpense, income - totalExpense);

        inputIncomeElement.value = '';
        document.querySelector('.js-income-category').value ='';

        // to hide the form validation message
        const displayMessage = document.getElementById('income-display');
        displayMessage.style.display = 'none';
        
        const displayText = document.getElementById('income-category-display');
        displayText.style.display = 'none';
    
    } else if (inputIncomeElement.value === '' && inputCategoryElement.value === '') {
        const displayMessage = document.getElementById('income-display');
        displayMessage.style.display = 'block';
        
        const displayText = document.getElementById('income-category-display');
        displayText.style.display = 'block'
    
    } else if(inputIncomeElement.value === ''){
        const displayMessage = document.getElementById('income-display');
        displayMessage.style.display = 'block';
    
    }else if (inputCategoryElement.value === ''){
        const displayText = document.getElementById('income-category-display');
        displayText.style.display = 'block';
    }  
}


// to display expense table
function getExpense() {
    const inputExpenseElement = document.querySelector('.js-input-expense');
    const inputExpense = parseFloat(inputExpenseElement.value);

    const inputCategoryElement = document.querySelector('.js-input-category');
    const inputCategory = inputCategoryElement.value;

    let totalExpanse = 0;
    if (inputExpenseElement.value !== '') {
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

        // balance
        balance = income - totalExpense;
        document.querySelector('.js-balance-display').innerHTML = 
        balance;

        updatePieChart(income, totalExpense, income - totalExpense)

        // Clear input fields
        inputExpenseElement.value = '';
        inputCategoryElement.value = '';  
    } else if (inputExpenseElement.value === '' && inputCategoryElement.value === '') {
        const displayMessage = document.getElementById('expense-category-display');
        displayMessage.style.display = 'block';
        
        const displayText = document.getElementById('expense-display');
        displayText.style.display = 'block'
    
    } else if (inputExpenseElement.value === ''){
        const displayMessage = document.getElementById('expense-display');
        displayMessage.style.display = 'block';
    
    }else if (inputCategoryElement.value === ''){
        const displayText = document.getElementById('expense-category-display');
        displayText.style.display = 'block';
    }
}

function updatePieChart(a, b, c) {
    const data = {
        labels: ['Income', 'Expense', 'Balance'],
        datasets: [{
            data: [a, b, c],
            backgroundColor: ['#66b3ff', '#ffcc99', '#99ff99'] 
        }]
    };

    const ctx = document.getElementById('pie-chart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Income, Expense, and Balance Pie Chart'
            }
        }
    });
}
updatePieChart(income, totalExpense, income - totalExpense);