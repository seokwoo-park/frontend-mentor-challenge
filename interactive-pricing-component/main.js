const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".pageviews__price");
const range = document.querySelector(".price__range");
const checkbox = document.querySelector(".checkbox");

let range_value = range.value;

const priceList = [
  {
    monthlyPV: "10K",
    monthlyPrice: 8,
  },
  {
    monthlyPV: "50K",
    monthlyPrice: 12,
  },
  {
    monthlyPV: "100K",
    monthlyPrice: 16,
  },
  {
    monthlyPV: "500K",
    monthlyPrice: 24,
  },
  {
    monthlyPV: "1M",
    monthlyPrice: 36,
  },
];

let { monthlyPV, monthlyPrice } = priceList[range_value - 1];

checkbox.addEventListener("click", (e) => {
  if (checkbox.classList.contains("yearly")) {
    checkbox.classList.remove("yearly");
    priceInnerText(monthlyPrice);
  } else {
    checkbox.classList.add("yearly");
    priceInnerText(ConvertPrice());
  }
});

range.addEventListener("input", (e) => {
  range_value = e.target.value;
  monthlyPV = priceList[range_value - 1].monthlyPV;
  monthlyPrice = priceList[range_value - 1].monthlyPrice;

  changeBilling(monthlyPV, monthlyPrice);
});

function ConvertPrice() {
  return monthlyPrice * 12 * 0.75;
}

function changeBilling(views, price) {
  if (checkbox.classList.contains("yearly")) {
    pageviewsInnerText(views);
    priceInnerText(ConvertPrice());
  } else {
    pageviewsInnerText(views);
    priceInnerText(price);
  }
}

function priceInnerText(prices) {
  price.innerHTML = `$${prices}.00`;
}
function pageviewsInnerText(views) {
  pageviews.innerHTML = `${views} PAGEVIEWS`;
}
