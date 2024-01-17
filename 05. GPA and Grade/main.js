// whats the mark of user
let examMark = prompt('Please provide Exam Mark')
// what quota user have
let quota = confirm('If you have Freedomfiter quota')
// let for fail mark
let passMark
// user GPA
let gpa
// user grade
let grade

// Set Fail Mark
if (quota === true) {
    passMark = 20
} else {
    passMark = 33
}


// Define the grade and gpa of user
if (examMark >= 80 && examMark <= 100) {
    gpa = '5'
    grade = 'A+'
} else if (examMark >= 70 && examMark <= 79) {
    gpa = '4'
    grade = 'A'
} else if (examMark >= 60 && examMark <= 69) {
    gpa = '3.5'
    grade = 'A-'
} else if (examMark >= 50 && examMark <= 59) {
    gpa = '3'
    grade = 'B'
} else if (examMark >= 40 && examMark <= 49) {
    gpa = '2'
    grade = 'C'
} else if (examMark >= passMark && examMark <= 39) {
    gpa = '1'
    grade = 'D'
} else if (examMark < passMark && examMark >= 0) {
    gpa = '0'
    grade = 'F'
} else {
    console.log('Please Provide a valid exam mark please !')
}

console.log( `
    Exam Mark: ${examMark}
    GPA: ${gpa}
    Grade: ${grade}
`)