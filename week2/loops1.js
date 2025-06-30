/*//for loop ---use when u know exact number of loops
for(initialisation,condition,increament/decreament) {
//code goes here
};

//90 to 100 x = 90 x <100

for ( let x =6; x >=1; x--){
console.log(x);
};
for ( let x =1; x <=12; x++){
console.log(`${x}*${x} = ${x*x}`);
};

const number= 5
for ( let x =1; x <=12; x++){
//console.log(`${x}*${x} = ${x*x}`);
console.log(`${number}*${x} = ${number*x}`);
};*/



/*//while loop ---use when a user will provide the number in prompt
//initialisation (let x = 1)
while(condition){
//code goes here
//increament/decreament
}
let x = 0;
while (x<6){
    console.log(x);
    x++;
}

let password;
const correctPassword = "vero123";
while (password !== correctPassword){
    password = prompt ("Enter your password");
}
alert("Access granted");*/


/*//do while loop  ---runs once ---asks questions after
//initialisation
do{
//code goes here
//increament/decreament
}while(condition)*/
let y = 0;
do {
    console.log(y);
    y++;
}while (y<=5);