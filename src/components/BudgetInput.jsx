export default function BudgetInput({ budget, onChangeBudget }) {
  return (
    <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
      <h2 className="text-lg font-semibold">Budget Input</h2>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter amount"
          value={budget}
          onChange={(e) => onChangeBudget(e.target.value)}
          className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/40 placeholder:text-black/50"
        />
        <button
          type="button"
          // no click needed—budget updates as you type
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          onClick={() => {}}
          title="Budget updates as you type"
        >
          Set
        </button>
      </div>
    </section>
  );
}
