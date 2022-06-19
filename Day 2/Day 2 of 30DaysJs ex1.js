// Q.1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript"

//Q.2 Print the string on the browser console using console.log()
console.log(challenge)

//Q.3 Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Q.4 Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//Q.5 Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//Q.6 Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(4, 10))
console.log(challenge.substring(4,10))

//Q.7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,challenge.length))

//Q.8 Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"))

//Q.9 Split the string into an array using split() method
console.log(challenge.split())

//Q.10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

//Q.11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(","))

//Q.12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"))

//Q.13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

//Q.14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"))

//Q.15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"))

//Q.16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"))

//Q.17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let challenge2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge2.indexOf("because"))

//Q.18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge2.lastIndexOf("because"))

//Q.19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge2.search("because"))

//Q.20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenge3 = '   30 Days Of JavaScript '
console.log(challenge3.trim())

//Q.21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let challenge4 = "30 Days Of JavaScript"
console.log(challenge4.startsWith("30"))

//Q.22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge4.endsWith("Script"))
console.log(challenge4.endsWith("t"))

//Q.23 Use match() method to find all the a’s in 30 Days Of JavaScript
let patter = /a/gi
console.log(challenge4.match(patter))

//Q.24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str1 = '30 Days of'
console.log(str1.concat(" JavaScript"))

//Q.25 Use repeat() method to print 30 Days Of JavaScript 2 times
let str2 = '30 Days Of JavaScript'
console.log(str2.repeat(2))