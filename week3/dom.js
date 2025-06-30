//console.log(document);
    //console.log(window);

    //dom method
  // console.log(document.body);
 // getElementById(); //selects elent by id
 // getElementByClassName(); //selects element by class
  //getElementByTagName();
 // querySelector(); //selects the first matching css class
  //it can be used for ids and tags
 // querySelectorAll(); //selects all matching elements

 // const allTitles = document.getElementsByClassName("h1");
  //console.log(allTitles.length);
  //const firstTitle = document.getElementById("heading1");
 // console.log(firstTitle);
 const allTitle = document.querySelectorAll('h1');
allTitle [3].className = "title";
allTitle[3].textContent = "This is the fouth heading";
allTitle[2].style.fontSize = '100px';
allTitle[0].style.color = 'blue';