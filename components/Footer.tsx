import Image from 'next/image'

export default function Footer() {
  return (
    <div className='px-6 py-8 border-t border-[#1B1F28] flex items-center justify-between'>
        <div className='flex gap-2'>
            <Image src="/logo.png" width={20} height={20} alt="fitlog logo"/>
            <span className='font-oswald text-sm font-bold tracking-[0.7px] text-white'>FITLOG</span>
        </div>
        <p className='text-xs font-medium text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  )
}
