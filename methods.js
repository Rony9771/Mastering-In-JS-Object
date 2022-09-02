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
  bdayTreat : function (cost,tips){

     this.amount = this.amount -cost -tips;
     return this.amount;

  }

}
const output =student.exam()
const rePut = student.reExam('English')
const dora = student.remaining(3000,100)
const bDay = student.bdayTreat(900,100)
console.log(output);
console.log(rePut);
console.log(dora);
console.log (bDay)