import { use } from 'react'
import Link from 'next/link'
import WorkoutCard from '@/components/WorkoutCard'
import type { Workout } from '@/types/workout'

type WorkoutsProps = {
  workoutsPromise: Promise<Workout[]>
}

export default function Workouts({ workoutsPromise }: WorkoutsProps) {
    const workouts = use(workoutsPromise)

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6'>
        {workouts.map(workout => (
          <Link key={workout.id} href={`/workout-details/${workout.id}`}>
            <WorkoutCard info={workout}/>
          </Link>
        ))}
    </div>
  )
}
