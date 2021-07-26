const getCurrencySymbol = (currency) =>
  new Intl.NumberFormat("en", { style: "currency", currency: currency })
    .formatToParts("1")
    .find((part) => (part.type = "currency")).value;

export default getCurrencySymbol;
