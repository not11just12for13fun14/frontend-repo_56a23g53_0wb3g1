import { useState } from 'react'
import Header from './components/Header'
import IngredientInput from './components/IngredientInput'
import Filters from './components/Filters'
import Results from './components/Results'

function App() {
  const [ingredients, setIngredients] = useState([])
  const [healthyOnly, setHealthyOnly] = useState(false)
  const [difficulty, setDifficulty] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const search = async () => {
    setLoading(true)
    setError('')
    setRecipes([])
    try {
      const res = await fetch(`${backendBase}/api/recipes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients,
          healthy_only: healthyOnly,
          difficulty: difficulty || null,
        })
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setRecipes(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.10),transparent_40%),_radial-gradient(circle_at_80%_50%,rgba(45,212,191,0.08),transparent_35%)]"></div>

      <div className="relative max-w-3xl mx-auto px-4 py-10">
        <Header />

        <div className="bg-slate-800/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-5 shadow-xl">
          <IngredientInput onChange={setIngredients} />

          <div className="mt-4">
            <Filters
              healthyOnly={healthyOnly}
              setHealthyOnly={setHealthyOnly}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={search}
              disabled={ingredients.length === 0}
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Find recipes
            </button>
            <a href="/test" className="text-emerald-300/80 hover:text-emerald-200 text-sm self-center">Check backend status</a>
          </div>

          <div className="mt-6">
            <Results items={recipes} loading={loading} error={error} />
          </div>
        </div>

        <p className="text-center text-emerald-200/70 text-xs mt-6">Powered by a lightweight rules engine. Add more ingredients for better matches.</p>
      </div>
    </div>
  )
}

export default App
