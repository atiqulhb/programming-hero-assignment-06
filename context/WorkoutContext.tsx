'use client'

import { createContext, useContext, useEffect, useState } from "react"
import type { WorkoutInfosToSave } from '@/types/workout'
import { toast } from 'sonner'

type WorkoutContextType = {
    savedWorkouts: WorkoutInfosToSave[]
    todaysPlan: WorkoutInfosToSave[]
    addToSavedWorkouts: (workout: WorkoutInfosToSave) => void
    removeFromSavedWorkouts: (id: string) => void
    addToTodaysPlan: (workout: WorkoutInfosToSave) => void
    removeFromTodaysPlan: (id: string) => void
    markAsDone: (id: string) => void
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState<boolean>(false)
    const [savedWorkouts, setSavedWorkouts] = useState<WorkoutInfosToSave[]>([])
    const [todaysPlan, setTodaysPlan] = useState<WorkoutInfosToSave[]>([])

    useEffect(() => {
        const saved = localStorage.getItem("saved-workouts")
        const plan = localStorage.getItem("todays-plan")

        console.log(saved)

        if (saved) {
            setSavedWorkouts(JSON.parse(saved))
        }

        if (plan) {
            setTodaysPlan(JSON.parse(plan))
        }

        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("saved-workouts", JSON.stringify(savedWorkouts))
        }
        
    }, [savedWorkouts])

     useEffect(() => {
        if (mounted) {
            localStorage.setItem("todays-plan", JSON.stringify(todaysPlan))
        }
    }, [todaysPlan])

    function addToSavedWorkouts(workout: WorkoutInfosToSave) {
        const doesExist = savedWorkouts.some((w) => w.id === workout.id)

        if (doesExist) {
            toast.error('Already in your saved list')
        } else {
            setSavedWorkouts((current) => [...current, workout])
            toast.success('Saved for later')
        }
    }

    function removeFromSavedWorkouts(id: string) {
        const doesExist = savedWorkouts.some((workout) => workout.id === id)
        
        if (doesExist) {
            setSavedWorkouts((current) => current.filter((workout) => workout.id !== id))
            toast.success('Removed from saved')
        }
    }

     function addToTodaysPlan(workout: WorkoutInfosToSave) {
        const doesExist = todaysPlan.some((w) => w.id === workout.id)

        if (doesExist) {
            toast.error('Already in your plan')
        } else {
            setTodaysPlan((current) => [...current, workout])
            toast.success('Added to todays plan')
        }
    }

    function removeFromTodaysPlan(id: string) {
        const doesExist = todaysPlan.some((workout) => workout.id === id)
        
        if (doesExist) {
            setTodaysPlan((current) => current.filter((workout) => workout.id !== id))
            toast.success('Removed from todays plan')
        }
    }

    function markAsDone(id: string) {
        setTodaysPlan((current) => current.filter((workout) => workout.id !== id))
        toast.success('Workout logged - Nice Work')
    }

    return (
        <WorkoutContext.Provider value={{ savedWorkouts, todaysPlan, addToSavedWorkouts, removeFromSavedWorkouts, addToTodaysPlan, removeFromTodaysPlan, markAsDone }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export function useWorkouts() {
    const context = useContext(WorkoutContext)
    
    if (!context) {
        throw new Error("useWorkouts must be used inside WorkoutProvider")
    }

    return context
}