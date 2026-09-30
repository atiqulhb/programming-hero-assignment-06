'use client'

import { createContext, useContext, useEffect, useState } from "react"

const WorkoutContext = createContext(null)

export function WorkoutProvider({ children }) {
    const [mounted, setMounted] = useState(false)
    const [savedWorkouts, setSavedWorkouts] = useState([])
    const [todaysPlan, setTodaysPlan] = useState([])

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

    function addToSavedWorkouts(workout) {
        const doesExist = savedWorkouts.some((w) => w.id === workout.id)

        if (!doesExist) {
            setSavedWorkouts((current) => [...current, workout])
        }
    }

    function removeFromSavedWorkouts(id) {
        const doesExist = savedWorkouts.some((workout) => workout.id === id)
        
        if (doesExist) {
            setSavedWorkouts((current) => current.filter((workout) => workout.id !== id))
        }
    }

     function addToTodaysPlan(workout) {
        const doesExist = todaysPlan.some((w) => w.id === workout.id)

        if (!doesExist) {
            setTodaysPlan((current) => [...current, workout])
        }
    }

    function removeFromTodaysPlan(id) {
        const doesExist = todaysPlan.some((workout) => workout.id === id)
        
        if (doesExist) {
            setTodaysPlan((current) => current.filter((workout) => workout.id !== id))
        }
    }

    return (
        <WorkoutContext.Provider value={{ savedWorkouts, todaysPlan, addToSavedWorkouts, removeFromSavedWorkouts, addToTodaysPlan, removeFromTodaysPlan }}>
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