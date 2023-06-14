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

// Create List of Skills
// Open your index.js file
// List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ["JavaScript", "HTML", "CSS", "React"];

// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
const skillsSection = document.getElementById("skills");

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
const skillsList = skillsSection.querySelector("ul");

// Create a for loop to iterate over your skills Array, starting at index 0
//  Inside the loop, create a new list item (li) element and store it in a variable named skill
// On the next line, set the inner text of your skill variable to the value of the current Array element
// On the next line, append the skill element to the skillsList element

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Save and refresh your browser
// You should see your list of skills beneath the "Skills" heading
