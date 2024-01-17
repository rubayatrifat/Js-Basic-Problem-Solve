const userWeight = prompt('What is you weight(kg) ?')
const userHeight = prompt('What is your height(meter) ?')


// Calculate the BMI
const userBMI = userWeight / userHeight ** 2


if(userBMI < 18.5) {
    console.log(`Your BMI is ${userBMI} and You are Underweight`)

} else if(userBMI > 18.5 && userBMI < 24.9) {
    console.log(`Your BMI is ${userBMI} and Your weight is Normal`)

} else if(userBMI > 25 && userBMI < 29.9) {
    console.log(`Your BMI is ${userBMI} and You are Overweight`)

} else if(userBMI > 30 && userBMI < 34.9) {
    console.log(`Your BMI is ${userBMI} and Your weight\'s obesity class i`)

} else if(userBMI > 35 && userBMI < 39.9) {
    console.log(`Your BMI is ${userBMI} and Your weight\'s obesity class ii`)

} else if(userBMI > 40) {
    console.log(`Your BMI is ${userBMI} and Your weight\'s obesity class iii`)
} else {
    console.log('Please Provide correct information')
}
