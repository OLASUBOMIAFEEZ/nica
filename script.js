// Initialize Stripe
const stripe = Stripe("your-stripe-publishable-key");

document.getElementById("checkout-button").addEventListener("click", () => {
    fetch("/create-checkout-session", { method: "POST" })
        .then(response => response.json())
        .then(session => {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .catch(error => console.error("Error:", error));
});
