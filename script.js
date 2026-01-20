// Licra Games Bank - Currency System

let user = {
  username: "player01",
  balance: 100
};

const LICRA_VALUE = 3.44;

function updateUI() {
  document.getElementById("username").textContent = user.username;
  document.getElementById("balance").textContent = user.balance;
  document.getElementById("value").textContent =
    (user.balance * LICRA_VALUE).toFixed(2);
}

function earnLicra(amount) {
  user.balance += amount;
  updateUI();
}

function spendLicra(amount) {
  if (amount <= user.balance) {
    user.balance -= amount;
  }
  updateUI();
}

updateUI();
