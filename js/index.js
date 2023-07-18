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

// Handle Message Form Submit
// Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm
const messageForm = document.querySelector('form[name="leave_message"]');
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
messageSection.style.display = "none";
// Add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener("submit", function (event) {
  // Inside the callback function, add a new line to prevent the default refreshing behavior of the "submit" event
  event.preventDefault();

  // Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  //   Inside the callback function for your event listener, add a console.log statement to log the three variables
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  // Display Messages in List
  // Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection
  // const messageSection = document.getElementById("messages");

  // Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList
  // const messageList = messageSection.querySelector("ul");

  // Create a new list item (li) element and store it in a variable named newMessage
  const newMessage = document.createElement("li");

  // Set the inner HTML of your newMessage element with the following information:

  /* <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix) 
  <span> element that displays the "message" */
  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span>wrote: ${usersMessage}</span>
  `;

  // Create a new <button> element and store it in a variable named editButton
  // Append the editButton to the newMessage element
  const editButton = document.createElement("button");
  editButton.classList.add("edit_button");
  // Set the inner text to "edit"
  editButton.innerText = "edit";
  // Set the type attribute to "button"
  editButton.type = "button";
  // Add an event listener to the editButton element that handles the "click" event
  editButton.addEventListener("click", function () {
    const new_message_text = prompt("Enter the new message:");
    if (new_message_text !== null) {
      const message_span = newMessage.querySelector("span");
      message_span.textContent = new_message_text;
    }
  });
  // Append the editButton to the newMessage element
  newMessage.appendChild(editButton);

  //   Append the newMessage to the messageList element
  messageList.appendChild(newMessage);

  // Create a new <button> element and store it in a variable named removeButton
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove_button");
  // Set the inner text to "remove"
  removeButton.innerText = "remove";

  // Set the type attribute to "button"
  removeButton.type = "button";

  // Add an event listener to the removeButton element that handles the "click" event
  removeButton.addEventListener("click", function () {
    // Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
    const entry = removeButton.parentNode;

    // Remove the entry element from the DOM (hint: remove method)
    entry.remove();
    // Stretch Goals
    // Hide the #messages section including its header when the list is empty
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    } else {
      messageSection.style.display = "";
    }
  });
  messageSection.style.display = "";
  // Append the removeButton to the newMessage element
  newMessage.appendChild(removeButton);

  // Inside the callback function, add a new line of code to clear the form
  messageForm.reset();
});

// Fetch GitHub Repositories
const githubRequest = new XMLHttpRequest();

githubRequest.open("GET", "https://api.github.com/users/DoinaFitchevici/repos");
githubRequest.send();

// Handle Response from Server

githubRequest.addEventListener("load", (event) => {
  const repositories = JSON.parse(githubRequest.response);
  console.log(repositories);

  // Display Repositories in List
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
  }
});
