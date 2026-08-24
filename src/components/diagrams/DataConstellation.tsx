const NODES = [
  { id: "g", label: "Генерация", x: 18, y: 22, color: "#7ee0ff" },
  { id: "h", label: "Тепло", x: 12, y: 52, color: "#c9a6ff" },
  { id: "m", label: "Рынок", x: 22, y: 82, color: "#7ee0ff" },
  { id: "f", label: "Финансы", x: 82, y: 20, color: "#f0c56e" },
  { id: "e", label: "EAM / ТОиР", x: 88, y: 50, color: "#c9a6ff" },
  { id: "o", label: "OT-историк", x: 78, y: 82, color: "#f0c56e" },
  { id: "hr", label: "Кадры", x: 50, y: 12, color: "#7ee0ff" },
  { id: "s", label: "Сбыт", x: 50, y: 90, color: "#c9a6ff" },
];

export function DataConstellation() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full min-h-[180px]"
      role="img"
      aria-label="Корпоративное хранилище данных как центр согласованных витрин"
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0c56e" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#7ee0ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7ee0ff" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {NODES.map((node) => (
        <line
          key={node.id}
          x1="50"
          y1="50"
          x2={node.x}
          y2={node.y}
          stroke={node.color}
          strokeOpacity="0.45"
          strokeWidth="0.35"
        />
      ))}
      <circle cx="50" cy="50" r="14" fill="url(#core)" className="pulse-node" filter="url(#glow)" />
      <circle cx="50" cy="50" r="7.5" fill="#0b1020" stroke="#f0c56e" strokeWidth="0.5" />
      <text
        x="50"
        y="49"
        textAnchor="middle"
        fill="#f0c56e"
        fontSize="3.2"
        fontFamily="IBM Plex Mono, monospace"
      >
        CDW
      </text>
      <text
        x="50"
        y="54"
        textAnchor="middle"
        fill="#d7e8f0"
        fontSize="2.4"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        хранилище
      </text>
      {NODES.map((node, i) => (
        <g key={node.id} className="pulse-node" style={{ animationDelay: `${i * 0.25}s` }}>
          <circle cx={node.x} cy={node.y} r="2.2" fill={node.color} filter="url(#glow)" />
          <text
            x={node.x}
            y={node.y + 5.5}
            textAnchor="middle"
            fill="#d7e8f0"
            fontSize="2.6"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
