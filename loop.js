const students = { name: 'Rony', age: 25, isDeveloper:'true', hair: 'curly'}


//direct for of loop doesn't work in object
// for (const student of students ){
//   console.log (student)
// }

const keys =Object.keys(students);

for (const key of keys){
  //console.log(key, students[key])
}

// we can use for in loop direcrly

for ( const key in students){
  //console.log(key,students[key])
}

//advanced
//  const pair = Object.entries(students)
//  console.log(pair)

 for (const [key,value] of Object.entries(students)){
  console.log (key,value)

 }