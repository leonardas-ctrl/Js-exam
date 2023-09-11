/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.querySelector("#output");
const button = document.querySelector("#btn");

button.addEventListener("click", getPosts);

async function getPosts() {
  const response = await fetch(ENDPOINT);
  try {
    if (response.ok) {
      const posts = await response.json();
      output.innerHTML = "";
      posts.forEach((post) => {
        displayPosts(post);
      });
    } else {
      console.log("shit happens");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayPosts(post) {
  const card = document.createElement("div");
  card.className = "card";
  const login = document.createElement("h2");
  login.className = "login";
  login.textContent = post.login;
  const avatar = document.createElement("img");
  avatar.src = post.avatar_url;
  avatar.className = "avatar";
  card.append(login, avatar);
  output.append(card);
}
