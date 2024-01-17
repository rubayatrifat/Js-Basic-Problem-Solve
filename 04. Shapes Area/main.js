const whatShape = prompt('What shape\'s area you want to figure out?, and please use this keywords "Square", "Rectangular", "Triangle", "Circle" Only')

let theArea
let height
let width 
let radius
let base

const squ = "Square"
const rect = "Rectangular"
const tri = "Triangle"  
const cir = "Circle"  

// Condition for calculate area
if(whatShape === squ) {
    height = prompt(`Give your ${squ}'s height or width?`)

    // Calculation for giving area
    theArea = height ** 2
    // Main Result
    console.log(`${theArea} is the area of your ${squ}, Thanks for using this site `)

}

// Condition for calculate area
if(whatShape === rect) {
    height = prompt(`Give your ${rect}'s length`)
    width = prompt(`Give your ${rect}'s width`)

    // Calculation for giving area
    theArea = height * width
    // Main Result
    console.log(`${theArea} is the area of your ${rect} , Thanks for using this site `)

}

// Condition for calculate area
if(whatShape === tri) {
    height = prompt(`Give your ${tri}'s height`)
    base = prompt(`Give your ${tri}'s base length`)

    // Calculation for giving area
    theArea = (height * base) / 2
    // Main Result
    console.log(`${theArea} is the area of your ${tri} , Thanks for using this site `)

}

// Condition for calculate area
if(whatShape === cir) {
    radius = prompt(`Give your ${cir}'s radius`)

    // Calculation for giving area
    theArea = 3.14 * radius ** 2
    // Main Result
    console.log(`${theArea} is the area of your ${cir} , Thanks for using this site `)

}

// If the the all keywords are not same with the provided keyword of user
if(whatShape !== squ && whatShape !== rect && whatShape !== tri && whatShape !== cir) {
    console.log("Please provide the defined keywords only")
}