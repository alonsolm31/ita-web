// path: /api/payment/services/payment.js
module.exports = {
  async createPaymentIntent(amount, currency) {
    const stripe = require("stripe")(
      process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return paymentIntent;
  },
};
4;
