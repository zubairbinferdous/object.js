const num = [30 , 40 , 65 , 70 ];
for (const data of num) {
    console.log(data);
}

const bottle = { color: 'red', price: 4000, clean: true, capacity:10 }

const key = Object.keys(bottle);
console.log(key);

// 3 ways find of value 
bottle.color;
bottle['color'];
bottle[key];



for (const data of key) {
    console.log(data , bottle[data]);
}

for (const data in bottle) {
    console.log(data , bottle[data] );
}

const pair = Object.entries(bottle);
console.log(pair);

for (const data of pair) {
    console.log(data);
}

for (const [key , value] of pair) {
    console.log(key , value);
}

for (const data in bottle) {
    console.log(data , bottle[data] );
}