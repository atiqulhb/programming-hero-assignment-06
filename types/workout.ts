export type Difficulty = "Beginner" | "Intermediate" | "Advanced"

export type Workout = {
    id: string
    name: string
    image: string
    muscleGroups: string[]
    equipment: string
    difficulty: Difficulty
    duration: number
    caloriesBurned: number
    sets: number
    reps: string
    rating: number
    description: string
    instructions: string[]
}

export type WorkoutInfosToSave = Pick <
    Workout,
     'id' | 'name' | 'image' | 'equipment' | 'duration' | 'caloriesBurned' | 'rating'
>