export default function Filters({ healthyOnly, setHealthyOnly, difficulty, setDifficulty }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex items-center gap-2 bg-slate-800/60 border border-emerald-500/20 rounded-lg px-3 py-2">
        <input id="healthy" type="checkbox" checked={healthyOnly} onChange={(e) => setHealthyOnly(e.target.checked)} className="accent-emerald-500" />
        <label htmlFor="healthy" className="text-emerald-200">Healthy options only</label>
      </div>

      <div className="flex items-center gap-2 bg-slate-800/60 border border-emerald-500/20 rounded-lg px-3 py-2">
        <label htmlFor="difficulty" className="text-emerald-200">Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="flex-1 bg-transparent text-white border border-emerald-500/30 rounded px-2 py-1"
        >
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  )
}
