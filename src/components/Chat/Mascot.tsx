import "./Mascot.css"

type Props = {
  talking?: boolean
  size?: number
}

// Mascotte "Shell" en pixel art. Les yeux et la bouche sont des calques séparés,
// animés en CSS : les yeux clignent tout le temps, la bouche bouge quand talking = true.
export default function Mascot({ talking = false, size = 80 }: Props) {
  return (
    <span className={`mascot ${talking ? "mascot--talking" : ""}`} style={{ width: size, height: size }}>
      {talking && (
        <span className="mascot__bubble" aria-hidden="true">
          <i /><i /><i />
        </span>
      )}
      <svg viewBox="0 0 32 32" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true">
        <g className="mascot__body">
      <path fill="#1b1424" d="M5 3h22v1h-22zM4 4h1v1h-1zM27 4h1v1h-1zM3 5h1v1h-1zM28 5h1v1h-1zM3 6h1v1h-1zM28 6h1v1h-1zM3 7h1v1h-1zM28 7h1v1h-1zM3 8h1v1h-1zM28 8h1v1h-1zM3 9h1v1h-1zM28 9h1v1h-1zM3 10h1v1h-1zM28 10h1v1h-1zM3 11h1v1h-1zM28 11h1v1h-1zM3 12h1v1h-1zM28 12h1v1h-1zM3 13h1v1h-1zM28 13h1v1h-1zM1 14h3v1h-3zM28 14h3v1h-3zM0 15h1v1h-1zM31 15h1v1h-1zM0 16h1v1h-1zM31 16h1v1h-1zM1 17h3v1h-3zM28 17h3v1h-3zM3 18h1v1h-1zM28 18h1v1h-1zM3 19h1v1h-1zM28 19h1v1h-1zM3 20h1v1h-1zM28 20h1v1h-1zM3 21h1v1h-1zM28 21h1v1h-1zM3 22h1v1h-1zM28 22h1v1h-1zM3 23h1v1h-1zM28 23h1v1h-1zM3 24h1v1h-1zM28 24h1v1h-1zM4 25h1v1h-1zM27 25h1v1h-1zM5 26h4v1h-4zM12 26h8v1h-8zM23 26h4v1h-4zM8 27h1v1h-1zM12 27h1v1h-1zM19 27h1v1h-1zM23 27h1v1h-1zM9 28h3v1h-3zM20 28h3v1h-3z" />
      <path fill="#2e3446" d="M5 4h22v1h-22zM4 5h3v1h-3zM9 5h1v1h-1zM12 5h1v1h-1zM15 5h13v1h-13zM4 6h3v1h-3zM9 6h1v1h-1zM12 6h1v1h-1zM15 6h13v1h-13zM4 7h24v1h-24zM1 15h3v1h-3zM28 15h3v1h-3zM1 16h3v1h-3zM28 16h3v1h-3zM9 26h3v1h-3zM20 26h3v1h-3zM9 27h3v1h-3zM20 27h3v1h-3z" />
      <path fill="#ff6b6b" d="M7 5h2v1h-2zM7 6h2v1h-2z" />
      <path fill="#fcc419" d="M10 5h2v1h-2zM10 6h2v1h-2z" />
      <path fill="#51cf66" d="M13 5h2v1h-2zM13 6h2v1h-2z" />
      <path fill="#1e2230" d="M4 8h24v1h-24zM4 9h24v1h-24zM4 10h24v1h-24zM4 11h24v1h-24zM4 12h24v1h-24zM4 13h24v1h-24zM4 14h24v1h-24zM4 15h3v1h-3zM9 15h14v1h-14zM25 15h3v1h-3zM4 16h24v1h-24zM4 17h24v1h-24zM4 18h24v1h-24zM4 19h24v1h-24zM4 20h24v1h-24zM4 21h24v1h-24zM4 22h24v1h-24zM4 23h24v1h-24zM4 24h1v1h-1zM27 24h1v1h-1zM5 25h22v1h-22z" />
      <path fill="#ff7b8a" d="M7 15h2v1h-2zM23 15h2v1h-2z" />
      <path fill="#161924" d="M5 24h22v1h-22z" />
        </g>
        <g className="mascot__eyes-open">
      <path fill="#a7f3c0" d="M10 10h1v1h-1zM19 10h1v1h-1z" />
      <path fill="#ffffff" d="M11 10h1v1h-1zM20 10h1v1h-1z" />
      <path fill="#4ade80" d="M12 10h1v1h-1zM21 10h1v1h-1zM10 11h3v1h-3zM19 11h3v1h-3zM10 12h3v1h-3zM19 12h3v1h-3zM10 13h3v1h-3zM19 13h3v1h-3z" />
        </g>
        <g className="mascot__eyes-closed">
      <path fill="#4ade80" d="M10 12h3v1h-3zM19 12h3v1h-3z" />
        </g>
        <g className="mascot__mouth-closed">
      <path fill="#4ade80" d="M12 16h1v1h-1zM13 17h1v1h-1zM14 18h1v1h-1zM13 19h1v1h-1zM12 20h1v1h-1zM16 20h4v1h-4z" />
        </g>
        <g className="mascot__mouth-open">
      <path fill="#4ade80" d="M13 16h6v1h-6zM12 17h1v1h-1zM19 17h1v1h-1zM12 18h1v1h-1zM19 18h1v1h-1zM12 19h1v1h-1zM19 19h1v1h-1zM12 20h1v1h-1zM19 20h1v1h-1zM13 21h6v1h-6z" />
      <path fill="#0b0d14" d="M13 17h6v1h-6zM13 18h6v1h-6zM13 19h1v1h-1zM18 19h1v1h-1zM13 20h1v1h-1zM18 20h1v1h-1z" />
      <path fill="#ff7b8a" d="M14 19h4v1h-4zM14 20h4v1h-4z" />
        </g>
      </svg>
    </span>
  )
}
