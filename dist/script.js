/*
 * https://frontendeval.com/questions/mortgage-calculator
 *
 * Create a calculator that works out your monthly mortgage payment
 */

const App = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  function onSubmit(event) {
    event.preventDefault(); // Prevent page reload on form submission.

    const data = new FormData(event.target);

    // Get and convert input values.
    const loanAmount = parseFloat(data.get("loan-amount"));
    const monthlyInterestRate =
    parseFloat(data.get("interest-rate")) / 100 / 12;
    const loanTermInMonths = parseFloat(data.get("loan-term")) * 12;

    // Calculate monthly mortgage payment.
    const monthlyPaymentAmount =
    loanAmount * monthlyInterestRate / (
    1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));
    const totalPayment = monthlyPaymentAmount * loanTermInMonths;

    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD" });


    // Display monthly payment amount.
    setMonthlyPayment(currencyFormatter.format(monthlyPaymentAmount));

    // Display total payment amount.
    setTotalPayment(currencyFormatter.format(totalPayment));

    // Display total interest amount.
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount));
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "mortgage-calculator" }, /*#__PURE__*/
    React.createElement("form", { className: "mortgage-calculator-form", onSubmit: onSubmit }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("label", null, "Loan Amount:",
    " ", /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      name: "loan-amount",
      defaultValue: "100000",
      min: "1",
      required: true }))), /*#__PURE__*/



    React.createElement("div", null, /*#__PURE__*/
    React.createElement("label", null, "Loan Term (years):",
    " ", /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      name: "loan-term",
      defaultValue: "30",
      min: "1",
      required: true }))), /*#__PURE__*/



    React.createElement("div", null, /*#__PURE__*/
    React.createElement("label", null, "Interest Rate (%):",
    " ", /*#__PURE__*/
    React.createElement("input", {
      type: "number",
      name: "interest-rate",
      defaultValue: "3",
      step: "0.01",
      min: "0.01",
      required: true }))), /*#__PURE__*/



    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { type: "submit" }, "Calculate"))), /*#__PURE__*/


    React.createElement("hr", null), /*#__PURE__*/
    React.createElement("div", { "aria-live": "polite", className: "mortgage-calculator-results" }, /*#__PURE__*/
    React.createElement("div", null, "Monthly Payment Amount: ", /*#__PURE__*/
    React.createElement("strong", null, monthlyPayment)), /*#__PURE__*/

    React.createElement("div", null, "Total Payment Amount: ", /*#__PURE__*/
    React.createElement("strong", null, totalPayment)), /*#__PURE__*/

    React.createElement("div", null, "Total Interest Paid: ", /*#__PURE__*/
    React.createElement("strong", null, totalInterest)))));




};
const { useState } = React;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));