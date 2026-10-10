'use client'

import { useState, useEffect } from 'react'
import SavedWorkout from './SavedWorkout'
import TodaysPlan from './TodaysPlan'
import { useWorkouts } from '@/context/WorkoutContext'

type Tab = 'todays-plan' | 'saved'

export type SortBy = 'duration' | 'calories' | 'rating'

type Total = {
    length: number
    duration: number
    caloriesBurned: number
}

export default function PlanningAndSaving() {
    const { savedWorkouts, todaysPlan } = useWorkouts()
    const [tab, setTab] = useState<Tab>('todays-plan')
    const [sortBy, setSortBy] = useState<SortBy>('duration')
    const [total, setTotal] = useState<Total>({
        length: 0,
        duration: 0,
        caloriesBurned: 0
    })

    useEffect(() => {
        const workouts = tab === "todays-plan" ? todaysPlan : savedWorkouts

        const length = workouts.length
        const total = workouts.reduce((acc, workout) => {
            acc.duration += workout.duration
            acc.caloriesBurned += workout.caloriesBurned

            return acc
        }, { duration: 0, caloriesBurned: 0 })

        setTotal({
            length,
            duration: total.duration,
            caloriesBurned: total.caloriesBurned
        })
        
    }, [tab, savedWorkouts, todaysPlan])
  return (
    <div>
        <div className='w-full p-6 pt-8 rounded-2xl border border-[#232732] bg-[#13161D] flex items-center gap-8 my-6'>
            <div className='flex flex-col flex-1 border-r border-[#232732]'>
                <span className='text-xs text-[#8A92A0]'>Excercises</span>
                <span className='font-oswald font-bold text-4xl text-[#CCFF00]'>{total.length}</span>
            </div>
            <div className='flex flex-col flex-1 border-r border-[#232732]'>
                <span className='text-xs text-[#8A92A0]'>Minutes</span>
                <span className='font-oswald font-bold text-4xl text-white'>{total.duration}</span>
            </div>
            <div className='flex flex-col flex-1'>
                <span className='text-xs text-[#8A92A0]'>Calories</span>
                <span className='font-oswald font-bold text-4xl text-white'>{total.caloriesBurned}</span>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='bg-[#151921] border border-[#232732] rounded-xl p-1 flex items-center gap-1 mb-6'>
                <button
                    className={`${
                        tab === "todays-plan"
                            ? 'font-bold text-white bg-[#1F242D] border border-[#2B303D] rounded-lg'
                            : 'text-[#8A92A0]'
                    } text-xs px-4 py-1.5 cursor-pointer`}
                    onClick={() => setTab('todays-plan')}
                >
                    Today's Plan
                </button>
                <button
                    className={`${
                        tab === "saved"
                            ? 'font-bold text-white bg-[#1F242D] border border-[#2B303D] rounded-lg'
                            : 'text-[#8A92A0]'
                    } text-xs px-4 py-1.5 cursor-pointer`}
                    onClick={() => setTab('saved')}
                >
                    Saved
                </button>
            </div>
            <div className='flex gap-3 items-center'>
                <span className='text-xs text-[#8A92A0]'>Sort By</span>
                <select
                    defaultValue="Duration"
                    className="select w-50 border border-[#232732] rounded-[9px] p-2 text-white cursor-pointer"
                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                >
                    <option className='text-xs hover:bg=[#13161D] rounded-[9px] p-2 text-white cursor-pointer'>Duration</option>
                    <option className='text-xs hover:bg=[#13161D] rounded-[9px] p-2 text-white cursor-pointer'>Calories</option>
                    <option className='text-xs hover:bg=[#13161D] rounded-[9px] p-2 text-white cursor-pointer'>Rating</option>
                </select>
            </div>
        </div>
        <div>
            {
                {
                    "todays-plan": <TodaysPlan sortBy={sortBy}/>,
                    "saved": <SavedWorkout sortBy={sortBy}/>
                }[tab]
            }
        </div>
    </div>
  )
}
