import { Suspense } from "react";
import Hero from '@/components/Hero'
import Library from '@/components/Library'
import type { Workout } from '@/types/workout'



export default async function Home() {

  return (
    <main className="px-6 py-(--home-main-py)">
      <Hero/>
      <Library/>
    </main>
  );
}
