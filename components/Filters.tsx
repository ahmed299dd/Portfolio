"use client";

interface FiltersProps {
  active: string;
  onChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "python", label: "Python" },
  { id: "trading", label: "Trading" },
];

export default function Filters({ active, onChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            active === filter.id
              ? "bg-accent text-accent-foreground"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={active === filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
