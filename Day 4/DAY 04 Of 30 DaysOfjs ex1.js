//Q.1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let inputAge = prompt("Enter your age:")
 let inputAge = 16
if (inputAge > 18){
    console.log("YOu are old enough to drive")
} else{
    let leftYears = 18 - inputAge;
    console.log(`You are left with ${leftYears} years to drive.`)
}


//Q.2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let inputAge2 = prompt("Enter your age: ")
let myAge = 30;
let yourAge = 35;
if (myAge > yourAge) {
 let ageDifference = myAge - yourAge
 console.log(`I am ${ageDifference} years older than you.`)
} else{
 let ageDifference2 = yourAge - myAge;
 console.log(`You are ${ageDifference2} years older than me.`)
}

//Q.3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
if (a > b){
 console.log(`${a} is greater than ${b}`)
} else{
 console.log(`${b} is greater than ${a}`)
}
a > b
?console.log(`${a} is greater than ${b}`)
 : console.log(`${b} is greater than ${a}`)

//Q.4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//let numberInput = prompt("Enter a number: ")
let numberInput = 5
if (numberInput%2 === 0){
 console.log(`${numberInput} is a even number.`)
} else{
 console.log(`${numberInput} is an odd number.`)
}

