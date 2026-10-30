import { MAP, project } from '../../data/bdMap'
import { exploreRegions } from '../../data/explore'

// Where a region's name reads best (Islamabad is tiny, so its name sits beside it)
const LABEL = { islamabad: { cx: 392, cy: 122 }, kp: { cx: 262, cy: 92 }, gb: { cx: 372, cy: 52 }, punjab: { cx: 300, cy: 215 } }
const SHORT = { kp: 'Khyber Pakhtunkhwa', gb: 'Gilgit-Baltistan' }
// regions too small to tap on their own; their name sits outside them (LABEL) and is the tap target
const TINY = new Set(['islamabad'])

/** City dots at their true positions, unless they are bunched together (Islamabad's places are a few pixels apart):
 *  then they fan out on a small circle around their centre, each with a leader line back to its real spot (tx, ty). */
function spread(cities) {
  const pts = cities.map((c) => {
    const [x, y] = project(c.lon, c.lat)
    return { c, x, y, tx: x, ty: y }
  })
  if (pts.length < 2) return pts
  const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y)
  if (Math.max(...xs) - Math.min(...xs) > 24 || Math.max(...ys) - Math.min(...ys) > 24) return pts
  const mx = xs.reduce((a, v) => a + v, 0) / pts.length, my = ys.reduce((a, v) => a + v, 0) / pts.length
  const R = 34
  return pts.map((p, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / pts.length
    return { ...p, x: mx + R * Math.cos(a), y: my + R * Math.sin(a) }
  })
}

/** Pakistan's regions as a tappable map. Locked ones are grey; stamped ones carry a tick. Azad Kashmir (MAP.other) is plain grey. */
export default function BdMap({ selected, onSelect, unlocked, stamped, cities = [], activeCity, onCity, labels = true, tint = {} }) {
  return (
    <svg viewBox={`0 0 ${MAP.width} ${MAP.height}`} className="mx-auto w-full max-w-sm drop-shadow-sm" role="group" aria-label="Map of Pakistan">
      {Object.entries(MAP.other ?? {}).map(([id, o]) => <path key={id} d={o.d} fill="#E4E4DE" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />)}
      {exploreRegions.map((r) => {
        const geo = { ...MAP.divisions[r.id], ...(LABEL[r.id] ?? {}) }
        const open = unlocked(r)
        const sel = selected === r.id
        return (
          <g key={r.id} onClick={() => onSelect(r)} className="cursor-pointer" role="button" tabIndex={0} aria-label={`${r.name}${open ? '' : ' (locked)'}`} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(r)}>
            <path d={geo.d} fill={tint[r.id] ?? (open ? r.color : '#CFCFC8')} fillOpacity={sel || tint[r.id] ? 1 : 0.72} stroke="#fff" strokeWidth={sel ? 3 : 1.6} strokeLinejoin="round" className="transition-all hover:fill-opacity-100" />
            {TINY.has(r.id) && (
              <>
                {/* too small to tap: a bigger invisible target over it, and a leader line to its label */}
                <line x1={MAP.divisions[r.id].cx} y1={MAP.divisions[r.id].cy} x2={geo.cx - 30} y2={geo.cy - 4} stroke="#2D2D2D" strokeWidth="1" />
                <circle cx={MAP.divisions[r.id].cx} cy={MAP.divisions[r.id].cy} r="14" fill="transparent" />
                <rect x={geo.cx - 34} y={geo.cy - 14} width="68" height="34" fill="transparent" />
              </>
            )}
            {labels && (
              <>
            <text x={geo.cx} y={geo.cy} textAnchor="middle" fontSize={r.id === 'islamabad' || r.id === 'gb' || r.id === 'kp' ? 12 : 15} fontWeight="800" fill={TINY.has(r.id) ? (open ? r.color : '#8A8A84') : '#fff'} stroke={TINY.has(r.id) ? '#fff' : 'rgba(0,0,0,.35)'} strokeWidth={TINY.has(r.id) ? 3 : 0.6} paintOrder="stroke" style={{ pointerEvents: 'none' }}>
              {SHORT[r.id] ?? r.name}
            </text>
            <text x={geo.cx} y={geo.cy + 17} textAnchor="middle" fontSize="13" style={{ pointerEvents: 'none' }}>
              {open ? (stamped(r) ? '✅' : '') : '🔒'}
            </text>
              </>
            )}
          </g>
        )
      })}
      {spread(cities).map(({ c, x, y, tx, ty }) => {
        const on = activeCity === c.id
        return (
          <g key={c.id} onClick={() => onCity?.(c)} className="cursor-pointer">
            {(tx !== x || ty !== y) && <><line x1={tx} y1={ty} x2={x} y2={y} stroke="#0F6E4F" strokeWidth="1.5" /><circle cx={tx} cy={ty} r="2.5" fill="#0F6E4F" /></>}
            <circle cx={x} cy={y} r={on ? 9 : 6} fill={on ? '#F4A324' : '#fff'} stroke="#0F6E4F" strokeWidth="2.5" />
            <text x={x} y={y - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#2D2D2D" stroke="#fff" strokeWidth="3" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
              {c.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
