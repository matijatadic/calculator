let displayCurrent = document.querySelector('#displayActive');
let numbers = document.querySelectorAll(".numberKeys");
let clickNumber = document.querySelectorAll("#keynumber");


displayCurrent.textContent='';

console.log(numbers);


numbers.forEach(button => button.addEventListener ('click', populateDisplay));


//funkcije za racunske operacije
function add(a,b) {
    return a+b;
};

function subtract (a,b) {
    return a-b;
};

function multiply (a,b) {
    return a*b;
};

function divide (a,b) {
    return a/b;
};

//funkcija koja poziva funkcije za racunske operacije
//ovisno o odabranom operatoru
function operate (operator,a,b){
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*' :
            return multiply(a,b);
            break;
        case '/' :
            if (b===0) {
                return 'Error';
            }
            else {
                return divide(a,b);
            }
            break;
    };
};

function numpad (numberKey) {
    return numberKey.textContent;
};



//funkcija za popunjavanje displaya
//sprema odabrane znamenke i operatore
//unutar display elementa i sprema
//vrijednosti za daljnu upotrebu
function populateDisplay () {
    //funkcija prima brojeve i racunske operatore
    //mjenja display varijablu naredbom textContent/innerHTML
    numpad (numberKey);
    displayCurrent.textContent += numpad(numberKey);
    


}
