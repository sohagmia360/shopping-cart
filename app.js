// select all element ============================================
const phone_minus = document.querySelector(".phone-minus");
const phone_plus = document.querySelector(".phone-plus");
const phoneQuentity = document.querySelector(".phoneQuentity");
const totalPhonePrice = document.querySelector(".totalPhonePrice");
const cover_plus = document.querySelector(".cover_plus");
const cover_minus = document.querySelector(".cover_minus");
const coverQuntity = document.querySelector(".coverQuntity");
const totalCoverPrice = document.querySelector(".totalCoverPrice");
const subTotal = document.querySelector(".subTotal");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");
let count = 1;
// all eventListenner ============================================
phone_plus.addEventListener("click", () => manageQuntity(phoneQuentity, true, true));
phone_minus.addEventListener("click", () =>manageQuntity(phoneQuentity, false, true));
cover_plus.addEventListener("click", () => manageQuntity(coverQuntity, true, false));
cover_minus.addEventListener("click", () => manageQuntity(coverQuntity, false, false));
// all function ==================================================
function manageQuntity(quentity, isIncrese, isPhone) {
  if (isIncrese) {
    count++;
  } else if (count > 0) {
    count--;
  }
  quentity.value = count;
  isPhone
    ? updateProdactValue(totalPhonePrice, 1219, count)
    : updateProdactValue(totalCoverPrice, 59, count);

  updatePriceSummery(count);
}

function updateProdactValue(totalprice, price, quentity) {
  let totalProductPrice = quentity * price;
  totalprice.innerText = totalProductPrice;
  // console.log(totalPhonePrice)
}
function updatePriceSummery(quentity) {
  const phoneTotalBeforeTax = quentity * 1219;
  const coverTotalBeforeTax = quentity * 59;
  const subTotalPrice = phoneTotalBeforeTax + coverTotalBeforeTax;
  const taxPersent = subTotalPrice / 10;
  subTotal.innerText = subTotalPrice;
  tax.innerText = taxPersent;
  total.innerText = subTotalPrice + taxPersent;
  console.log(quentity);
  console.log(count);
}
document.addEventListener("load", updatePriceSummery(count));
