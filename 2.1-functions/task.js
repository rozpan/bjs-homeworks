
function getSolutions(a, b, c) {
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