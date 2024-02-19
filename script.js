let seatCount = 40;
let selectedSeat = 0;
let totalPrice = 0;
let discount = 0;
let grandTotal = 0;
const perSeatPrice = 550;
document.getElementById("available-seat").innerText = seatCount;
document.getElementById("selected-seats").innerText = selectedSeat;
document.getElementById("total-ticket-price").innerText = totalPrice;

const seats = document.querySelectorAll(".single-seat");
for (const singleSeat of seats) {
  singleSeat.addEventListener("click", handleSeatClick);
  function handleSeatClick() {
    if (selectedSeat >= 4 || singleSeat.classList.contains("bg-[#1dd100]")) {
      return;
    }
    const seat = singleSeat.textContent.split("");
    const mainSeat = seat[21] + seat[22];
    singleSeat.classList.add("bg-[#1dd100]");
    const busDiv = document.createElement("div");
    const busSeat = document.createElement("p");
    const busClass = document.createElement("p");
    const busPrice = document.createElement("p");
    busSeat.innerText = mainSeat;
    busClass.innerText = "AC";
    busPrice.innerText = perSeatPrice;
    busDiv.append(busSeat, busClass, busPrice);
    busDiv.classList.add("flex", "justify-between");
    document.getElementById("select-seat-ticket").appendChild(busDiv);
    totalPrice = totalPrice + 550;
    grandTotal = grandTotal + 550;
    document.getElementById("grand-total").innerText = grandTotal;
    document.getElementById("total-ticket-price").innerText = totalPrice;
    const couponBtn = document.getElementById("coupon-btn");
    if (singleSeat.classList.contains("bg-[#1dd100]")) {
      singleSeat.removeEventListener("click", handleSeatClick);
    }
    seatCount = seatCount - 1;
    selectedSeat = selectedSeat + 1;
    document.getElementById("available-seat").innerText = seatCount;
    document.getElementById("selected-seats").innerText = selectedSeat;
    if (selectedSeat >= 4) {
      for (const oneSeat of seats) {
        oneSeat.removeEventListener("click", handleSeatClick);
      }
    }
    if (selectedSeat >= 4) {
      couponBtn.disabled = false;
    }
    if (selectedSeat > 0) {
      const phoneNumber = document.getElementById("phone-number");
      phoneNumber.addEventListener("keyup", function () {
        const nextButton = document.getElementById("next-btn");
        const phoneValue = phoneNumber.value;
        if (phoneValue !== "") {
          nextButton.disabled = false;
        }
      });
    }
  }
}
document.getElementById("coupon-btn").addEventListener("click", handleCoupon);
function handleCoupon() {
  const couponInput = document.getElementById("coupon-input");
  const couponValue = couponInput.value.toUpperCase().split(" ").join("");
  if (couponValue === "NEW15") {
    discount = totalPrice * 0.15;
    const discountAmount = document.getElementById("discount-amount");
    const discountDiv = document.getElementById("discount-div");
    discountAmount.innerText = discount;
    couponInput.classList.add("hidden");
    discountDiv.classList.remove("hidden");
    const couponButton = document.getElementById("coupon-btn");
    couponButton.classList.add("hidden");
    grandTotal = totalPrice - discount;
    document.getElementById("grand-total").innerText = grandTotal;
  } else if (couponValue === "COUPLE20") {
    discount = totalPrice * 0.2;
    const discountAmount = document.getElementById("discount-amount");
    const discountDiv = document.getElementById("discount-div");
    discountAmount.innerText = discount;
    couponInput.classList.add("hidden");
    discountDiv.classList.remove("hidden");
    const couponButton = document.getElementById("coupon-btn");
    couponButton.classList.add("hidden");
    grandTotal = totalPrice - discount;
    document.getElementById("grand-total").innerText = grandTotal;
  } else {
    alert("Please Provide Valid Coupon");
    couponInput.value = "";
  }
}
