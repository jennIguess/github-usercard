/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
const jennIguess = axios.get('https://api.github.com/users/jenniguess');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const appendCard = document.querySelector('.cards');
appendCard.appendChild(objFunc(jennIguess));
appendCard.appendChild(getfriendsArray(followersArray));
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan", "https://api.github.com/users/dustinmyers", "https://api.github.com/users/justsml", "https://api.github.com/users/luishrd", "https://api.github.com/users/bigknell"];

function getfriendsArray(arr){
  arr.forEach(follower =>{
    axios.get(follower);
  })
  .then((success) => { 
    objFunc(follower);
  })
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function objFunc(obj){
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const img = document.createElement('img');
  img.src = "https://avatars2.githubusercontent.com/u/64818256?v=4";

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = obj.name;

  const pUsername = document.createElement('p');
  pUsername.classList.add('username');
  pUsername.textContent = obj.login;

const pLocation = document.createElement('p');
pLocation.textContent = `Location: ${obj.location}`;

const pProfile = document.createElement('p');
pProfile.textContent = `Profile: ${obj.url}`;

const pFollowers = document.createElement('p');
pFollowers.textContent = `Followers: ${obj.followers}`;

const pFollowing = document.createElement('p');
pFollowing.textContent = `Following: ${obj.following}`;

const pBio = document.createElement('p');
pBio.textContent = obj.bio;

cardDiv.appendChild(img);
cardDiv.appendChild(cardInfoDiv);
cardInfoDiv.appendChild(h3);
cardInfoDiv.appendChild(pUsername);
cardInfoDiv.appendChild(pLocation);
cardInfoDiv.appendChild(pProfile);
cardInfoDiv.appendChild(pFollowers);
cardInfoDiv.appendChild(pFollowing);
cardInfoDiv.appendChild(pBio);


return cardDiv;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
