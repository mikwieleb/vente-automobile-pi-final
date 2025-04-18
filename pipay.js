document.getElementById("payBtn").addEventListener("click", async function () {
  const paymentData = {
    amount: 0.001,
    memo: "Accès à l'application Vente Automobile",
    metadata: { access: "vente-auto" }
  };

  try {
    const payment = await window.Pi.createPayment(paymentData);
    console.log("Paiement initié :", payment);

    // Écouter le résultat du paiement
    payment.onReadyForServerApproval(async function (paymentId) {
      console.log("Ready for server approval:", paymentId);
      payment.approve();
    });

    payment.onReadyForServerCompletion(function (paymentId, txid) {
      console.log("Transaction complétée :", paymentId, txid);

      // Affiche le bouton pour entrer dans l'app
      document.getElementById("appAccess").style.display = "block";
    });

    payment.onCancel(function (paymentId) {
      console.log("Paiement annulé :", paymentId);
      alert("Paiement annulé.");
    });

    payment.onError(function (error, paymentId) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue pendant le paiement.");
    });

  } catch (error) {
    console.error("Erreur globale :", error);
    alert("Échec de l'initialisation du paiement.");
  }
});
