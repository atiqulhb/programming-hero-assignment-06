'use client'

import { useState, useEffect } from 'react'
import SavedWorkout from './SavedWorkout'
import TodaysPlan from './TodaysPlan'
import { useWorkouts } from '@/context/WorkoutContext'

export default function PlanningAndSaving() {
    const { savedWorkouts, todaysPlan } = useWorkouts()
    const [tab, setTab] = useState('todays-plan')
    const [sortBy, setSortBy] = useState('duration')
    const [savedExcerciseInfo, setSavedExcerciseInfo] = useState({
        length: 0,
        totalDuration: 0,
        totalCaloriesBurned: 0
    })

    useEffect(() => {
        const workouts = tab === "todays-plan" ? todaysPlan : savedWorkouts

        const length = workouts.length
        const total = workouts.reduce((acc, workout) => {
            acc.duration += workout.duration
            acc.caloriesBurned += workout.caloriesBurned

            return acc
        }, { duration: 0, caloriesBurned: 0 })

        setSavedExcerciseInfo({
            length,
            totalDuration: total.duration,
            totalCaloriesBurned: total.caloriesBurned
        })
        
    }, [tab, savedWorkouts, todaysPlan])
  return (
    <div>
        <div className='w-full p-6 pt-8 rounded-2xl border border-[#232732] bg-[#13161D] flex items-center gap-8 my-6'>
            <div className='flex flex-col flex-1 border-r border-[#232732]'>
                <span className='text-xs text-[#8A92A0]'>Excercises</span>
                <span className='font-oswald font-bold text-4xl text-[#CCFF00]'>{savedExcerciseInfo.length}</span>
            </div>
            <div className='flex flex-col flex-1 border-r border-[#232732]'>
                <span className='text-xs text-[#8A92A0]'>Minutes</span>
                <span className='font-oswald font-bold text-4xl text-white'>{savedExcerciseInfo.totalDuration}</span>
            </div>
            <div className='flex flex-col flex-1'>
                <span className='text-xs text-[#8A92A0]'>Calories</span>
                <span className='font-oswald font-bold text-4xl text-white'>{savedExcerciseInfo.totalCaloriesBurned}</span>
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
            <div className='flex items-center gap-3'>
                <span className='text-xs text-[#8A92A0]'>Sort By</span>
                <select
                    className='bg-[#13161D] border border-[#232732] rounded-[9px] p-2 text-white cursor-pointer'
                    onClick={(e) => setSortBy(e.target.value)}
                >
                    <option className='text-xs bg-[#13161D] rounded-[9px] p-2 text-white cursor-pointer' value="duration">Duration</option>
                    <option className='text-xs bg-[#13161D] rounded-[9px] p-2 text-white' value="calories">Calories</option>
                    <option className='text-xs text-white' value="rating">Rating</option>
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
