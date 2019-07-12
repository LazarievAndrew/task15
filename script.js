// Четные числа.
// Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе.


function isNumeric(x){
    return !isNaN(parseFloat(x)) && isFinite(x);
}


do {
    var number = +prompt('Введите корректное число:');
} while (!isNumeric(number) || !number);

function getNumberOfEven(n){
    n = String(n); // либо n += '';
    var even = 0;
    for ( var i = 0; i < n.length; i++){
        if (!(n.charAt(i) % 2)) {
            even++;
        }
    }
    return even;
}

alert('Количество четных цифр в числе: ' + getNumberOfEven(number));