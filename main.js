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
  const url = "http://mimicServer.example.com";
  const config = {};
  // console.log(likesBtn)
  for (hart of likeHarts) {
    // debugger;
    hart.addEventListener(
      "click",
      mimicServerCall(url, config)
        .then((response) => console.log(response))
        .catch((error) => {
          modal.innerHTML = error;
          modal.classList.remove("hidden");
        })
    );
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  // console.log("hello");
  debugger;
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
