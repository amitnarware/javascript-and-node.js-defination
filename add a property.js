// using prototype property

function Car(carname,price){
   this.carname = carname,
      this.price= price
}
const myCar = new Car("corola",50000)

Car.prototype.company = "",
Car.prototype.model =""

myCar.company = "toyota",
myCar.model= 'w7'
console.log(myCar.company);
console.log(myCar.model);
