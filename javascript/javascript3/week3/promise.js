// Fetch github repos using promises
function getData(data) {
  const ul = document.createElement("ul");
  ul.innerHTML = data.items[0].owner.login;
  document.body.appendChild(ul);
  data.items.forEach((element) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${element.full_name}  - ${element.url}`;
  });
}

Promise.all([getUser1(), getUser2(), getUser3()]);


function getUser1() {
  fetch("https://api.github.com/search/repositories?q=user:vitalreddym")
    .then((response) => response.json())
    .then((data) => getData(data));
}
// get data of user 1.

function getUser2() {
  fetch("https://api.github.com/search/repositories?q=user:MJanOthman")
    .then((response) => response.json())
    .then((data) => getData(data));
}
// get data of user 2.

function getUser3() {
  fetch("https://api.github.com/search/repositories?q=user:rismita87")
    .then((response) => response.json())
    .then((data) => getData(data));
}
// get data of user 3.

