const normalPerson = {
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

const korim = {
    firstName: 'rohim',
    lastName:'borim',
    selary: 25000,
}
const korimBill = normalPerson.normalAmunt.bind(korim);
korimBill(5000);
console.log(korim.selary);