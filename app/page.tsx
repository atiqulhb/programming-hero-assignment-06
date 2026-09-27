import Image from "next/image";
import Hero from '@/app/components/Hero'
import Library from '@/app/components/Library'

async function getWorkouts() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  
  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }
  
  return res.json()
}

export default async function Home() {
  const workouts = await getWorkouts()

  return (
    <main className="px-6 py-(--home-main-py)">
      <Hero/>
      <Library workouts={workouts}/>
    </main>
  );
}
