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


// Grade Book Scores
function studentScores(num) {
    if (!Array.isArray(num) || num.length === 0) {
        return "Error";
    } else
    
    if (num < 0 || num > 100) {
        return "Invalid";
    }

    // Mean

    let total = 0;
    
    for (let n = 0; n < num.length; n++){
        total += num [n];
    }
    let mean = total / num.length;

    // Min and Max Scores
    let min = Math.min(...num);
    let max = Math.max(...num);

    // Median
    let sorted = [...num].sort((a, b) => a - b); 
    let mid = Math.floor(sorted.length / 2);
    let median;

    if (sorted.length % 2 === 1) {
        median = sorted[mid];
    } else{
        return "invalid" 
    }

    let grades;
    if (mean >= 70) {
        grades = "A";
    } else 
    if (mean >= 60) {
        grades = "B";
    } else
    if (mean >= 50) {
        grades = "C";
    } else
    if (mean >= 45) {
        grades = "D";
    } else {
        grades = "F";
    };

    // Returns

    return{
        mean : mean,
        min : min,
        max : max,
        median : median,
        grades : grades
    }
}

console.log(studentScores([78, 55, 92, 63, 81])); // Output: {    "mean": 73.8,    "min": 55,    "max": 92,    "median": 78,    "grades": "A"}
console.log(studentScores([40, 49, 50, 50, 60])); // Output: {mean: 49.8, min: 40, max: 60, median: 50, grades: 'D'}
 
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