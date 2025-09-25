// Prime Number Heler
let i = 2;
function isPrime(num) {
    if (num > i && num % i === 0){
        return false;
    }
    
    return true;
    
}

console.log(isPrime(2));
console.log(isPrime(5));

/* function inRangePrime(a, b) {

} */

// debugger
// Password Strength meter
var password = 0
function passwordMeter(password) {
    if (password.length >= 20){
        return "Very Strong";
    } else

    if (password.length >= 15){
        return "Strong";
    } else

    if (password.length >= 10){
        return "Medium";
    } else

    if (password.length >= 6){
        return "Weak";
    } else {

        return "Very Weak";
    }
}

console.log(passwordMeter("Lightnight"));
 
// x and o 

                                                        /* const winConditions = [
                                                            [0, 1, 2],
                                                            [3, 4, 5],
                                                            [6, 7, 8],
                                                            [0, 3, 6],
                                                            [1, 4, 7],
                                                            [2, 5, 8],
                                                            [0, 4, 8],
                                                            [2, 4, 6],
                                                        ]; */
//     [i, ii, iii],
//     [iv, v, vi],
//     [vii, viii, ix],
//     [i, iv, vii],
//     [ii, v, viii],
//     [iii, vi, ix],
//     [i, v, ix],
//     [iii, v, vii],


/* let count = 0; // Global Count
function xoGame(game) {
    switch(game){
        case "x":
            count++;
            break;
        
        case "o":
            count--;
            break;        
    }

    let Game = ""
    if (count = 3) {
        Game = "O Wins"
    }

    if (count < -3) {
        game
    }



    return "loss"
} */
/*
var countX = 0, countO = 0;
function xoGame(game){
    switch(game){
        case "x":
            countX++;
            break;
        case "o":
            countO++;
            break;
    }

    if (countX == 3 && countO <= 3){
        game = "X wins";
    } else

    if (countO == 3 && countX <= 3){
        game = "O wins"
    } else 

    if (countX != )
} 
// Password check
// let password = console.log() */