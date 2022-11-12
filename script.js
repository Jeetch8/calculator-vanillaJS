const keys = document.getElementsByClassName("key");
const currentDisplay = document.getElementById("currentCalc");
const historyList = document.getElementById("historyList");

let insiderSelectedBtn = "";
let toShowSelectedBtn = "";
let results = "";
const historyArray = [];
const keysArray = [...keys];
keysArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "%":
        insiderSelectedBtn += "%";
        toShowSelectedBtn += " % ";
        break;
      case "/":
        insiderSelectedBtn += "/";
        toShowSelectedBtn += " / ";
        break;
      case "x":
        insiderSelectedBtn += "*";
        toShowSelectedBtn += " x ";
        break;
      case "-":
        insiderSelectedBtn += "-";
        toShowSelectedBtn += " - ";
        break;
      case "+":
        insiderSelectedBtn += "+";
        toShowSelectedBtn += " + ";
        break;
      case "=":
        toShowSelectedBtn = eval(insiderSelectedBtn);
        break;
      case "AC":
        insiderSelectedBtn = "";
        toShowSelectedBtn = "";
        break;
      default:
        insiderSelectedBtn += e.target.innerText;
        toShowSelectedBtn += e.target.innerText;
        break;
    }
    currentDisplay.innerText = toShowSelectedBtn;
  });
});

// eval
