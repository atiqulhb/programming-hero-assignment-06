import Link from 'next/link'
import WorkoutCard from '@/components/WorkoutCard'
import type { Workout } from '@/types/workout'

type LibraryProps = {
  workouts: Workout[]
}

export default function Library({ workouts }: LibraryProps) {
  return (
    <section className='px-25'>
        <h2 className='text-white font-bold text-3xl font-oswald tracking-[-0.75px]'>THE LIBRARY</h2>
        <p className='text-sm text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(395px,1fr))] gap-6'>
          {workouts.map(workout => (
            <Link key={workout.id} href={`/workout-details/${workout.id}`}>
              <WorkoutCard info={workout}/>
            </Link>
          ))}
        </div>
    </section>
  )
}
