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