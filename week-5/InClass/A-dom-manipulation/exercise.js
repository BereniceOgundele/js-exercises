/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let allPTags = document.querySelectorAll("p");

console.log(allPTags);

let divElement = document.querySelector("div");

console.log(divElement);

// let jumbotron = document.querySelector("#jumbotron-text");
let idTest = "jumbotron-text"
let jumbotron = document.getElementById(idTest);
console.log("hello",jumbotron);

let primaryContent = document.querySelectorAll(".primary-content p");
console.log(primaryContent);

for(let i = 0; i < primaryContent.length; i++) {
    console.log(primaryContent[i])
}
//for each array method
primaryContent.forEach(item => console.log(item));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/