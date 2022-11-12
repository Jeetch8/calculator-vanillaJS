const keys = document.getElementsByClassName("key");
const historyList = document.getElementById("historyList");
const resultMainDisplay = document.getElementById("resultMainDisplay");
const calculationsMainDisplay = document.getElementById(
  "calculationsMainDisplay"
);

const historyListArray = [];
const keysArray = [...keys];
let claculation = "";
let result = "";
let calculationToShow = "";

const appendToHistory = (calc, resul) => {
  const li = document.createElement("li");
  li.className = "singleHistoryCalc";
  const headDiv = document.createElement("div");
  const bottomDiv = document.createElement("div");
  headDiv.className = "headDiv";
  bottomDiv.className = "bottomDiv";
  //   headDiv.innerText = claculation;
  //   bottomDiv.innerText = result;
  if (historyListArray.length === 3) {
    historyListArray.push({ calc, resul });
    historyListArray.pop();
  } else {
    historyListArray.push({ calc, resul });
  }
  console.log(historyListArray);
  historyListArray.forEach((item, index) => {
    if (index === 0) return;
    headDiv.innerText = item.calc;
    bottomDiv.innerText = item.resul;
    historyList.appendChild(li);
  });
  if (result !== "" && calculationToShow !== "" && claculation !== "") {
    result = "";
    calculationToShow = "";
    claculation = "";
  }
};

keysArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "%":
        claculation += "%";
        calculationToShow += " % ";
        break;
      case "/":
        claculation = "/";
        calculationToShow = " / ";
        break;
      case "x":
        claculation += "*";
        calculationToShow += " x ";
        break;
      case "-":
        claculation += "-";
        calculationToShow += " - ";
        break;
      case "+":
        claculation += "+";
        calculationToShow += " + ";
        break;
      case "=":
        appendToHistory({ calc: calculationToShow, resul: eval(claculation) });
        result = eval(claculation);
        break;
      case "AC":
        insiderSelectedBtn = "";
        toShowSelectedBtn = "";
        break;
      default:
        calculationToShow += e.target.innerText;
        claculation += e.target.innerText;
        break;
    }
    calculationsMainDisplay.innerText = calculationToShow;
    resultMainDisplay.innerText = result;
    //This should be in the last
  });
});
