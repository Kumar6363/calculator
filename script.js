function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.remove('hidden');
  event.target.classList.add('active');
}

function calculateLoan() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const tenure = parseFloat(document.getElementById('loanTenure').value);
  const months = tenure * 12;

  if (loan && rate && tenure) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById('loanResult').innerHTML = `Monthly Repayment: RM ${monthly.toFixed(2)}`;
  }
}

function calculateDSR() {
  const income = parseFloat(document.getElementById('grossIncome').value);
  const commitments = parseFloat(document.getElementById('commitments').value);
  const dsrLimit = parseFloat(document.getElementById('dsrLimit').value);

  if (income && dsrLimit) {
    const maxInstallment = (income * dsrLimit / 100) - commitments;
    const estLoan = maxInstallment * 200;
    let msg = `Max Monthly Installment: RM ${maxInstallment.toFixed(2)}<br>Est. Loan: RM ${estLoan.toFixed(0)}`;
    if (maxInstallment < 0) msg += "<br><span style='color:red'>❌ Poor DSR</span>";
    document.getElementById('dsrResult').innerHTML = msg;
  }
}

function calculateNDI() {
  const income = parseFloat(document.getElementById('ndiGross').value);
  const epf = parseFloat(document.getElementById('epf').value);
  const socso = parseFloat(document.getElementById('socso').value);
  const loan = parseFloat(document.getElementById('ndiLoan').value);
  const living = parseFloat(document.getElementById('living').value);

  const epfAmt = income * (epf / 100);
  const ndi = income - epfAmt - socso - loan - living;

  document.getElementById('ndiResult').innerHTML = `Net Disposable Income (NDI): RM ${ndi.toFixed(2)}`;
}
