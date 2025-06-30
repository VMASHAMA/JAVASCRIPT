let farmer = {
    name : "Vero Mashama",
    age : 23,
    isRegistered : true,
    greetFarmer : function() {
        console.log("welcome" + " " + this.name + " " + "!!")
    },
    chickRequest : function(quantity){
        console.log(this.name + " " + "requested for" + " " + quantity + " " + "chicks")
    },
}
console.log(farmer.age);
farmer.greetFarmer();
farmer.chickRequest();
console.log(farmer.isRegistered);





// data types conversion
 let d = new Date();
 console.log(d)
  console.log(String(d))