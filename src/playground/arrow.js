//use of map

const user={
        name:"Niloy",
        cities:['bally','uttarpara','liluah'],
        printPlacesLived(){
           const cityMessage= this.cities.map((city) => {
            return this.name +" has lived in "+city;
           });
           return cityMessage;
        }
    };
    console.log(user.printPlacesLived());