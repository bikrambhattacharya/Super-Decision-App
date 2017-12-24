const obj={
    name:"Bikram",
    getname()
    {
        return this.name;
    },


};
const getname=obj.getname.bind(obj);
console.log(getname());