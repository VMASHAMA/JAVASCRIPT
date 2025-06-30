const form = document.getElementById('chickForm');
//form handling
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.getElementById('farmerName').value.trim();
    const age = Number(document.getElementById('age').value);
    const quantity = Number(document.getElementById('quantity').value);
    const type = document.getElementById('chickType').value;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = "";
    //basic validation 
    if (!name || !type) {
        errorMessage.textContent = 'Please fill out all the fields!';
        return;
    }
    if (age < 20 || age > 30) {
        errorMessage.textContent = 'age must be between 20 and 30';
        return;
    }
    if (quantity < 100 || quantity > 500) {
        errorMessage.textContent = 'quantity should be between 100 and 500';
        return;
    }
    //save to local
    saveToLocalStorage(name,age, type, quantity);



    
    
    addToTable(name, age, type, quantity);
    form.reset();
});


//table handling
function addToTable(name, age, type, quantity) {
   const table = document.getElementById('requestTable').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = type;
    cell4.textContent = quantity;
}























