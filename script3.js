const calcList = document.getElementById("calcListDisplay");
const keys = document.getElementsByClassName("key");
const resultMainDisplay = document.getElementById("resultMainDisplay");
const calculationsMainDisplay = document.getElementById(
  "calculationsMainDisplay"
);
const calcListDisplay = document.getElementById("calcListDisplay");

const keysArray = [...keys];
const historyArray = [];
let result = "";
let claculation = "";
let calStatus = "idle"; //ready,idle,busy

function appendHistoryArray() {
  historyArray.forEach((item, index) => {
    if (index === 2) return;
    const li = document.createElement("li");
    const upperDiv = document.createElement("div");
    const lowerDiv = document.createElement("div");
    upperDiv.className = "historyUpper";
    lowerDiv.className = "historyLower";
    upperDiv.innerText = item.calc;
    lowerDiv.innerText = item.resul;
    li.appendChild(upperDiv);
    li.appendChild(lowerDiv);
    calcListDisplay.appendChild(li);
  });
}
appendHistoryArray();

keysArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "%":
        claculation += "%";
        break;
      case "/":
        claculation = "/";
        break;
      case "x":
        claculation += "*";
        break;
      case "-":
        claculation += "-";
        break;
      case "+":
        claculation += "+";
        break;
      case "=":
        result = `= ${eval(claculation)}`;
        if (claculation !== "" && result !== "") {
          if (historyArray.length >= 3) {
            historyArray.shift();
          }
          historyArray.push({
            calc: claculation,
            resul: `= ${eval(claculation)}`,
          });
        }
        calStatus = "ready";
        console.log(historyArray);
        calcListDisplay.innerHTML = "";
        appendHistoryArray();
        break;
      case "AC":
        claculation = "";
        result = "";
        break;
      default:
        if (calStatus === "ready") {
          claculation = "";
          result = "";
        }
        claculation += e.target.innerText;
        if (calStatus !== "busy") {
          calStatus = "busy";
        }
        break;
    }
    calculationsMainDisplay.innerText = claculation;
    resultMainDisplay.innerText = result;
  });
});
