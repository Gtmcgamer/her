const plusButtons = document.querySelectorAll(".fas.fa-plus-circle");
const total = document.querySelector(".total");
plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardBody = button.closest(".card-body");

    const quantityElement = cardBody.querySelector(".quantity");

    let currentQuantity = parseInt(quantityElement.innerText);

    currentQuantity++;

    quantityElement.innerText = currentQuantity;

    updateTotalPrice();
    console.log(updateTotalPrice());
    const totalfn = updateTotalPrice();
    total.innerText = totalfn;
  });
});

const minusButtons = document.querySelectorAll(".fas.fa-minus-circle");
minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardBody = button.closest(".card-body");
    const quantityElement = cardBody.querySelector(".quantity");
    let currentQuantity = parseInt(quantityElement.innerText, 10);

    if (currentQuantity > 0) {
      currentQuantity--;
    }

    quantityElement.innerText = currentQuantity;

    const totalfn = updateTotalPrice();
    total.innerText = totalfn;
  });
});

function updateTotalPrice() {
  let totalPrice = 0;
  const cardBodies = document.querySelectorAll(".card-body");
  cardBodies.forEach((cardBody) => {
    const quantityElement = cardBody.querySelector(".quantity");
    const priceElement = cardBody.querySelector(".unit-price");
    console.log(quantityElement, priceElement);
    const quantity = parseInt(quantityElement.innerText, 10);
    const price = parseFloat(priceElement.innerText.replace("$", ""));

    totalPrice += quantity * price;
  });

  return totalPrice;
}
