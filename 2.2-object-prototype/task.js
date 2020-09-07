
String.prototype.isPalindrome = function() { 
    let str = this.replace(/\s/g, '').toLowerCase();
    let j = str.length;

    for (let i = 0; i < str.length; i++) {
        j--;
        if (str[i] == str[j]) {
            if (i == (str.length - 1) && str[i] == str[j]) {
                return true;
            }
        }
        else {
            return false;
        }
    }
}



function getAverageMark(marks) {
    let average; 
    let sum = 0;
    for (let value of marks) {
        sum += value;
    }
    average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}
