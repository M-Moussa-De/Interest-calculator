const amount = document.querySelector("#amount");
const interset = document.querySelector("#interest");
const years = document.querySelector("#years");

const resultArea = document.querySelector("#result");
const errPlaceholder = document.querySelector("#err");

const computeBtn = document.querySelector("#compute");

const currentYear = new Date().getFullYear();

interset.addEventListener("input", () => {
  document.querySelector("#rate").textContent = interset.value;
});

computeBtn.addEventListener("click", () => {
  const vals = getUserInput();

  if (vals) {
    errPlaceholder.style.display = "none";

    const result = vals.amountVal * vals.intersetVal * vals.yearsNo;

    const report = `<div class="p-6 animated">
    <p>If you deposit <span class="bg-yellow-200">${vals.amountVal}</span>,</p>
    <p>at an interest rate of <span class="bg-yellow-200">${
      vals.intersetVal
    }</span>,</p>
    <p>You will receive an amount of <span class="bg-yellow-200">${result}</span>,</p>
    <p>in the year <span class="bg-yellow-200">${
      currentYear + Number(vals.yearsNo)
    }</span></p>
    </div>`;

    resultArea.innerHTML = report;
  } else {
    errPlaceholder.classList.add("err");
    errPlaceholder.textContent =
      "* Please provide all required data with valid data";
  }
});

function getUserInput() {
  const amountVal = amount.value;
  const intersetVal = interset.value;
  const yearsNo = years.value;

  return amountVal > 0 && intersetVal && yearsNo
    ? { amountVal, intersetVal, yearsNo }
    : undefined;
}
