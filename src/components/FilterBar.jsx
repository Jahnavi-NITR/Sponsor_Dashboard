const FilterBar = ({ selectedTier, setSelectedTier }) => {
  const tiers = [
    "all",
    "platinum",
    "gold",
    "silver",
    "bronze",
    "in-kind",
  ];

  const buttonColors = {
    all: "bg-indigo-600 text-white",
    platinum: "bg-slate-300 text-slate-900",
    gold: "bg-amber-200 text-amber-900",
    silver: "bg-gray-200 text-gray-800",
    bronze: "bg-orange-200 text-orange-900",
    "in-kind": "bg-sky-200 text-sky-900",
  };

  return (
    <div className="flex flex-wrap gap-3">
      {tiers.map((tier) => (
        <button
          key={tier}
          onClick={() => setSelectedTier(tier)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedTier === tier
              ? buttonColors[tier]
              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {tier === "in-kind"
            ? "In-Kind"
            : tier.charAt(0).toUpperCase() + tier.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;