import { Toaster } from 'sonner'
import { Check, X } from 'lucide-react'

export default function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                classNames: {
                toast: 'w-fit! bg-[#1E2330]! border-[#9CA3AF]! text-[#E5E7EB]!'
                }
            }}
            icons={{
                success: <Check size={18} className="text-white p-0.5 bg-green-300 rounded-full"/>,
                error: <X size={20} className="text-white p-0.5 bg-red-400 rounded-full"/>
            }}
        />
    )
}
