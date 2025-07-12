function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.remove('hidden');
  event.target.classList.add('active');
}

function calculateLoan() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('loanTenure').value);
  const months = years * 12;

  if (loan && rate && years) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById('monthlyPayment').innerHTML = `
      <div>Monthly Repayment:</div>
      <div class="highlight">RM ${monthly.toFixed(2)}</div>
    `;
    document.getElementById('loanResult').style.display = 'block';
  }
}

function calculateDSR() {
  const income = parseFloat(document.getElementById('grossIncome').value);
  const commitments = parseFloat(document.getElementById('commitments').value);
  const dsrLimit = parseFloat(document.getElementById('dsrLimit').value);

  const maxInst = (income * dsrLimit / 100) - commitments;
  const estLoan = maxInst * 200;

  document.getElementById('maxInstallment').innerHTML = `
    <div>Max Monthly Installment:</div>
    <div class="highlight">RM ${maxInst.toFixed(2)}</div>
  `;
  document.getElementById('estLoan').innerHTML = `
    <div>Est. Loan:</div>
    <div class="highlight">RM ${estLoan.toFixed(0)}</div>
  `;

  const comment = document.getElementById('dsrComment');
  if (maxInst < 0 || estLoan < 0) {
    comment.innerHTML = "🚫 Poor DSR Ratio. Review commitments.";
  } else {
    comment.innerHTML = "👍 Good DSR Ratio! Eligible.";
  }

  document.getElementById('dsrResult').style.display = 'block';
}

function calculateNDI() {
  const income = parseFloat(document.getElementById('ndiGross').value);
  const epf = parseFloat(document.getElementById('epf').value);
  const socso = parseFloat(document.getElementById('socso').value);
  const loans = parseFloat(document.getElementById('ndiLoan').value);
  const living = parseFloat(document.getElementById('living').value);

  const epfAmt = income * (epf / 100);
  const ndi = income - epfAmt - socso - loans - living;

  document.getElementById('ndiValue').innerHTML = `
    <div>Net Disposable Income (NDI):</div>
    <div class="highlight">RM ${ndi.toFixed(2)}</div>
  `;
  document.getElementById('ndiResult').style.display = 'block';
}
