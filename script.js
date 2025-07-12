/* ==== script.js ==== */

function showTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  document.getElementById(tabName).style.display = "block";

  document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.nav button[data-tab='${tabName}']`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showTab("about");
});

function calculateLoan() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const tenure = parseFloat(document.getElementById("loanTenure").value) * 12;

  if (loan && rate && tenure) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -tenure));
    document.getElementById("loanResult").innerHTML =
      `<div class='result success'>Monthly Repayment:<br><span style='font-size: 26px;'>RM ${monthly.toFixed(2)}</span></div>`;
  }
}

function calculateDSR() {
  const income = parseFloat(document.getElementById("dsrIncome").value);
  const commitments = parseFloat(document.getElementById("dsrCommitments").value);
  const limit = parseFloat(document.getElementById("dsrLimit").value);

  if (income && limit) {
    const maxInstallment = income * (limit / 100) - commitments;
    const estimatedLoan = maxInstallment * 200;
    let message = `<div class='result success'>
      Max Monthly Installment:<br><span style='font-size: 24px;'>RM ${maxInstallment.toFixed(2)}</span><br><br>
      Est. Loan:<br><span style='font-size: 24px;'>RM ${estimatedLoan.toFixed(0)}</span><br>`;
    message += limit >= 65 ? "👍 Good DSR score!" : "⚠️ DSR score may be too low.";
    message += "</div>";
    document.getElementById("dsrResult").innerHTML = message;
  }
}

function calculateNDI() {
  const gross = parseFloat(document.getElementById("ndiGross").value);
  const epf = parseFloat(document.getElementById("ndiEPF").value);
  const tax = parseFloat(document.getElementById("ndiTax").value);
  const loans = parseFloat(document.getElementById("ndiLoans").value);
  const living = parseFloat(document.getElementById("ndiLiving").value);

  const net = gross - (gross * (epf / 100)) - tax - loans - living;
  document.getElementById("ndiResult").innerHTML =
    `<div class='result success'>Net Disposable Income (NDI): RM ${net.toFixed(2)}</div>`;
}
