'use server'

import { cookies } from 'next/headers'

export async function createSession() {
  const cookieStore = await cookies(); 
  
  cookieStore.set('session', 'true', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}