import { cn } from "@/lib/utils";

type Node = { id: string; x: number; y: number; label: string; r?: number };

const nodes: Node[] = [
  { id: "s1", x: 40, y: 60, label: "Sensor" },
  { id: "s2", x: 40, y: 150, label: "Machine" },
  { id: "s3", x: 40, y: 240, label: "Vehicle" },
  { id: "s4", x: 40, y: 330, label: "Meter" },
  { id: "gw", x: 170, y: 195, label: "Gateway", r: 9 },
  { id: "cloud", x: 300, y: 120, label: "Cloud", r: 11 },
  { id: "data", x: 300, y: 275, label: "Data", r: 9 },
  { id: "ai", x: 425, y: 195, label: "Intelligence", r: 10 },
  { id: "dash", x: 550, y: 125, label: "Dashboard", r: 9 },
  { id: "biz", x: 550, y: 275, label: "Business Action", r: 9 },
];

const edges: [string, string][] = [
  ["s1", "gw"],
  ["s2", "gw"],
  ["s3", "gw"],
  ["s4", "gw"],
  ["gw", "cloud"],
  ["gw", "data"],
  ["cloud", "ai"],
  ["data", "ai"],
  ["ai", "dash"],
  ["ai", "biz"],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

export function IoTNetwork({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 640 400"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of the Genbytez data path: sensors, machines, vehicles and meters send data through a gateway to the cloud, into data and intelligence layers, and finally into dashboards and business action."
      >
        <defs>
          <linearGradient id="gb-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="gb-halo">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="text-primary">
          {/* connection lines */}
          {edges.map(([a, b], i) => {
            const A = byId(a);
            const B = byId(b);
            const mx = (A.x + B.x) / 2;
            const d = `M ${A.x} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x} ${B.y}`;
            return (
              <g key={`${a}-${b}`}>
                <path d={d} stroke="url(#gb-edge)" strokeWidth="1.2" fill="none" />
                <path
                  d={d}
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="4 216"
                  style={{ animation: `gb-dash ${3 + (i % 4) * 0.7}s linear ${i * 0.35}s infinite` }}
                />
              </g>
            );
          })}

          {/* nodes */}
          {nodes.map((n, i) => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={(n.r ?? 7) * 3.4} fill="url(#gb-halo)" />
              <circle
                cx={n.x}
                cy={n.y}
                r={(n.r ?? 7) + 5}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1"
                style={{ animation: `gb-pulse ${2.6 + (i % 5) * 0.4}s ease-in-out ${i * 0.2}s infinite`, transformOrigin: `${n.x}px ${n.y}px` }}
              />
              <circle cx={n.x} cy={n.y} r={n.r ?? 7} fill="currentColor" fillOpacity="0.9" />
              <circle cx={n.x} cy={n.y} r={(n.r ?? 7) / 2.4} className="fill-background" />
            </g>
          ))}
        </g>

        {/* labels */}
        <g className="fill-current font-mono" style={{ fontSize: 10, letterSpacing: "0.12em" }}>
          {nodes.map((n) => (
            <text
              key={n.id}
              x={n.x}
              y={n.y + (n.r ?? 7) + 20}
              textAnchor="middle"
              className="fill-muted-foreground uppercase"
            >
              {n.label}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
