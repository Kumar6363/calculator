document.getElementById("btnCalc").addEventListener("click", function () {
  const price = parseFloat(document.getElementById("price").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseFloat(document.getElementById("years").value);

  if (!price || !rate || !years) return;

  const loanAmount = price * 1.1; // 110%
  const lawyerFee = price * 0.06;
  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;

  const monthlyRepayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

  document.getElementById("loanAmt").textContent =
    "RM " + loanAmount.toFixed(2).toLocaleString();
  document.getElementById("lawyerFee").textContent =
    "RM " + lawyerFee.toFixed(2).toLocaleString();
  document.getElementById("rateVal").textContent = rate.toFixed(2);
  document.getElementById("tenureVal").textContent = years;
  document.getElementById("monthly").textContent =
    "RM " + monthlyRepayment.toFixed(2).toLocaleString();

  document.getElementById("result").hidden = false;
});
