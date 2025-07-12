function showTab(tabId, event) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function calculateLoan() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const tenure = parseFloat(document.getElementById("loanTenure").value);
  const months = tenure * 12;

  if (loan && rate && tenure) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById("loanResult").innerHTML = `
      Monthly Repayment:<br><span class="highlight">RM ${monthly.toFixed(2)}</span>
    `;
    document.getElementById("loanResult").style.display = 'block';
  }
}

function calculateDSR() {
  const income = parseFloat(document.getElementById("dsrIncome").value);
  const commitments = parseFloat(document.getElementById("dsrCommitment").value);
  const limit = parseFloat(document.getElementById("dsrLimit").value);

  const maxInstallment = (income * (limit / 100)) - commitments;
  const estLoan = maxInstallment > 0 ? maxInstallment * 200 : 0;

  let message = maxInstallment >= 0
    ? "👍 Your loan eligibility is good enough!"
    : "⚠️ Your DSR ratio is too high. Consider reducing commitments.";

  document.getElementById("dsrResult").innerHTML = `
    Max Monthly Installment:<br><span class="highlight">RM ${maxInstallment.toFixed(2)}</span><br>
    Est. Loan:<br><span class="highlight">RM ${estLoan.toFixed(0)}</span><br><br>${message}
  `;
  document.getElementById("dsrResult").style.display = 'block';
}

function calculateNDI() {
  const gross = parseFloat(document.getElementById("ndiGross").value);
  const epf = parseFloat(document.getElementById("ndiEPF").value);
  const tax = parseFloat(document.getElementById("ndiTax").value);
  const loan = parseFloat(document.getElementById("ndiLoan").value);
  const living = parseFloat(document.getElementById("ndiLiving").value);

  const epfDeduct = gross * (epf / 100);
  const ndi = gross - epfDeduct - tax - loan - living;

  document.getElementById("ndiResult").innerHTML = `
    Net Disposable Income (NDI):<br><span class="highlight">RM ${ndi.toFixed(2)}</span>
  `;
  document.getElementById("ndiResult").style.display = 'block';
}
