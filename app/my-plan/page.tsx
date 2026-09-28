import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
        <h1 className='font-oswald text-white font-bold text-3xl tracking-[-0.75px]'>MY PLAN</h1>
        <p className='text-sm text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='w-full p-6 pt-8 rounded-2xl border border-[#232732] bg-[#13161D] flex'>
            <div className='flex flex-col flex-1'>
                <span className='text-xs text-[#8A92A0]'>Excercises</span>
                <span className='font-oswald font-bold text-4xl text-[#CCFF00]'>2</span>
            </div>
            <div className='flex flex-col flex-1'>
                <span className='text-xs text-[#8A92A0]'>Minutes</span>
                <span className='font-oswald font-bold text-4xl text-white'>23</span>
            </div>
            <div className='flex flex-col flex-1'>
                <span className='text-xs text-[#8A92A0]'>Calories</span>
                <span className='font-oswald font-bold text-4xl text-white'>190</span>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='bg-[#151921] border border-[#232732] rounded-xl p-1 flex items-center gap-1'>
                <button className='text-xs text-[#8A92A0] px-4 py-1.5'>Today's Plan</button>
                <button className='px-4 py-1.5 text-xs font-bold text-white bg-[#1F242D] border border-[#2B303D] rounded-lg'>Saved</button>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-xs text-[#8A92A0]'>Sort By</span>
                <select className='bg-[#13161D border border-[#232732] rounded-[9px] p-2 text-white'>
                    <option className='text-xs text-white'>Duration</option>
                </select>
            </div>
        </div>
        <div>
            <div className='w-full px-4 py-25 rounded-xl border border-dotted border-[#111317] flex flex-col items-center'>
                <h2 className='font-oswald font-bold text-xl text-white'>NOTHING HERE YET</h2>
                <p className='text-xs text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
                <Link href="/" className='text-xs font-semibold text-black px-6 py-3.5 bg-[#CCFF00] rounded-full'>Go to workouts</Link>
            </div>
        </div>
    </div>
  )
}
