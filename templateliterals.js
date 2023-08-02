function modifier(strings,...values){
    console.log(strings)
    console.log(values)
}

var player1 = "shakib"
var player2 = "tamim"

console.log(modifier` we have ${player1} and ${player2} in our team`)

//rest operator
// function sum(...args){
//     let sum = 0;
//     for(let arg of args){
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10))