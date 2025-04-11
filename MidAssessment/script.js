const users = [];
const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById("address").value;

  const user = {
    name: name,
    email: email,
    gender: gender,
    phone: phone,
    address: address,
  };

  users.push(user);
  userForm.reset();
  alert("User added successfully!");

  const table = document
    .getElementById("tableUser")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  let counter = 0;

  users.forEach((element) => {
    const row = document.createElement("tr");
    counter++;

    const nameUser = document.createElement("td");
    nameUser.textContent = element.name;

    const emailUser = document.createElement("td");
    emailUser.textContent = element.email;

    const phoneUser = document.createElement("td");
    phoneUser.textContent = element.phone;

    const addressUser = document.createElement("td");
    addressUser.textContent = element.address;

    const genderUser = document.createElement("td");
    genderUser.textContent = element.gender;

    const counterTd = document.createElement("td");
    counterTd.textContent = counter;

    row.appendChild(counterTd);
    row.appendChild(nameUser);
    row.appendChild(emailUser);
    row.appendChild(addressUser);
    row.appendChild(phoneUser);
    row.appendChild(genderUser);

    table.appendChild(row);
  });

  const card = document.getElementById("cardsUser");
  card.innerHTML = "";
  users.forEach((userCardData) => {
    const cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card card-body");

    const rowCard = document.createElement("div");
    cardBody.appendChild(rowCard);
    rowCard.setAttribute("class", "row");

    const col = document.createElement("div");
    col.setAttribute("class", "col");
    rowCard.appendChild(col);

    const cardName = document.createElement("h5");
    col.appendChild(cardName);
    cardName.setAttribute("class", "card-title namecard");
    cardName.textContent = "Name: " + userCardData.name;

    const emailcard = document.createElement("p");
    col.appendChild(emailcard);
    emailcard.setAttribute("class", "card-text");
    emailcard.textContent = "Email: " + userCardData.email;

    const phonecard = document.createElement("p");
    col.appendChild(phonecard);
    phonecard.setAttribute("class", "card-text");
    phonecard.textContent = "PhoneNumber: " + userCardData.phone;

    const addresscard = document.createElement("p");
    col.appendChild(addresscard);
    addresscard.setAttribute("class", "card-text");
    addresscard.textContent = "Address: " + userCardData.address;

    const gendercard = document.createElement("p");
    col.appendChild(gendercard);
    gendercard.setAttribute("class", "card-text");
    gendercard.textContent = "Gender: " + userCardData.gender;
  });
});
