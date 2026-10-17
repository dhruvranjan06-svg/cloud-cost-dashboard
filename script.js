
function showAlert() {
    const cost = 24500;
    const budget = 30000;
    const message = document.getElementById("alertMessage");

    if (cost >= budget) {
        message.textContent = "Alert: Monthly budget reached!";
        message.style.color = "red";
    } else {
        message.textContent =
            "Budget OK! You have ₹" + (budget - cost) + " remaining.";
        message.style.color = "green";
    }
}

function resetData() {
    document.getElementById("alertMessage").textContent = "";
    document.getElementById("totalCost").textContent = "₹24,500";
    document.getElementById("remaining").textContent = "₹5,500";
    document.getElementById("savings").textContent = "₹4,000";
}
