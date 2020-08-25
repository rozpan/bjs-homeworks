"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let loanBody =  amount - contribution; //тело кредита
   
    for (let i = 0; i < (arguments.length - 1); i++) {
        console.log(arguments[i]);
        if (isNaN(arguments[i])) {
            console.log(`параметр ${arguments[i]} содержит неправильное значение NaN`);
            return;
        }
    }

    //считаем разницу дат в месяцах, включая оба месяца
    let data1 = new Date();
    let data2 = new Date(date);
    let year1 = data1.getFullYear();
    let year2 = data2.getFullYear();
    let month1 = data1.getMonth();
    let month2 = data2.getMonth();
    if(month1 === 0) { 
        month1++;
        month2++;
    }
   
    let numberOfMonths = (year2 - year1) * 12 + (month2 - month1) + 1;

    //расчет ежемесячной оплаты
    let P = percent / 100 / 12;
    let monthlyPayment = loanBody * (P + P / (((1 + P) ** numberOfMonths) - 1));
    let totalAmount = monthlyPayment * numberOfMonths + contribution;
    totalAmount = Number(totalAmount.toFixed(2));

    console.log("общая сумма: " + totalAmount);
    return totalAmount;
}



function getGreeting(name) {
    if (!name || Number(name) == 0) {
        name = `Аноним`;
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}