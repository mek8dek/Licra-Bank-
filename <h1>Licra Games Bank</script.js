// Licra Games Bank - Currency System

// Initial user data
let user = {
  username: "player01",
  balance: 100 // Licra K$
};

// Reference value (fictional)
const LICRA_VALUE = 3.44;

// Show balance in console
function showBalance() {
  console.log("User:", user.username);
  console.log("Balance:", user.balance, "Licra K$");
  console.log("Equivalent value:", (user.balance * LICRA_VALUE).toFixed(2));
}

// Add Licra K$
function earnLicra(amount) {
  if (amount > 0) {
    user.balance += amount;
    console.log("You earned", amount, "Licra K$");
    showBalance();
  }
}

// Spend Licra K$
function spendLicra(amount) {
  if (amount <= user.balance && amount > 0) {
    user.balance -= amount;
    console.log("You spent", amount, "Licra K$");
    showBalance();
  } else {
    console.log("Insufficient balance");
  }
}

// Initial display
showBalance();
