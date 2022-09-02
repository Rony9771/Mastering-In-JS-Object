const num1 = {a:5}
const num2 = {a:5}

// this method doesn't work properly for object
if (num1 == num2){
  console.log ('They are same')
}

else{
  console.log('They are not same')
}

// shortcut solution but this method does'nt work if order is different
const num3 = {a:5, b:2}
const num4 = {a:5, b:2}

const num1String = JSON.stringify(num3)
const num2String =JSON.stringify(num4)
//console.log(num1String,num2String)

if (num1String === num2String){
  console.log ('Same')
}

else{
  console.log('Not same')
}

//chnage order
const num5 = {a:5, b:2}
const num6 = {b:2, a:5}

const num5String = JSON.stringify(num5)
const num6String =JSON.stringify(num6)
//console.log(num1String,num2String)

if (num5String === num6String){
  console.log ('Same')
}

else{
  console.log('Not same')
}