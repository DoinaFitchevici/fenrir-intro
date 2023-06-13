// Create a new date object and store it in a variable named today
const today = new Date();

// Retrieve the current year from your date object and store it in a variable named thisYear
const thisYear = today.getFullYear();

// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
const footer = document.querySelector("footer");

//Create a new paragraph (p) element and store it in a variable named copyright
const copyright = document.createElement("p");

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `Copyright &copy; Doina Fitchevici ${thisYear}`;

// Using "DOM Manipulation", append the copyright element to the footer
footer.appendChild(copyright);
