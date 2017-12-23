var nameVar="Bikram";
var nameVar="mike";
console.log("nameVar",nameVar);

let nameLet="Bikram";
nameLet="julie";
console.log("nameLet",nameLet);

const nameConst="gour";
console.log("nameConst",nameConst);

function getPet()
{
    const petName="hi";
    return petName;
}
const petName= getPet();
console.log(petName);


//let and const are Block Scoping

// var fullName="Niloy Sharma";

// if(fullName)
// {
//     var firstName=fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

const fullName="Niloy Sharma";
let firstName;
if(fullName)
{
    // let firstName=fullName.split(' ')[0];
    firstName=fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);