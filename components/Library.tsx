import { Suspense } from "react"
import Workouts from "@/components/Workouts"
import WorkoutsSkeleton from "@/components/WorkoutsSkeleton"
import type { Workout } from '@/types/workout'

async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')

    if (!res.ok) {
      throw new Error(`Failed to fetch workouts: ${res.status}`);
    }
    
    return res.json()
  } catch (error) {
    console.error('Getting workouts failed: ', error)
    throw error
  }
  
}

export default function Library() {
  const WorkoutsPromise = getWorkouts()
  
  return (
    <section id="library" className='px-25'>
        <h2 className='text-white font-bold text-3xl font-oswald tracking-[-0.75px]'>THE LIBRARY</h2>
        <p className='text-sm text-[#9CA3AF] mb-8'>Twelve lifts covering every major muscle group.</p>
        <Suspense fallback={<WorkoutsSkeleton/>}>
          <Workouts workoutsPromise={WorkoutsPromise}/>
        </Suspense>
    </section>
  )
}
