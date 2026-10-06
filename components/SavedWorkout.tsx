'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"
import type { SortBy } from "./PlanningAndSaving"

type SavedWorkoutProps = {
  sortBy: SortBy
}


export default function SavedWorkout({ sortBy }: SavedWorkoutProps) {
    const { savedWorkouts, removeFromSavedWorkouts } = useWorkouts()

    const sortedWorkouts = [...savedWorkouts].sort((a, b) => {
      if (sortBy === "duration") return a.duration - b.duration
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned
      if (sortBy === "rating") return a.rating - b.rating

      return 0
    })
    
    return(
      <div>
        {savedWorkouts.length === 0 ? (
          <EmptyWorkout/>
        ) : (
          <WorkoutList type="saved" workoutList={sortedWorkouts} removeWorkout={removeFromSavedWorkouts}/>
        )}
      </div>
  )
}

