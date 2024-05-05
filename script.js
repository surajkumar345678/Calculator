const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastValue = inputValue.innerText.trim().slice(-1);
    const currentOperation = e.target.innerHTML;

    if (!isNaN(parseInt(lastValue)) && currentOperation === "=") {
      inputValue.innerText = parseFloat(eval(inputValue.innerText)).toFixed(2);
    } else if (currentOperation === "AC") {
      inputValue.innerText = 0;
    } else if (currentOperation === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = 0;
      }
    } else {
      if (!isNaN(parseInt(lastValue))) {
        inputValue.innerText += currentOperation;
      }
    }
  });
});
