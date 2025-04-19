Pi.init({ version: "2.0", sandbox: true });

const paymentData = {
  amount: 0.001,
  memo: "Paiement Testnet",
  metadata: { custom: "data" }
};

const payBtn = document.getElementById("payButton");

payBtn.addEventListener("click", () => {
  Pi.createPayment(paymentData)
    .then(payment => {
      return payment.complete();
    })
    .then(() => {
      alert("Paiement réussi !");
    })
    .catch(error => {
      console.error("Erreur paiement Pi:", error);
    });
});
