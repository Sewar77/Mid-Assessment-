class User {
  constructor(name, email, phone, gender, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}

class UserUI {
  constructor() {
    this.users = [];
    this.userForm = document.getElementById("userForm");
    this.successMsg = document.getElementById("successMessage");
    this.tableBody = document.getElementById("tableUser").getElementsByTagName("tbody")[0];
    this.cardContainer = document.getElementById("cardsUser");

    this.bindEvents();
  }

  bindEvents() {
    this.userForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value.trim();

    const newUser = new User(name, email, phone, gender, address);
    this.users.push(newUser);

    this.userForm.reset();
    this.showSuccessMessage();
    this.renderTable();
    this.renderCards();
  }

  showSuccessMessage() {
    this.successMsg.classList.remove("d-none");
    this.successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    this.successMsg.focus();
  }

  renderTable() {
    this.tableBody.innerHTML = "";
    this.users.forEach((user, index) => {
      const row = document.createElement("tr");

      const counterTd = document.createElement("td");
      counterTd.textContent = index + 1;

      const nameTd = document.createElement("td");
      nameTd.textContent = user.name;

      const emailTd = document.createElement("td");
      emailTd.textContent = user.email;

      const phoneTd = document.createElement("td");
      phoneTd.textContent = user.phone;

      const addressTd = document.createElement("td");
      addressTd.textContent = user.address;

      const genderTd = document.createElement("td");
      genderTd.textContent = user.gender;

      row.append(counterTd, nameTd, emailTd, addressTd, phoneTd, genderTd);
      this.tableBody.appendChild(row);
    });
  }

  renderCards() {
    this.cardContainer.innerHTML = "";
    this.users.forEach((user) => {
      const cardBody = document.createElement("div");
      cardBody.className = "card card-body";

      const rowCard = document.createElement("div");
      rowCard.className = "row";

      const col = document.createElement("div");
      col.className = "col";

      const cardName = document.createElement("h5");
      cardName.className = "card-title namecard";
      cardName.textContent = `Name: ${user.name}`;

      const emailCard = document.createElement("p");
      emailCard.className = "card-text";
      emailCard.textContent = `Email: ${user.email}`;

      const phoneCard = document.createElement("p");
      phoneCard.className = "card-text";
      phoneCard.textContent = `PhoneNumber: ${user.phone}`;

      const addressCard = document.createElement("p");
      addressCard.className = "card-text";
      addressCard.textContent = `Address: ${user.address}`;

      const genderCard = document.createElement("p");
      genderCard.className = "card-text";
      genderCard.textContent = `Gender: ${user.gender}`;

      col.append(cardName, emailCard, phoneCard, addressCard, genderCard);
      rowCard.appendChild(col);
      cardBody.appendChild(rowCard);
      this.cardContainer.appendChild(cardBody);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UserUI();
});
