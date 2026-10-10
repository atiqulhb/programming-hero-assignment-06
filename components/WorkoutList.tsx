import Image from 'next/image'
import Link from 'next/link'
import type { WorkoutInfosToSave } from '@/types/workout'
import { useWorkouts } from '@/context/WorkoutContext'

type WorkoutListProps = {
  type: string
  workoutList: WorkoutInfosToSave[]
  removeWorkout: (id: string) => void
}

export default function WorkoutList({ type, workoutList, removeWorkout }: WorkoutListProps) {
  const { markAsDone } = useWorkouts()
  return (
    <ul className='flex flex-col gap-4'>
        {workoutList.map((workout) => (
            <li key={workout.id}>
              <div className='w-full p-4 bg-[#14171E] border border-[#232732] rounded-2xl flex flex-col lg:flex-row gap-5 items-center justify-between'>
                <div className='flex gap-4 items-center'>
                  <div className='w-36 h-20 relative rounded-xl overflow-hidden'>
                    <Image src={workout.image} fill className='object-cover' alt={workout.name}/>
                  </div>
                  <div className='flex flex-col shrink-0'>
                    <h3 className='font-oswald font-bold tracking-[0.4px] text-white text-base uppercase'>{workout.name}</h3>
                    <p className='font-bold text-xs text-[#8A92A0] py-0.5'>{workout.equipment}</p>
                    <div className='flex items-center gap-3 mt-1.5 '>
                      <div className='flex items-center gap-1.5'>
                        <img src="/clock.svg" width="14" className='text-[#CCFF00]'/>
                        <span className='text-xs text-[#D1D5DB]'>{workout.duration} min</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src="/fire.svg" width="14" className='text-[#CCFF00]'/>
                        <span className='text-xs text-[#D1D5DB]'>{workout.caloriesBurned} kcal</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src="/star.svg"  width="14" className='text-[#CCFF00]'/>
                        <span className='text-xs text-[#D1D5DB]'>{workout.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3 '>
                  <Link href={`/workout-details/${workout.id}`}>
                    <button className='px-5 py-2.5 border rounded-full border-[#374151] text-xs text-white cursor-pointer'>View Details</button>
                  </Link>
                  {type === "todays-plan" && (
                    <button className='px-5 py-2.5 rounded-full bg-[#CCFF00] flex items-center gap-1.5 cursor-pointer'>
                      <img src="/tik.svg" width="14"/>
                      <span
                        className='font-semibold text-xs text-black'
                        onClick={() => markAsDone(workout.id)}
                      >
                        Mark as Done
                      </span>
                    </button>
                  )}
                  
                  <img
                    src="/x.svg"
                    width="16"
                    className='text-[#6B7280] cursor-pointer'
                    onClick={() => removeWorkout(workout.id)}
                  />
                </div>
              </div>
            </li>
        ))}
    </ul>
  )
}
