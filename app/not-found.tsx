import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex-1'>
        <Image src="/missing.svg" alt='missing svg'/>
        <h1>404 — Missed that lift</h1>
        <p>The page you wanted is not in the library. Head back to the floor and pick a workout that exists.</p>
        <Link href="/">Back To Workouts</Link>
    </main>
  )
}
