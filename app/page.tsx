import Image from "next/image";
import Hero from '@/app/components/Hero'

export default function Home() {
  return (
    <main className="px-6 py-(--home-main-py)">
      <Hero/>
    </main>
  );
}
