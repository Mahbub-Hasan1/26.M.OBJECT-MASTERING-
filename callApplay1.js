const normalParson = {
    firstName: 'korim',
    lastName:'Ahmed',
    selary: 25000,
    fullName: function(){
        this.firstName, this.lastName;
    },
    normalAmunt: function(amount){
        console.log(this);
        this.selary = this.selary - amount;
        return this.selary;
    }
}
// normalParson.normalAmunt(15000);
// console.log(normalParson.selary);
// console.log(normalParson.normalAmunt(5000));
// console.log(normalParson.selary)

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const heroChargeBill = normalParson.normalAmunt.bind(heroPerson);
heroChargeBill(21000);
console.log(heroPerson.salary);