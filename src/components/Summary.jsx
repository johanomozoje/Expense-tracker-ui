export default function Summary({ budget, totalExpenses, remaining }) {
  return (
    <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
        <p className="text-sm text-black">Total Budget</p>
        <p className="text-2xl font-semibold">₦{budget || 0}</p>
      </div>

      <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
        <p className="text-sm text-black">Total Expenses</p>
        <p className="text-2xl font-semibold">₦{totalExpenses}</p>
      </div>

      <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
        <p className="text-sm text-black">Remaining Balance</p>
        <p className="text-2xl font-semibold">₦{remaining}</p>
      </div>
    </section>
  );
}
