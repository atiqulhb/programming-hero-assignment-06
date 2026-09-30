'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"

export default function SavedWorkout({ sortBy }) {
    const { savedWorkouts, removeFromSavedWorkouts } = useWorkouts()

    if (sortBy === "duration") savedWorkouts.sort((a, b) => a.duration - b.duration)
    if (sortBy === "calories") savedWorkouts.sort((a, b) => a.caloryBurned - b.caloryBurned)
    if (sortBy === "rating") savedWorkouts.sort((a, b) => a.rating - b.rating)
    
    return(
      <div>
        {savedWorkouts.length === 0 ? (
          <EmptyWorkout/>
        ) : (
          <WorkoutList workoutList={savedWorkouts} removeWorkout={removeFromSavedWorkouts}/>
        )}
      </div>
  )
}

