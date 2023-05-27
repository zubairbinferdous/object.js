const student = {
    name :"hello it's me",
    job : 'khan job',
    ball :function() {
        console.log('hello');
    },
    salary : 30000,
    adders : 'dhaka bangladesh',
    subject : ['bangladesh' , 'english' , 'math'],
    exam:function () {
        return this.salary +' THIS IS A GOOD ONE' ;
    },
    improve: function (sub) {
        return `${this.name} is person have a improve ${sub}`
    },
    treat: function (value) {
        this.salary = this.salary - value;
        return this.salary;
    }
}

const ret = student.exam();
console.log(ret);
const xm = student.improve('business , marketing');
console.log(xm);
const salary = student.treat(8000);
console.log(salary);