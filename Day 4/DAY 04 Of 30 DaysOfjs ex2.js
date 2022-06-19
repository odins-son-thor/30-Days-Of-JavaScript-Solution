//Q.1 Write a code which can give grades to students according to theirs scores:Write a code which can give grades to students according to theirs scores
let grades = 84
if (grades >= 80){
    console.log("A")
} else if (grades >= 70){
    console.log("B")
} else if (grades >= 60){
    console.log("C")
} else if (grades >= 50){
    console.log("D")
} else if (grades <= 49){
    console.log("F")
}


//Q.2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = "October"
month = month.toLowerCase()
if (month === "september" || month === "october" || month === "november"){
    console.log("The season is Autumn")
} else if (month === "december" || month === "january" || month === "february"){
    console.log("The season is Winter")
} else if (month === "March" || month === "April" || month === "May"){
    console.log("The season is Spring")
} else if(month === "june" || month === "july" || month ==="august" ){ 
    console.log("The season is Summer")
}


//Q.3 Check if a day is weekend day or a working day. Your script will take day as an input.
let day = "TuesDay"
day = day.toLowerCase()
if (day === "monday" || day ===  "tuesday" || day === "wednesday" || day === "thursday" || day === "frieday" ){
    console.log(`${day} is working day`)
} else if (day === "sunday" || day === "saturday"){
    console.log(`${day} is weekend`)
}


