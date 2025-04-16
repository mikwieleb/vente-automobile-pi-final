function startPayment() {
  if (!window.Pi) {
    alert("Pi Network non détecté. Ouvre cette page dans l'application Pi Browser.");
    return;
  }

  const paymentData = {
    amount: 0.01,
    memo: "Réservation véhicule",
    metadata: { reservation: true }
  };

  Pi.createPayment(paymentData, {
    onReadyForServerApproval: (paymentId) => {
      console.log("Paiement prêt pour validation :", paymentId);
    },
    onReadyForServerCompletion: (paymentId, txid) => {
      console.log("Paiement confirmé :", paymentId, txid);
      alert("Paiement effectué !");
    },
    onCancel: (paymentId) => {
      alert("Paiement annulé.");
    },
    onError: (error, paymentId) => {
      console.error("Erreur :", error);
    }
  });
}
