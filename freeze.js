
const student = { name: 'Rony', age: 25, isDeveloper:'true', hair: 'curly'}

// const keys = Object.keys(student)
// console.log (keys)

// const values = Object.values(student)
// console.log(values)

// const pair = Object.entries(student);
// console.log(pair)
Object.seal(student) // you can't remove keys and values but you can modify
Object.freeze(student) // you can't change anything from object
student.age = 26;
delete student.age // remove age from object
console.log(student)