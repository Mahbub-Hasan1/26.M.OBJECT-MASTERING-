const normalParson = {
    firstName: 'korim',
    lastName:'Ahmed',
    selary: 25000,
    fullName: function(){
        this.firstName, this.lastName;
    },
    normalAmunt: function(amount){
        this.selary = this.selary - amount;
        return this.selary;
    }
}
normalParson.normalAmunt(15000);
console.log(normalParson.selary);
// console.log(normalParson.normalAmunt(5000));
// console.log(normalParson.selary)