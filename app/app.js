// add event listener to button on submit
// capture form input and store it in variables
// create li and display input in comments

// set some useful variables
const commentForm = document.querySelector(".comment-form");
const nameInput = commentForm.children[1];
const emailInput = commentForm.children[3];
const textInput = commentForm.children[5];
const date = new Date;
const dateFormat = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

// add event listener to form buttom when submitted
commentForm.addEventListener("submit", function(event) {
    // prevent page from refreshing when form is submitted
    event.preventDefault();
    // if inputs are filled, run the following code
    if(nameInput || emailInput || textInput) {
        // create html elements
        const commentsUl = document.querySelector("#comments");
        const commentContainer = document.createElement("li");
        const userIcon = document.createElement("img");
        const textContent = document.createElement("div");
        const paragraph = document.createElement("p");
        const h5 = document.createElement("h5");

        // set img source and define inner text for h5 and p
        userIcon.src = ("./planted-final-assets/icons8-user-64.png");
        h5.innerText = (`${date.toLocaleDateString(undefined, dateFormat)} by ${nameInput.value}`);
        paragraph.innerText = textInput.value;

        // nest html elements
        textContent.append(h5, paragraph);
        textContent.classList.add("text-container");
        commentContainer.append(userIcon, textContent);

        // append code to existing ul (comments ul)
        commentsUl.append(commentContainer);

        // clear form once submitted
        nameInput.value = "";
        emailInput.value = "";
        textInput.value = "";
    }
});