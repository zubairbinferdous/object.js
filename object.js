console.log('hello world ******* \n');

// create a object using object literals 
const player = {};            
player.name = 'khan mai';           // property
player.adders = 'Dhaka Bangladesh';
player.bat = function(){            // method 
    console.log('this is the bat'); 
}
player.bat();
console.log(player);

const student = {
    name :"hello it's me",
    job : 'khan job',
    ball : function() {
        console.log('hello');
    },
    salary : 30000
}

console.log(student);

const now = new Object();
const tel = Object.create(student);
const telC = Object.create(student);
console.log(now);
console.log(tel);
console.log(telC.name); // prototype chine 

class person {
    name = "hello it's me";
    job = 'khan job';
    constructor(age){
        this.age = age;
    }
}
const personOne = new person(50);
console.log(personOne);


function Car(model , name){
    this.model = model ;
    this.name = name ;
}
const tesla = new Car('this is car ' , 'zubi car');
console.log(tesla);

