function openTab(tabId) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function calculateLoan() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const years = parseFloat(document.getElementById("loanTenure").value);
  const months = years * 12;
  const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
  document.getElementById("loanResult").innerHTML = `Monthly Repayment:<br><span style="font-size: 26px">RM ${monthly.toFixed(2)}</span>`;
}

function calculateDSR() {
  const income = parseFloat(document.getElementById("dsrIncome").value);
  const commitments = parseFloat(document.getElementById("dsrCommitment").value);
  const limit = parseFloat(document.getElementById("dsrLimit").value);

  const maxInstalment = (income * limit / 100) - commitments;
  const estimatedLoan = maxInstalment / 0.005;

  let feedback = '';
  if (limit >= 65) {
    feedback = "👍 Good DSR Ratio! Eligible.";
  } else {
    feedback = "⚠️ DSR Limit is low. Might affect approval.";
  }

  document.getElementById("dsrResult").innerHTML =
    `Max Monthly Installment:<br><span style="font-size: 22px">RM ${maxInstalment.toFixed(2)}</span><br><br>` +
    `Est. Loan:<br><span style="font-size: 22px">RM ${estimatedLoan.toFixed(0)}</span><br><br>${feedback}`;
}

function calculateNDI() {
  const income = parseFloat(document.getElementById("grossIncome").value);
  const epfRate = parseFloat(document.getElementById("epf").value);
  const tax = parseFloat(document.getElementById("tax").value);
  const commitments = parseFloat(document.getElementById("loanCommitments").value);
  const expenses = parseFloat(document.getElementById("livingExpenses").value);

  const epfDeduction = income * (epfRate / 100);
  const netIncome = income - epfDeduction - tax - commitments - expenses;

  document.getElementById("ndiResult").innerHTML =
    `Net Disposable Income (NDI):<br><span style="font-size: 24px">RM ${netIncome.toFixed(2)}</span>`;
}
