'use client'

import { useWorkouts } from '@/context/WorkoutContext'
import type { WorkoutInfosToSave } from '@/types/workout'

type WorkoutDetailsButtonProps = {
  infoToBeSaved: WorkoutInfosToSave
}

export default function WorkoutDetailsButtons({ infoToBeSaved }: WorkoutDetailsButtonProps) {
  const { addToSavedWorkouts, addToTodaysPlan } = useWorkouts()

  return (
    <div className=' flex items-center gap-2 justify-center mb-10'>
      <button
        className='px-6 py-3 rounded-xl bg-[#CCFF00] flex items-center gap-2 cursor-pointer'
        onClick={() => addToTodaysPlan(infoToBeSaved)}
      >
        <img src="/addToBag.svg" width="16" alt="add to bag svg"/>
        <span className='font-extrabold text-sm text-[#0F1115]'>Add to today's plan</span>
      </button>
      <button
        className='px-6 py-3 border border-[#374151] rounded-xl flex items-center gap-2 cursor-pointer'
        onClick={() => addToSavedWorkouts(infoToBeSaved)}
      >
        <img src="/save.svg" width="16" alt="save svg"/>
        <span className='font-medium text-sm text-[#E5E7EB]'>Save for later</span>
      </button>
    </div>
  )
}