import { UtensilsCrossed } from 'lucide-react'

export default function Header() {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <UtensilsCrossed size={32} />
        </div>
      </div>
      <h1 className="text-3xl font-extrabold text-white tracking-tight">kollny EXPRESS</h1>
      <p className="text-emerald-200/90 mt-1">Instant recipes from what you already have</p>
    </div>
  )
}
