'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"

export default function TodaysPlan({ sortBy }) {
  
    const { todaysPlan, removeFromTodaysPlan } = useWorkouts()

    if (sortBy === "duration") todaysPlan.sort((a, b) => a.duration - b.duration)
    if (sortBy === "calories") todaysPlan.sort((a, b) => a.caloryBurned - b.caloryBurned)
    if (sortBy === "rating") todaysPlan.sort((a, b) => a.rating - b.rating)
    
    return(
      <div>
        {todaysPlan.length === 0 ? (
          <EmptyWorkout/>
        ) : (
          <WorkoutList type="todays-plan" workoutList={todaysPlan} removeWorkout={removeFromTodaysPlan}/>
        )}
      </div>
  )
}
