window.addEventListener('DOMContentLoaded', () => {
  if (window.Pi) {
    Pi.init({ version: "2.0" });
  }
});

async function payTest() {
  try {
    const payment = await window.Pi.createPayment({
      amount: 0.001,
      memo: "Paiement test VenteAutoPi",
      metadata: { type: "test" }
    });
    alert("Paiement effectué ! " + JSON.stringify(payment));
  } catch (error) {
    alert("Erreur : " + error.message);
  }
}
