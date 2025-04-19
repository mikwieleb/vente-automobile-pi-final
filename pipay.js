// Initialisation du SDK Pi Network
Pi.init({ version: "2.0", sandbox: true });

// Fonction de paiement
document.getElementById("payButton").addEventListener("click", async () => {
  try {
    const payment = await Pi.createPayment({
      amount: 0.001,
      memo: "Paiement testnet pour VenteAuto",
      metadata: { type: "test-payment" }
    });

    payment.onReadyForServerApproval(async (paymentId) => {
      console.log("Prêt pour approbation :", paymentId);
      // Ici tu pourrais appeler ton serveur pour approuver le paiement si tu en as un
      payment.approve();
    });

    payment.onReadyForServerCompletion((paymentId, txid) => {
      console.log("Paiement complété :", paymentId, txid);
    });

    payment.onCancel(() => {
      console.log("Paiement annulé par l'utilisateur");
    });

    payment.onError((error) => {
      console.error("Erreur de paiement :", error);
    });
  } catch (err) {
    console.error("Erreur lors de la création du paiement :", err);
  }
});

// Bouton "Ouvrir l'application"
document.getElementById("appButton").addEventListener("click", () => {
  window.location.href = "https://vente-automobile-pi-g6hd.vercel.app";
});
