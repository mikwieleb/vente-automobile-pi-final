// Initialisation du SDK Pi
Pi.init({ version: "2.0" });

document.getElementById("payButton").addEventListener("click", function () {
  Pi.createPayment({
    amount: 0.001,
    memo: "Test paiement",
    metadata: { action: "paiement-test" }
  }).then(function (payment) {
    alert("Paiement lancé !");
  }).catch(function (error) {
    alert("Erreur : " + error.message);
  });
});

// Bouton pour "ouvrir" l'app
document.getElementById("appButton").addEventListener("click", function () {
  alert("Bienvenue dans l'application VenteAuto.Pi !");
});
