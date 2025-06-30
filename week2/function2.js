/*function greetFarmer() {
    console.log("Hello, Welcome To Young For Chicks");
}
greetFarmer();*/

function submitRequest() {
    console.log("Your chick request has been submitted");
}
submitRequest();

//parameters and arguments
function calculateTotalCost (quantity,pricePerChick){
    return quantity*pricePerChick
}
calculateTotalCost(100, 1659);
calculateTotalCost(10, 1659);
calculateTotalCost(890, 1659);
//let total = calculateTotalCost(100, 1659);
//console.log(total);
console.log(calculateTotalCost(100, 1659));

//return demonstration, if statements
function getApprovalStatus(requestedCchicks){
        if (requestedCchicks <= 500){
            return "Approved";
        }else {
            return "Regected";
        }
      }
let status = getApprovalStatus(300);
console.log("Request Status: " + status);


/*function greetFarmer(farmerName) {
    console.log("Hello" +" " + farmerName + " " + "Welcome To Young For Chicks");
}
greetFarmer("Nemie");
greetFarmer("Vero");
greetFarmer("Olive");*/

//anonymous function

/*let greetFarmer = function(farmerName) {
    console.log("Hello" +" " + farmerName + " " + "Welcome To Young For Chicks");
}
greetFarmer("Nemie");
greetFarmer("Vero");
greetFarmer("Olive");*/

//arrow function
let greetFarmer= (farmerName) =>console.log("Hello" +" " + farmerName + " " + "Welcome To Young For Chicks");

greetFarmer("Nemie");
greetFarmer("Vero");
greetFarmer("Olive");

function processTheMoney (callBack){
    callBack()
}
processTheMoney(function(){
    console.log("Colleagues, the money is coming");
});

function clientLocation (clientName){
    return function (){
        console.log("hello" + " " + clientName + "" + "Welcome to Kampala");
    }
}
let location= clientLocation("Vero");
location();