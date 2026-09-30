import React from 'react'
import PlanningAndSaving from '@/components/PlanningAndSaving'

export default function page() {

  return (
    <div className='px-12 py-10'>
        <h1 className='font-oswald text-white font-bold text-3xl tracking-[-0.75px] uppercase mb-2'>MY PLAN</h1>
        <p className='text-sm text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
        <PlanningAndSaving/>
    </div>
  )
}
