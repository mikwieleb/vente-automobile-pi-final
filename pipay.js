// Initialisation du SDK Pi en mode testnet
Pi.init({
  version: "2.0",
  sandbox: true, // très important pour testnet
});

function payer() {
  Pi.createPayment(
    {
      amount: 0.001,
      memo: "Paiement test VenteAuto",
      metadata: { action: "paiement_test" }
    },
    {
      onReadyForServerApproval: function (paymentId) {
        console.log("Paiement prêt à être approuvé côté serveur :", paymentId);
      },
      onReadyForServerCompletion: function (paymentId, txid) {
        console.log("Paiement prêt pour finalisation :", paymentId, txid);
      },
      onCancel: function (paymentId) {
        console.log("Paiement annulé :", paymentId);
      },
      onError: function (error, paymentId) {
        console.error("Erreur pendant le paiement :", error, paymentId);
      }
    }
  );
}
