const StatCard = ({ totalFunds }) => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-violet-600 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-sm uppercase tracking-wide">
        Total Funds Secured
      </h2>

      <p className="text-3xl font-bold mt-2">
        ₹{totalFunds.toLocaleString()}
      </p>
    </div>
  );
};

export default StatCard;