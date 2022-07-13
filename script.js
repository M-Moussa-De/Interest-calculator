const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");

const resultArea = document.querySelector("#result");
const errPlaceholder = document.querySelector("#err");

const computeBtn = document.querySelector("#compute");

const currentYear = new Date().getFullYear();

interest.addEventListener("input", () => {
  document.querySelector("#rate").textContent = `${interest.value}%`;
});

computeBtn.addEventListener("click", calculatorTotalAmount);
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    calculatorTotalAmount();
  }
});

function calculatorTotalAmount() {
  const vals = getUserInput();

  if (vals) {
    errPlaceholder.style.display = "none";

    const result = vals.amountVal * (vals.interestVal / 100) * vals.yearsNo;

    const report = `<div class="p-6 animated">
    <p>If you deposit <span class="bg-white">${vals.amountVal}</span>,</p>
    <p>at an interest rate of <span class="bg-white">${
      vals.interestVal
    }%</span>,</p>
    <p>You will receive an amount of <span class="bg-white">${result}</span>,</p>
    <p>in the year <span class="bg-white">${
      currentYear + Number(vals.yearsNo)
    }</span></p>
    </div>`;

    resultArea.innerHTML = report;
    resultArea.style.display = "block";
  } else {
    errPlaceholder.classList.add("err");
    errPlaceholder.style.display = "block";
    errPlaceholder.textContent = "* Please provide all required data";
    resultArea.style.display = "none";
  }
}

function getUserInput() {
  const amountVal = Number(amount.value);
  const interestVal = Number(interest.value);
  const yearsNo = Number(years.value);

  return amountVal > 0 && interestVal && yearsNo
    ? { amountVal, interestVal, yearsNo }
    : undefined;
}
