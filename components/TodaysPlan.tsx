'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"
import type { SortBy } from "./PlanningAndSaving"

type TodaysPlanProps = {
  sortBy: SortBy
}

export default function TodaysPlan({ sortBy }: TodaysPlanProps) {
  const {isInitialized, todaysPlan, removeFromTodaysPlan } = useWorkouts()

  if (!isInitialized) return <p className='font-oswald font-bold text-xl text-white text-center'>Loading workouts…</p>

  if (todaysPlan.length === 0) return <EmptyWorkout/>

  const sortedWorkouts = [...todaysPlan].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned
    if (sortBy === "rating") return a.rating - b.rating

    return 0
  })

  return <WorkoutList type="todays-plan" workoutList={sortedWorkouts} removeWorkout={removeFromTodaysPlan}/>
}
