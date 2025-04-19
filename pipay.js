// Initialiser le SDK Pi en mode testnet (sandbox)
Pi.init({ version: "2.0", sandbox: true });

// Événements des boutons
window.addEventListener("load", function () {
  const payBtn = document.getElementById("payButton");
  const appBtn = document.getElementById("appButton");

  if (payBtn) {
    payBtn.addEventListener("click", function () {
      Pi.createPayment({
        amount: 0.001,
        memo: "Test paiement",
        metadata: { action: "paiement-test" }
      })
        .then(function (payment) {
          alert("Paiement lancé avec succès !");
        })
        .catch(function (error) {
          alert("Erreur de paiement : " + error.message);
        });
    });
  }

  if (appBtn) {
    appBtn.addEventListener("click", function () {
      alert("Application ouverte !");
    });
  }
});
