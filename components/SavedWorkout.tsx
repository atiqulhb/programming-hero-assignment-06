'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"
import type { SortBy } from "./PlanningAndSaving"

type SavedWorkoutProps = {
  sortBy: SortBy
}


export default function SavedWorkout({ sortBy }: SavedWorkoutProps) {
  const {isInitialized, savedWorkouts, removeFromSavedWorkouts } = useWorkouts()

    if (!isInitialized) return <p  className='font-oswald font-bold text-xl text-white'>Loading workouts…</p>
  
    if (savedWorkouts.length === 0) return <EmptyWorkout/>

  const sortedWorkouts = [...savedWorkouts].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned
    if (sortBy === "rating") return a.rating - b.rating

    return 0
  })
  
  return <WorkoutList type="saved" workoutList={sortedWorkouts} removeWorkout={removeFromSavedWorkouts}/>
}

