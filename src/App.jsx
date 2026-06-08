import { useState } from "react";
import SponsorCard from "./components/SponsorCard";
import FilterBar from "./components/FilterBar";
import StatCard from "./components/StatCard";
import sponsorsData from "./data/sponsors.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState("all");

  const filteredSponsors = sponsorsData.filter((sponsor) => {
    const matchesSearch = sponsor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTier =
      selectedTier === "all"
        ? true
        : sponsor.tier === selectedTier;

    return matchesSearch && matchesTier;
  });

  const totalFunds = filteredSponsors.reduce(
    (sum, sponsor) => sum + sponsor.amount,
    0
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Hackathon Sponsor Dashboard
        </h1>

        <StatCard totalFunds={totalFunds} />

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search sponsors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-xl border outline-none"
          />
        </div>

        <div className="mt-5">
          <FilterBar
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
          />
        </div>

        {filteredSponsors.length === 0 ? (
          <div className="bg-white p-8 rounded-xl mt-8 text-center">
            No sponsors match the current filters.
          </div>
        ) : (
          <div className="grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;