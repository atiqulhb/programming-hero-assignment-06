import WorkoutCard from '@/app/components/WorkoutCard'

export default function Library({ workouts }) {
  return (
    <section className='px-25'>
        <h2 className='text-white font-bold text-3xl font-oswald tracking-[-0.75px]'>THE LIBRARY</h2>
        <p className='text-sm text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
        <div className='grid grid-cols-3 gap-6'>
          {workouts.map(workout => (
            <WorkoutCard key={workout.id} info={workout}/>
          ))}
        </div>
    </section>
  )
}
