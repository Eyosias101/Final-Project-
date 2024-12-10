let timVine = document.getElementById("tim-vine");
let messageNumber = 0;

let navbar = document.getElementById("main-nav");
let header = document.querySelector("#header");  // Define header element
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});

String.prototype.isEmpty = function(){
  return (this.length === 0 || !this.trim());
};

var guestMessages = {
  msgs: [],

  getMessages: function(msg){
    this.msgs.push(msg + "<br />");  // Add message with line break
  },

  printMessages: function(msg){
    guestMessages.getMessages(msg);  // Pass message to getMessages
    let newEntry = document.createElement("div");
    let newtext = document.createElement("p");
    newEntry.appendChild(newtext);
    let comment = document.querySelector("#entries");
    comment.appendChild(newEntry);
    newtext.innerHTML = this.msgs[messageNumber];
    messageNumber++;  // Increment after appending
    console.log("message added");
  }
};

var getEntry = function(){
  return document.getElementById("content").value;  // Get the value of the input field
};

var clearDiv = function(){
  document.getElementById("content").value = "";  // Clear input field
};

var isEmpty = function(){
  let entry = getEntry();  // Get the value from the input
  if (entry === '') {
    alert("Enter a message");
  } else {
    guestMessages.printMessages(entry);  // Pass entry to printMessages
  }
};
