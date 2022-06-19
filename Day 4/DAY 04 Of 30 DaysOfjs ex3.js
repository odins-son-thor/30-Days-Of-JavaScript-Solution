//Q.1 Write a program which tells the number of days in a month consider leap year..
let monthName = "february"
monthName = monthName.toLowerCase()

if (monthName === "january" ||  monthName == "march" ||  monthName === "may" ||  monthName === 'july' || monthName === "august" || monthName === "october" || monthName === "december"){
    console.log("31 days")
} else if(monthName === "february"){
  let year = prompt("Which year is this?")
    if (year % 4 === 0 ){
        if (year % 100 === 0 && year % 400 === 0) {
          console.log("29 days")
        }else{
          console.log("28 days")
        }
    } else {
        console.log("28 days")
    }
} else if (monthName === "april" || monthName === "june" || monthName === "september" || monthName === "november"){
    console.log("31 days")
}