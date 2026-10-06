'use client'

import { useWorkouts } from "@/context/WorkoutContext"
import EmptyWorkout from '@/components/EmptyWorkout'
import WorkoutList from "./WorkoutList"
import type { SortBy } from "./PlanningAndSaving"

type TodaysPlanProps = {
  sortBy: SortBy
}

export default function TodaysPlan({ sortBy }: TodaysPlanProps) {
  
    const { todaysPlan, removeFromTodaysPlan } = useWorkouts()

    const sortedWorkouts = [...todaysPlan].sort((a, b) => {
      if (sortBy === "duration") return a.duration - b.duration
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned
      if (sortBy === "rating") return a.rating - b.rating

      return 0
    })

    return(
      <div>
        {sortedWorkouts.length === 0 ? (
          <EmptyWorkout/>
        ) : (
          <WorkoutList type="todays-plan" workoutList={sortedWorkouts} removeWorkout={removeFromTodaysPlan}/>
        )}
      </div>
  )
}
