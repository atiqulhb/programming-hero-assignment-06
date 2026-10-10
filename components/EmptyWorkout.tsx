import Link from 'next/link'

export default function EmptyWorkout() {
  return (
    <div className='w-full p-4 rounded-xl border border-dotted border-[#111317] flex flex-col items-center'>
        <h2 className='font-oswald font-bold text-xl text-white'>NOTHING HERE YET</h2>
        <p className='text-xs text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
        <Link href="/" className='text-xs font-semibold text-black px-6 py-3.5 bg-[#CCFF00] rounded-full'>Go to workouts</Link>
    </div>
  )
}
