import { Clock, HeartPulse, Gauge } from 'lucide-react'

export default function Results({ items, loading, error }) {
  if (loading) return <p className="text-emerald-200">Finding recipes...</p>
  if (error) return <p className="text-red-300">{error}</p>
  if (!items || items.length === 0) return <p className="text-emerald-200/70">No recipes match yet. Try adding a few more common ingredients.</p>

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((r) => (
        <div key={r.title} className="bg-slate-800/70 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/40 transition-colors">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-white font-semibold text-lg">{r.title}</h3>
              <div className="flex items-center gap-3 text-emerald-200/80 text-sm mt-1">
                <span className="inline-flex items-center gap-1"><Clock size={14} /> {r.cooking_time_minutes} min</span>
                <span className="inline-flex items-center gap-1"><Gauge size={14} /> {r.difficulty}</span>
                {r.is_healthy && <span className="inline-flex items-center gap-1 text-emerald-400"><HeartPulse size={14} /> healthy</span>}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-emerald-200/80 text-sm">You have: {r.ingredients.filter(i => !r.missing_ingredients.includes(i)).join(', ')}</p>
            {r.missing_ingredients.length > 0 && (
              <p className="text-amber-300/80 text-xs mt-1">Missing: {r.missing_ingredients.join(', ')}</p>
            )}
          </div>

          <ol className="list-decimal list-inside text-emerald-100/90 text-sm mt-3 space-y-1">
            {r.steps.map((s, idx) => <li key={idx}>{s}</li>)}
          </ol>
        </div>
      ))}
    </div>
  )
}
