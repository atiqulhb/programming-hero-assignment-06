export default function WorkoutCardSkeleton() {
    return (
        <div className='bg-[#15171D] border border-[#222630] rounded-2xl flex flex-col'>
            <div className='skeleton w-full h-50'/>
            <div className='p-6'>
                <div className='flex gap-2'>
                    <span className='skeleton h-5 w-15 px-2.5 py-0.5 bg-[#C2F800] rounded-full'/>
                    <span className='skeleton h-5 w-15 px-2.5 py-0.5 bg-[#C2F800] rounded-full'/>
                </div>
                <div className='skeleton h-5 w-50 bg-white rounded-full mt-4 mb-2'/>
                <div className='skeleton h-4 w-50 bg-[#9CA3AF] rounded-full'/>
                <div className='flex items-center gap-4 pt-3 mt-4 border-t border-[#20242E]'>
                    <div className='skeleton h-4 w-15 bg-[#9CA3AF] rounded-full'/>
                    <div className='skeleton h-4 w-15 bg-[#9CA3AF] rounded-full'/>
                    <div className='skeleton h-4 w-15 bg-[#9CA3AF] rounded-full'/>
                </div>
            </div>
        </div>
    )
}