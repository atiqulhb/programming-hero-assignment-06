import WorkoutCardSkeleton from '@/components/WorkoutCardSkeleton'

export default function WorkoutsSkeleton() {
  return (
     <div className='grid grid-cols-[repeat(auto-fit,minmax(395px,1fr))] gap-6'>
        {Array.from({ length: 12 }, (_, index) => (
            <WorkoutCardSkeleton key={index} />
        ))}
    </div>
  )
}