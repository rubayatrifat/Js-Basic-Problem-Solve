const husbandAge = prompt('What older you ?')
const husbandHeight = prompt('What is your height(ft) ?')
const husbandSalary = prompt('How much your salary is ?')


// If husband is ideal
if(husbandAge >= 30 && husbandHeight >= 6 && husbandSalary >= 50000 && husbandSalary < 200000) {
    console.log('Maiya kobul bolar jonno boisa ase')
} else if(husbandSalary > 200000) {
    console.log('Are meye to apnakei chay !')
} else {
    console.log('Vagen eikhan theke apne biyar jonno upojukto nah..')
}