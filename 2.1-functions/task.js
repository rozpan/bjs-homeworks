
//задание №1
/* function getSolutions(a, b, c) {
    let D = b * b - 4 * a * c;
    let x1, x2;
    let arrayRoots = new Array();

    if (D < 0) {
        return { D, roots: arrayRoots};
    }
    else if (D == 0) {
        x1 = -b / (2 * a);
        arrayRoots.push(x1);
        return {D, roots: arrayRoots}; 
    }
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        arrayRoots.push(x1, x2);
        return { D, roots: arrayRoots};
    } 
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);  

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]} X₂ = ${result.roots[1]}`);
    }
}
console.log(showSolutionsMessage(2, 4, 2));
*/





//задание №2

function getAverageScore(data) {
    let count = Object.keys(data).length; // количество предметов
    let average;              // средняя оценка по всем предметам
    let arrayMean;            // средняя оценка по предмету
    let sumLessons = 0;       // сумма всех средних оценок по предметам
    let resultsObject = new Object();  // объект для финального результата 

    for (let prop in data) {
        function getAverageMark(marks) {    
            let sum = 0;
            for (let value of marks) {
            sum += value;
            }
            if (sum == 0) {
                return 0;  
            }
            else  {
            arrayMean = sum / marks.length;
            resultsObject[prop] = arrayMean; // добавляю в объект для результатов свойство и значение
            return arrayMean;
            }
        }
        let mean = getAverageMark(data[prop]); //выводим среднюю оценку по предмету
        sumLessons += mean;
    }
    average = sumLessons / count;
    resultsObject[`average`] = average;
    console.log(resultsObject);
}
console.log(getAverageScore({
     algebra: [2, 4, 5, 2, 3, 4],
     geometry: [2, 4, 5],
     russian: [3, 3, 4, 5],
     physics: [5, 5],
     music: [2, 2, 6],
     english: [4, 4, 3],
     poetry: [5, 3, 4],
     chemistry: [2],
     french: [4, 4]
 }));

 /* console.log(getAverageScore({
    algebra: [],
    geometry: [],
    russian: [],
    physics: [],
    music: [],
    english: [],
    poetry: [],
    chemistry: [],
    french: []
}));
*/
 
