// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//selects all buttons and uses a loop to add events and the likeHandler callback function
let buttonList = document.querySelectorAll(`.like-glyph`);
buttonList.forEach(addEventsToList);

function addEventsToList (btn) {
  btn.addEventListener(`click`, likeHandler);
}

//when buttons are clicked calls mimicserverCall, if successful->fills heart, if error->removes .hidden for 3 secs
function likeHandler(event) {
    setTimeout(addHidden, 3000)
    mimicServerCall()
    .then( () => {
      event.target.innerText = FULL_HEART
    })
    .catch(() => {
      const el = document.getElementById('modal');
      el.className=``;
    })
}
function addHidden() {
  const el = document.getElementById('modal');
      el.className=`hidden`;
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
