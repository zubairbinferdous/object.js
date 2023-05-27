const bottle = {
    color: 'red',
    price: 4000,
    clean: true,
    capacity:10,
}

// const key = Object.keys(bottle);
// console.log(key);
// const value = Object.values(bottle);
// console.log(value);
const pair = Object.entries(bottle);
console.log(pair);
console.log(bottle);
delete bottle.clean;
Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 10000;
console.log(bottle);