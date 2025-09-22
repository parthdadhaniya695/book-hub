import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20'
})

// Convert a decimal amount to the smallest currency unit integer
export function formatAmountForStripe(amount: number, currency: string): number {
  // Stripe expects integer amounts: e.g. $10.99 -> 1099
  const multiplier = 100
  return Math.round(amount * multiplier)
}
