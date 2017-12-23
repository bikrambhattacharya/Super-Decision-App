class Person 
{
    constructor(name="Anonymous",age=0)
    {
        this.name=name;
        this.age=age
    }
    getGretting()
    {
        return `Hi I am ${this.name}! and I am ${this.age} years old`;
    }
}
class Student extends Person
{
    constructor(name,age,major=undefined)
    {
        super(name,age);
        this.major=major;
    }
    hasMajor()
    {
        return !!this.major;
    }
    getGretting()
    {
        let description= super.getGretting();
        if(this.hasMajor())
        {
            description+=`Their major is ${this.major}`;
        }
        return description;
    }
}
class Traveler extends Person{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasHome()
    {
        return !!this.homeLocation;
    }
    getGretting()
    {
        let description=super.getGretting();
        if(this.hasHome())
        {
            description+=` My Home loction is ${this.homeLocation}`;
        }
        return description;
    }
}

const me=new Student("Bikram Bhattacharya",22,"Computer Science");
console.log(me.getGretting());

const own=new Traveler("Gour Mohan Bhattacharya",58,"bally");
console.log(own.getGretting()) ;