// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

// let likePost = (event) => {
//   debugger;
//   let newHart = event.target
//   // console.log("hello");
// };

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.setAttribute("class", "hidden");

  const likeHarts = document.getElementsByClassName("like-glyph");
  // const url = "http://mimicServer.example.com";
  // const config = {};

  for (hart of likeHarts) {
    // debugger;

    hart.addEventListener("click", callServer);
  }
});

function callServer(event) {
  // debugger;
  let hart = event.target;
  mimicServerCall()
    .then((response) => {
      if (hart.innerText === EMPTY_HEART) {
        hart.innerText = FULL_HEART;
        hart.classList.add("activated-heart");
      } else if (hart.innerText === FULL_HEART) {
        hart.innerText = EMPTY_HEART;
        hart.classList.remove("activated-heart");
      }

      // debugger;
    })
    .catch((error) => {
      modal.innerHTML = error;
      modal.classList.remove("hidden");
      setTimeout(function () {
        modal.setAttribute("class", "hidden");
      }, 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  // console.log("hello");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
