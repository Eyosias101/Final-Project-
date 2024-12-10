let messageNumber = 0;

// Handle form submission and prevent page reload
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form from refreshing the page
    isEmpty();  // Display the message
    clearDiv();  // Clear the input field
});

// Function to append a positive message with the user's name
var guestMessages = {
    msgs: [],

    // Function to add a positive message with the user's name
    getMessages: function (name) {
        this.msgs.push(name + ", don't worry, you will have a great day! 😊 <br />");
    },

    // Function to display the messages
    printMessages: function (name) {
        this.getMessages(name); // Add personalized message to the array
        let newEntry = document.createElement("div");
        let newText = document.createElement("p");
        newEntry.appendChild(newText);

        // Append message to the correct div on the page (without clearing previous messages)
        let comment = document.querySelector(".allMessages");
        newText.innerHTML = this.msgs[messageNumber];  // Set new message text
        comment.appendChild(newEntry); // Append the new message
        messageNumber++; // Increment message counter
    }
};

// Function to check if message is empty (and display positive message)
var isEmpty = function () {
    var name = document.getElementById("username").value;  // Get user's name
    if (name === '') {
        alert("Enter your name");
    } else {
        guestMessages.printMessages(name);  // Display personalized message
    }
};

// Clear the message input field after submission
var clearDiv = function () {
    document.getElementById("message").value = "";  // Clear input field
};
