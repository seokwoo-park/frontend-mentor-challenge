const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".pageviews__price");
const range = document.querySelector(".price__range");
const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("click", (e) => {
  if (checkbox.classList.contains("yearly")) {
    checkbox.classList.remove("yearly");
  } else checkbox.classList.add("yearly");
});

range.addEventListener("input", (e) => {
  let currentValue = e.target.value;

  switch (currentValue) {
    case "1":
      changePrice("10K", 8);
      break;
    case "2":
      changePrice("50K", 12);
      break;
    case "3":
      changePrice("100K", 16);
      break;
    case "4":
      changePrice("500K", 24);
      break;
    case "5":
      changePrice("1M", 36);
      break;
  }
});

function priceChanger() {}

function yearlyPrice(price) {
  if (checkbox.classList.contains("yearly")) {
    return price * 12 * 0.75;
  } else {
    return price;
  }
}

function changePrice(views, prices) {
  pageviews.innerHTML = `${views} PAGEVIEWS`;
  price.innerHTML = `$${yearlyPrice(prices)}.00`;
}
