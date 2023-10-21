const deals = document.querySelectorAll("dt.title");

deals.forEach(function (deal) {
  if (dealIsExpired(deal)) {
    const dealDescription = deal.nextElementSibling;

    deal.style.display = "none";
    dealDescription.style.display = "none";
  }
});

function dealIsExpired(deal) {
  // Deal is expired, if I can find a span with class = expired inside it
  return deal.querySelector("span.expired") !== null;
}