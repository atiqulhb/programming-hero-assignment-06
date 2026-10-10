'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useWorkouts } from '@/context/WorkoutContext'

export default function Nav() {
    const pathname = usePathname()
    const { savedWorkouts, todaysPlan } = useWorkouts()
 
  return (
    <nav className='w-full h-(--nav-h) px-6 flex items-center justify-between border-b border-[#1C1F26]'>
        <details className="dropdown lg:hidden">
            <summary className="btn m-1 p-0.5 rounded-sm cursor-pointer">
                <img src="/hamburger.svg" alt="menu icon"/>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm">
                <li>
                    <Link href="/" className={`${pathname === "/" ? "active-link" : "not-active-link"} text-xs`}>Workouts</Link>
                </li>
                <li>
                    <Link href="/my-plan" className={`${pathname === "/my-plan" ? "active-link" : "not-active-link"} text-xs`}>My Plan </Link>
                </li>
            </ul>
        </details>
        <Link href="/" className='flex items-center gap-2.5'>
            <img src="/logo.png"/>
            <span className='text-lg font-black font-oswald text-white leading-7 tracking-[0.9px]'>FITLOG</span>
        </Link>
        <div className='hidden md:flex items-center gap-5'>
            <Link href="/#library" className={`${pathname === "/" ? "active-link" : "not-active-link"} text-xs`}>Workouts</Link>
            <Link href="/my-plan" className={`${pathname === "/my-plan" ? "active-link" : "not-active-link"} text-xs`}>My Plan </Link>
        </div>
        <div className='flex gap-6 items-center'>
            <Link href="/my-plan">
                <div className='flex items-center gap-2'>
                    <span className='text-xs font-medium text-[#d1d5db]'>Plan</span>
                    <span className='w-5 h-5 bg-[#C2F800] rounded-full flex items-center justify-center text-[11px] font-bold text-black'>{todaysPlan.length}</span>
                </div>
            </Link>
            <Link href="/my-plan">
                <div className='flex items-center gap-2'>
                    <span className='text-xs font-medium text-[#9ca3af]'>Saved</span>
                    <span className='w-5 h-5 border border-[#2D313B] rounded-full flex items-center justify-center text-[11px] font-bold text-[#d1d5db]'>{savedWorkouts.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}
