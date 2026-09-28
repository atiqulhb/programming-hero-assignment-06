import Image from 'next/image'
import WorkoutDetailsButtons from '@/components/WorkoutDetailsButtons'

async function getWorkoutDetails(id) {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }
  
  return res.json()
}

export default async function page({ params }) {
    const { id } = await params
    const workout = await getWorkoutDetails(id)
    const {
      name,
      image,
      muscleGroups,
      equipment,
      difficulty,
      duration,
      caloriesBurned,
      sets,
      reps,
      rating,
      description,
      instructions
    } = workout

  return (
    <div className='w-[80vw] m-auto flex gap-14'>
      <div className='flex-1 relative rounded-2xl overflow-hidden'>
        <Image src={image} fill alt={name} className='object-cover'/>
      </div>
      <div className='flex-1'>
        <h1 className='font-oswald text-4xl tracking-[-0.9] text-white mb- '>{name}</h1>
        <p className='text-[#9CA3AF] mb-5'>{description}</p>
        <div className='flex gap-2 mb-7'>
            {muscleGroups.map((mg, key) => (
                <span key={key} className='px-3.5 py-1 bg-[#CCFF00] font-semibold text-xs text-[#0F1115] rounded-full'>{mg}</span>
            ))}
        </div>
        <div className='bg-[#151922] flex flex-col border border-[#232834] rounded-2xl mb-8 '>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>EQUIPMENT</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{equipment}</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>DIFFICULTY</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{difficulty}</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>SETS</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{sets}</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>REPS</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{reps}</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>DURATION</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{duration} min</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5 border-b border-[#1E2330]'>
            <span className='font-bold text-[#9CA3AF]'>CALORIES</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{caloriesBurned} kcal</span>
          </div>
          <div className='flex items-center justify-between px-6 py-3.5'>
            <span className='font-bold text-[#9CA3AF]'>RATING</span>
            <span className='font-medium text-sm text-[#E5E7EB]'>{rating}</span>
          </div>


        </div>
        <h2 className='text-white font-extrabold tracking-[0.8px] mb-4'>INSTRUCTIONS</h2>
        <ol className='flex flex-col list-decimal list-inside gap-3 mb-9'>
          {instructions.map((instruction, key) => (
            <li key={key} className='text-sm text-[#D1D5DB]'>{instruction}</li>
          ))}
        </ol>
        <WorkoutDetailsButtons infoToBeSaved={{ id, name, image, equipment, duration, caloriesBurned, rating }}/>
      </div>
    </div>
  )
}

