import { useState } from 'react'
import { Plus, X } from 'lucide-react'

export default function IngredientInput({ onChange }) {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    const v = value.trim().toLowerCase()
    if (!v) return
    if (items.includes(v)) {
      setValue('')
      return
    }
    const next = [...items, v]
    setItems(next)
    setValue('')
    onChange?.(next)
  }

  const removeItem = (v) => {
    const next = items.filter(i => i !== v)
    setItems(next)
    onChange?.(next)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addItem()
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type an ingredient and press Enter"
          className="flex-1 bg-slate-800/60 border border-emerald-500/30 text-white rounded-lg px-3 py-2 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
        />
        <button
          onClick={addItem}
          className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} /> Add
        </button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {items.map((i) => (
            <span key={i} className="inline-flex items-center gap-1 bg-slate-800/80 border border-slate-700 text-emerald-200 px-2 py-1 rounded-full text-sm">
              {i}
              <button className="text-emerald-300/70 hover:text-emerald-200" onClick={() => removeItem(i)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
