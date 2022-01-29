const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");
const lookupButton = document.getElementById('lookupButton');

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

lookupButton.addEventListener('click', async function() {
  const guestId = document.getElementById('guestId').value;
  var getGuestLink = `https://ylppqddqm6.execute-api.us-east-2.amazonaws.com/QA/guests?guestId=${guestId}`;
  var mainContainer = document.getElementById('guestData');
  //var div = document.createElement("div");
  console.log(guestId);
  const response = await fetch(getGuestLink);
  const guestDetails = await response.json();

  var plusOne = guestDetails.plusOne;
  var attendeeCount = guestDetails.attendeeCount;

  for (let i=0; i<attendeeCount; i++){
    var div = document.createElement("div");
    div.innerHTML = guestDetails.attendees[i].name;
    mainContainer.appendChild(div);
  }

  /*fetch(getGuestLink)
  .then(function (response){
    return response.json;
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err){
    console.error(err);
  })*/
})

/*
function appendData(data){
  var mainContainer = document.getElementById('guestData');
  var div = document.createElement("div");
  div.innerHTML = data.attendees;
  mainContainer.appendChild(div);
}
*/

window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);

