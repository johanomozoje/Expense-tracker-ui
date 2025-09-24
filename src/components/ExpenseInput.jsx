export default function ExpenseInput({
  title,
  amount,
  onChangeTitle,
  onChangeAmount,
  onAdd,
}) {
  return (
    <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
      <h2 className="text-lg font-semibold">Expense Input</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onChangeAmount(e.target.value)}
          className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
        />
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      >
        Add Expense
      </button>
    </section>
  );
}
