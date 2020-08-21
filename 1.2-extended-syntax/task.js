"use strict";

function getResult(a, b, c) {
    //ax2 + bx + c = 0 квадратное уравнение
    //2*x**2 + 4*x - 3 == 0 уравнение Васи
    //D = b2 − 4ac формула дискриминанта
    let resultArr = [];
    let x1, x2; 
    let D = b ** 2 - 4 * a * c; 

    if (D < 0) {
        resultArr; //корней нет, пустой массив
    }
    else if (D == 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;  //один корень в массиве
        resultArr[0] = x1;
    }
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;  //два корня в массиве
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        resultArr[0] = x1;
        resultArr[1] = x2;
    }
    return resultArr;
}



function getAverageMark(marks) {
    let sumRatings = 0; //сумма оценок
    let averageMark; //средняя оценка
    let numberRatings; // количество оценок
 
    if (marks.length == 0) {
        averageMark = 0;
    }
    else { 
        if (marks.length > 5) {
            console.log ("слишком много оценок: " + marks.length);
        }
        marks.splice(5); 
        numberRatings = marks.length;
        for (let i = 0; i < marks.length; i++) {
            sumRatings += marks[i]; 
        } 
        averageMark = sumRatings / numberRatings;  
    } 
    return averageMark;
}


