const billamount = document.getElementById("bill");
const tip_percentage = document.getElementById("tip");
const calculatebtn = document.getElementById("calculate-btn");
const Result = document.getElementById("total-result");

calculatebtn.addEventListener("click", function () {
  let billValue = billamount.value;
  let tipValue = tip_percentage.value;
  console.log(billValue);
  console.log(tipValue);
  let calculatedtip = billValue * (tipValue / 100);
  console.log(calculatedtip);
  Result.innerHTML = "Your Tip is: " + calculatedtip;
});
