const SponsorCard = ({ sponsor }) => {
  const tierColors = {
    platinum: "bg-slate-300 text-slate-900",
    gold: "bg-amber-200 text-amber-900",
    silver: "bg-gray-200 text-gray-800",
    bronze: "bg-orange-200 text-orange-900",
    "in-kind": "bg-sky-200 text-sky-900",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-slate-800">
        {sponsor.name}
      </h2>

      <p className="text-sm text-slate-500 mt-1">
        {sponsor.industry}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            tierColors[sponsor.tier]
          }`}
        >
          {sponsor.tier === "in-kind"
            ? "In-Kind"
            : sponsor.tier.charAt(0).toUpperCase() +
              sponsor.tier.slice(1)}
        </span>

        <span className="font-bold text-emerald-600">
          ₹{sponsor.amount.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default SponsorCard;