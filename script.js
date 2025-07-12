function showTab(tabId, event) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.remove('hidden');
  event.target.classList.add('active');
}

// Home Loan
function calculateLoan() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('loanTenure').value);
  const months = years * 12;

  if (loan && rate && years) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById('monthlyPayment').innerHTML =
      `Monthly Repayment:<br><span class="highlight">RM ${monthly.toFixed(2)}</span>`;
    document.getElementById('loanResult').classList.remove('hidden');
  }
}

// DSR
function calculateDSR() {
  const income = parseFloat(document.getElementById('grossIncome').value);
  const commitments = parseFloat(document.getElementById('commitments').value);
  const dsrLimit = parseFloat(document.getElementById('dsrLimit').value);

  const maxInst = (income * dsrLimit / 100) - commitments;
  const estLoan = Math.max(0, maxInst) * 200;

  document.getElementById('maxInstallment').innerHTML =
    `Max Monthly Installment:<br><span class="highlight">RM ${maxInst.toFixed(2)}</span>`;
  document.getElementById('estLoan').innerHTML =
    `Est. Loan:<br><span class="highlight">RM ${estLoan.toFixed(0)}</span>`;
  document.getElementById('dsrComment').textContent =
    maxInst >= 0 ? '👍 Good DSR Ratio! Eligible.' : '🚫 DSR too high.';
  document.getElementById('dsrResult').classList.remove('hidden');
}

// NDI
function calculateNDI() {
  const income = parseFloat(document.getElementById('ndiGross').value);
  const epf = parseFloat(document.getElementById('epf').value);
  const socso = parseFloat(document.getElementById('socso').value);
  const loans = parseFloat(document.getElementById('ndiLoan').value);
  const living = parseFloat(document.getElementById('living').value);

  const epfAmt = income * (epf / 100);
  const ndi = income - epfAmt - socso - loans - living;

  document.getElementById('ndiValue').innerHTML =
    `Net Disposable Income:<br><span class="highlight">RM ${ndi.toFixed(2)}</span>`;
  document.getElementById('ndiResult').classList.remove('hidden');
}
