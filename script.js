/* ------ TAB HANDLER ------ */
function showTab(id, event) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.remove('hidden');
  event.target.classList.add('active');
}

/* ------ HOME‑LOAN CALC ------ */
function calculateLoan() {
  const loan   = parseFloat(document.getElementById('loanAmount').value);
  const rate   = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const years  = parseFloat(document.getElementById('loanTenure').value);
  if (!loan || !rate || !years) return;

  const months = years * 12;
  const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
  document.getElementById('monthlyPayment').innerHTML =
    `<strong>RM ${monthly.toFixed(2)}</strong>`;
  document.getElementById('loanResult').style.display = 'block';
}

/* ------ DSR CALC ------ */
function calculateDSR() {
  const income = +document.getElementById('grossIncome').value;
  const comm   = +document.getElementById('commitments').value;
  const limit  = +document.getElementById('dsrLimit').value;

  const maxInst = income * (limit/100) - comm;
  const estLoan = Math.max(0, maxInst) * 200;

  document.getElementById('maxInstallment').innerHTML =
    `<strong>RM ${maxInst.toFixed(2)}</strong>`;
  document.getElementById('estLoan').innerHTML =
    `<strong>RM ${estLoan.toFixed(0)}</strong>`;

  document.getElementById('dsrComment').textContent =
    maxInst >= 0 ? '👍 Good DSR Ratio! Eligible.' :
                   '🚫 DSR too high. Reduce commitments.';
  document.getElementById('dsrResult').style.display = 'block';
}

/* ------ NDI CALC ------ */
function calculateNDI() {
  const g     = +document.getElementById('ndiGross').value;
  const epf   = +document.getElementById('epf').value;
  const tax   = +document.getElementById('socso').value;
  const loans = +document.getElementById('ndiLoan').value;
  const live  = +document.getElementById('living').value;

  const ndi = g - (g * epf/100) - tax - loans - live;
  document.getElementById('ndiValue').innerHTML =
    `<strong>RM ${ndi.toFixed(2)}</strong>`;
  document.getElementById('ndiResult').style.display = 'block';
}
