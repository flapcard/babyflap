import butterfly from "@/assets/butterfly-small.png";

const items = Array.from({ length: 14 }).map((_, i) => ({
  left: (i * 73) % 100,
  top: (i * 47) % 100,
  size: 20 + ((i * 13) % 50),
  delay: (i % 7) * 0.6,
  dur: 5 + (i % 5),
  rot: (i * 37) % 60 - 30,
  opacity: 0.25 + ((i % 5) * 0.1),
}));

export function FloatingButterflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((b, i) => (
        <img
          key={i}
          src={butterfly}
          alt=""
          className="absolute animate-float"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            // @ts-expect-error css var
            "--r": `${b.rot}deg`,
            filter: "drop-shadow(0 4px 12px rgba(255, 220, 50, 0.3))",
          }}
        />
      ))}
    </div>
  );
}
