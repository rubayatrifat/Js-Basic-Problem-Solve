const whatCurrency = prompt('What currency you\'ll change to TK, and please use this keywords "Dollar", "Euro", "Pound" Only')

let howMuch
let convertedToTk 

const dollar = "Dollar"
const euro = "Euro"
const pound = "Pound"

// Condition for converting to dollar
if(whatCurrency === dollar) {
    howMuch = prompt(`How many ${dollar} do you want to convert to Tk?`)

    // Calculation for converting into TK
    convertedToTk = howMuch * 109.77
    // Converted Result
    console.log(`${howMuch} ${dollar} have been converted to ${convertedToTk}TK, Thanks for using this site `)

}

// Condition for converting to euro
if(whatCurrency === euro) {
    howMuch = prompt(`How many ${euro} do you want to convert to Tk?`)

    // Calculation for converting into TK
    convertedToTk = howMuch * 119.46
    // Converted Result
    console.log(`${howMuch} ${euro} have been converted to ${convertedToTk}TK, Thanks for using this site `)

}

// Condition for converting to pound
if(whatCurrency === pound) {
    howMuch = prompt(`How many ${pound} do you want to convert to Tk?`)

    // Calculation for converting into TK
    convertedToTk = howMuch * 138.96
    // Converted Result
    console.log(`${howMuch} ${pound} have been converted to ${convertedToTk}TK, Thanks for using this site `)

}

// If the the all keywords are not same with the provided keyword of user
if(whatCurrency !== dollar && whatCurrency !== euro && whatCurrency !== pound) {
    console.log("Please provide the defined keywords only")
}