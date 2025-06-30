//browser storage usualy for coookies etc limit of 5mbs
//localStorage  --stores data forever till u delete it manually
localStorage.setItem('name', 'vero'); //set item
localStorage.getItem('name'); //get item rerieving from database
localStorage.clear(); //clear all items
localStorage.removeItem('name'); //remove specific item

let user = {
    name : 'vero',
    age : 40
}

localStorage.setItem('user', JSON.stringify(user)); //store or saving or sending data
let data = JSON.parse(localStorage.getItem('user')); //retrieve or get data

//sessionStorage --stores data in an open tab, deletes when u close
sessionStorage.setItem('name', 'vero');
//cookies
//indexDatabase

//JSON.stringify(localStorage); //CONVERT local storage to JSON string