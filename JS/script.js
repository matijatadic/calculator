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

function operate (operator,a,b){
    //prima dva broja
    //poziva jednu od 4 funkcije nad njima
    switch (operator) {
        case "+":
            return add (a,b);
        case "-":
            return subtract(a,b);
        case "*" :
            return multiply(a,b);
        case "%" :
            if (b===0) {
                return "Error";
            }
            else {
                return divide (a,b);
            }
    }
}