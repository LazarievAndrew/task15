var number;

do {
    number = prompt('Введите любое число:')
} while (isNaN(parseInt(number)) || !isFinite(number))

function getNumberOfEven(n){
    var even = 0;
    for ( var i = 0; i < n.length; i++){
        if (n.charAt(i) % 2 === 0){
            even++;
        }
    }
    alert('Количество четных цифр в числе: ' + even);
}

getNumberOfEven(number);