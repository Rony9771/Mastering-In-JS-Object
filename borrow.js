const student = {
  name : 'Rony',
  Dept : 'CSE',
  subject : 'Data Structure',
  amount : 10000,
  exam : function (){
    return this.name +' '+'participating in exam'
  },

  reExam :function(sub){
    this.exam()
    return `${this.name} is taking Re-exam on ${sub} `
  },
  remaining :function (cost,tips) {
    this.amount = this.amount -cost -tips;
    return this.amount;

  },
}

const student2 = {
  name : 'NadamAli'
}

const result = student.exam.call(student2);
console.log(result);
const result2 = student.remaining.apply (student2, [400,300])
console.log (result2)

const result3 = student.remaining.bind(student2);
const remaining =(1000,1000);
console.log(result3)