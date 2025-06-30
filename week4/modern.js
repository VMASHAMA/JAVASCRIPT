let farmer = {
    name : "Vero",
    age : 23,
    location : "kampala",
    requestChicks : function (quantity){
        return this.name + "requested" + quantity + "chicks";
    }
}
//module.export = farmer ;
export default farmer;