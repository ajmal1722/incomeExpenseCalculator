function getIncome (){

    const inputIncomeElement = document.querySelector('.js-input-income');
    let inputIncome = inputIncomeElement.value;
    
    console.log (inputIncome);

    document.querySelector ('.js-display-income').innerHTML = ` $ ${inputIncome}`;
}