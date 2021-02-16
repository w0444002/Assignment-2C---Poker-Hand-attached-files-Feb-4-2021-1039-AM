let foo = [];
foo.push(25); // methods for putting stuff into an array
//foo [25]
foo.unshift(10);
//foo [10, 25]
foo.splice(1,0, 99);
//foo (3) [10, 99, 25]
foo.push([1,2,3]);
//foo [10, 99, 25, Array(3)];
foo.flat();
//[10, 99, 25, 1, 2, 3] combined nested arrays to one level array immutable

var flatFoo = foo.flat();
flatFoo.forEach(function(number){
    //console.log(number);
})

let fooMap = flatFoo.map(function(number){
    //return {number:number, id:0}
    //console.log(number);
    number += 23
    if(number += 23){
        return{number: 12, message :"Marco"};
    }
    return {number: number, message: "Polo"};
})
console.log(fooMap);

let filted = flatFoo.filter(function(number){
    return number > 40 ;//condition must be true to be added to the array
}) // returns true or false automatically

let reduceFoo = flatFoo.reduce(function(){
let sum = 0;
flatFoo.forEach(function(number){
    sum+=number;
})()
console.log(sum);
})

flatFoo.reduce(function(accumulator, number, index){
    accumulator.x = number; //dot notation
    return accumulator;
    //140
    //{x: 3}
},{}) //iniial or starting value/function/object for first parameter of function
//empty object

flatFoo.reduce(function(accumulator, number, index){
    accumulator["Number" + number.toString() + (index + 1)] = number;
    return accumulator;
}, "") // empty string