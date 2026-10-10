import Image from 'next/image'

export default function Hero() {
  return (
    <section className='min-h-[calc(100dvh-var(--nav-h)-var(--home-main-py))] lg:p-14 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
        <div className='flex-1 flex flex-col gap-5 items-start'>
            <span className='font-bold text-[11px] text-[#C2F800] leading-[16.5px] tracking-[1.1px] uppercase'>WORKOUT LIBRARY</span>
            <h1 className='text-6xl font-oswald font-extrabold leading-15 tracking-[-1.5px] text-white uppercase'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
            <p className='text-[#9ca3af] w-[75%]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
            <div>
              <a href="#library" className="text-xs font-bold px-6 py-3 rounded-md bg-[#C2F800] shrink-0">BROWSE WORKOUTS</a>
            </div> 
        </div>
        <div className='flex-1 flex-center'>
          <div className='w-full aspect-4/3 lg:aspect-5/4 relative'>
            <Image src="/banner.png" alt="fitlog banner" sizes="(max-width: 768px) 100vw, 33vw"  fill priority className='object-contain'/>
          </div>
        </div>
        
    </section>
  )
}
