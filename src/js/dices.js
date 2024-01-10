function diceRoll() {
    var diceType = document.getElementById("type").value;
    var quantity = document.getElementById("quantity").value;

    if (quantity > 0 && quantity <= 3) {
      var result = rollDice(diceType, quantity);
      document.getElementById("result").innerHTML =
        "<p>Result: " + result.join(", ") + "</p>";
    } else {
      alert("Please select a valid quantity (1-3).");
    }
  }

  function rollDice(type, quantity) {
    var results = [];
    for (var i = 0; i < quantity; i++) {
      var roll = Math.floor(Math.random() * type) + 1;
      results.push(roll);
    }
    return results;
  }