import Image from 'next/image'

export default function WorkoutCard({ info }) {
    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = info
  return (
    <div className='bg-[#15171D] border border-[#222630] rounded-2xl flex flex-col overflow-hidden'>
        <div className='w-full h-50 relative'>
            <Image src={image} fill objectFit='cover' alt={name}/>
        </div>
        <div className='p-6'>
            <div className='flex gap-2'>
                {muscleGroups.map((mg, key) => (
                    <span key={key} className='px-2.5 py-0.5 bg-[#C2F800] font-bold text-[11px] tracking-[0.55px] rounded-full'>{mg}</span>
                ))}
            </div>
            <h2 className='font-oswald font-bold text-lg tracking-[#0.45px] my-1 text-white'>{name}</h2>
            <span className='text-[#9CA3AF]'>{equipment}</span>
            <div className='flex items-center gap-4 pt-3 mt-4 border-t border-[#20242E]'>
                <div className='flex items-center gap-1.5'>
                    <img src="/clock.svg" width="14" alt="clock svg"/>
                    <span className='text-xs text-[#9CA3AF]'>{duration} min</span>
                </div>
                <div className='flex items-center gap-1.5'>
                    <img src="/fire.svg" width="14" alt="fire svg"/>
                    <span className='text-xs text-[#9CA3AF]'>{caloriesBurned} kcal</span>
                </div>
                <div className='flex items-center gap-1.5'>
                    <img src="/star.svg" width="14" alt="star svg"/>
                    <span className='text-xs text-[#9CA3AF]'>{rating}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
