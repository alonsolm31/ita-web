import { NextResponse } from "next/server";
const stripe = require("stripe")(
  process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY
);

export async function POST(request: any) {
  let data = await request.json();
  let price_id = data.price_id;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  return NextResponse.json({ url: session.url });
}
