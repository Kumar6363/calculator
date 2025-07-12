/* === TAB SWITCH === */
function showTab(id, evt){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.add('hidden'));
  document.querySelectorAll('.tab-button').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.remove('hidden');
  evt.target.classList.add('active');
}

/* === HOME LOAN === */
function calculateLoan(){
  const P = +loanAmount.value, r = +interestRate.value/100/12, n = +loanTenure.value*12;
  if(!P||!r||!n) return;
  const M = P*r/(1-Math.pow(1+r,-n));
  monthlyPayment.innerHTML = `Monthly Repayment:<br><span class="highlight">RM ${M.toFixed(2)}</span>`;
  loanResult.classList.remove('hidden');
}

/* === DSR === */
function calculateDSR(){
  const inc = +grossIncome.value, com = +commitments.value, lim = +dsrLimit.value/100;
  if(!inc) return;
  const max = inc*lim - com, loan = Math.max(0,max)*200;
  maxInstallment.innerHTML = `Max Monthly Installment:<br><span class="highlight">RM ${max.toFixed(2)}</span>`;
  estLoan.innerHTML        = `Est. Loan:<br><span class="highlight">RM ${loan.toFixed(0)}</span>`;
  dsrComment.textContent   = max>=0 ? '👍 Good DSR Ratio! Eligible.' : '🚫 DSR too high.';
  dsrResult.classList.remove('hidden');
}

/* === NDI === */
function calculateNDI(){
  const g=+ndiGross.value, epf=+epf.value, tax=+socso.value, loans=+ndiLoan.value, live=+living.value;
  if(!g) return;
  const ndi = g - g*epf/100 - tax - loans - live;
  ndiValue.innerHTML = `Net Disposable Income:<br><span class="highlight">RM ${ndi.toFixed(2)}</span>`;
  ndiResult.classList.remove('hidden');
}
