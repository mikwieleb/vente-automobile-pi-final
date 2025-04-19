// Initialiser le SDK Pi
window.addEventListener("load", function () {
  Pi.init({ version: "2.0" });

  // Bouton Paiement
  const payBtn = document.getElementById("payButton");
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

  // Bouton Application
  const appBtn = document.getElementById("appButton");
  appBtn.addEventListener("click", function () {
    alert("Bienvenue dans l'application VenteAuto.Pi !");
  });
});
