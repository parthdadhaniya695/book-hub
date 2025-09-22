import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import React from 'react'
import CancelHoldButton from './cancel-hold-button'
import PlaceHoldButton from './place-hold-button'

async function HoldButton({ book_id }: { book_id: number }) {
  const session = await auth()

  // ✅ Make sure there is a logged-in user
  if (!session?.user?.id) return null

  // ✅ Convert the session id to a number
  const userId = Number(session.user.id)
  if (Number.isNaN(userId)) {
    console.error('Session user.id is not a number', session.user.id)
    return null
  }

  // ✅ Query Prisma with correct types
  const reservation = await prisma.reservations.findFirst({
    where: {
      book_id: book_id, // number
      user_id: userId,  // number
    },
  })

  return (
    <>
      {reservation ? (
        <CancelHoldButton reservation_id={reservation.reservation_id} />
      ) : (
        <PlaceHoldButton book_id={book_id} />
      )}
    </>
  )
}

export default HoldButton
