// /* 
// Truthy:
// 1. true
// 2. any number (+ve, -ve) will be truthy other than 0
// 3. any string other than empty string
// 4. '0', 'false'
// 5. {}
// 6. []


// Falsy:
// 1. false
// 2. 0
// 3. '' (empty string)
// 4. undefined
// 5. null
// */
// // let x = [5, 6];
// // console.log(x);
// // if (x) {
// //   console.log("value of x is truthy");
// // } else {
// //   console.log("value of x is falsy");
// // }

// // // optional
// // // check falsy
// // const y = null;
// // if (!y) {
// //   console.log("value is falsy");
// // }
// // const z = { class: 9 };
// // // check true
// // if (!!x) {
// //   console.log("value is truthy");
// // }

// // function no(a) {
// //   if (a) {
// //     console.log("ok");
// //   } else {
// //     console.log("ok not");
// //   }
// // }
// // no(true);


// // always use ===
// // equal comparison doesnt work for non-primitive

// // const first = [45, 54, 98];
// // const second = [45, 54, 98];
// // if(first === second){
// //     console.log('values are equal')
// // }
// // else{
// //     console.log('values are not equal');
// // }

// // type coercion
// // type conversion
// // type casting


// // function kitchen(){
// //     let roast = 0;
// //     return function(){
// //         roast++;
// //         return roast;
// //     }
// // }

// // const firstServer = kitchen();
// // console.log(firstServer());
// // console.log(firstServer());
// // console.log(firstServer());
// // console.log(firstServer());

function greetData(ok , name) {
    ok(name);
}

function data(name) {
    console.log('hello this is 2nd function' , name)
}

greetData(data , 'yom baba');
greetData(data , 'tom baba');


// array like object
function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);


// primitive types are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);