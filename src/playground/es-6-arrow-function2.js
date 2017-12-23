//arguments object - no longer bound with arrow function

// const add=function(a,b) {
//     console.log(arguments);
//     return a+b;
// }
// console.log(add(55,55,1000));

// const add=(a,b) => {
//     // console.log(arguments);
//     return a+b;
// }
// console.log(add(55,55));


//this keyword -no longer bound

// const user={
//     name:"Niloy",
//     cities:['bally','uttarpara','liluah'],
//     printPlacesLived(){
//         this.cities.forEach((city)=>{
//             console.log(this.name + "has lived in"+ city)
//         })
//     }
// };
// user.printPlacesLived();

//use map

// const user={
//     name:"Niloy",
//     cities:['bally','uttarpara','liluah'],
//     printPlacesLived(){
//        const cityMessage= this.cities.map((city) => {
//         return this.name +" has lived in "+city;
//        });
//        return cityMessage;
//     }
// };
// console.log(user.printPlacesLived());

// const user={
//     name:"Niloy",
//     cities:['bally','uttarpara','liluah'],
//     printPlacesLived(){
//        return this.cities.map((city) => {
//         return this.name +" has lived in "+city;
//        });
//     }
// };
// console.log(user.printPlacesLived());


//challenge area
const multiplier={
    numbers:[1,2,3,4,5,6],
    multiplyBy:10,
    printResult(){
        return this.numbers.map((n) => {
            return this.multiplyBy * n;
        });
    }
};
console.log(multiplier.printResult());