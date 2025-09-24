import { useState, useEffect, useMemo } from "react";
import { CircleDollarSign, Trash2 } from "lucide-react";

function App() {
  // 🎒 Simple memories
  const [budget, setBudget] = useState(""); // how much money you have
  const [title, setTitle] = useState(""); // what you bought
  const [amount, setAmount] = useState(""); // how much it cost
  const [items, setItems] = useState([]); // list of all expenses

  // ⬇️ Read saved stuff when the page opens
  useEffect(() => {
    const b = localStorage.getItem("et:budget");
    const e = localStorage.getItem("et:items");
    if (b) setBudget(Number(b));
    if (e) setItems(JSON.parse(e));
  }, []);

  // ⬆️ Save whenever things change
  useEffect(() => {
    localStorage.setItem("et:budget", String(budget));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("et:items", JSON.stringify(items));
  }, [items]);

  // ➕ add one expense
  const addItem = () => {
    if (!title || !amount) return; // if boxes are empty, do nothing
    setItems([...items, { title, amount: Number(amount) }]);
    setTitle("");
    setAmount("");
  };

  // ❌ remove one expense
  const removeItem = (idx) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  // 🧮 maths
  const total = useMemo(
    () => items.reduce((s, it) => s + it.amount, 0),
    [items]
  );
  const left = useMemo(() => budget - total, [budget, total]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900">
      <div className="max-w-3xl mx-auto p-6 sm:p-6 lg:p-8 bg-gradient-to-br from-green-400 via-emerald-500 to-slate-300 rounded-xl">
        {/* Header */}
        <header className="flex items-center gap-2 border-b pb-4 sticky">
          <CircleDollarSign className="size-6 text-emerald-600" />
          <h1 className="text-xl font-bold text-white">
            Jojo’s Expense Tracker
          </h1>
        </header>

        {/* Budget Input */}
        <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
          <h2 className="text-lg font-semibold">Budget Input</h2>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Enter amount"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/40 placeholder:text-black/50"
            />
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              title="Budget updates as you type"
              onClick={() => {}}
            >
              Set
            </button>
          </div>
        </section>

        {/* Expense Input */}
        <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
          <h2 className="text-lg font-semibold">Expense Input</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Expense title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
            />
          </div>
          <button
            onClick={addItem}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Add Expense
          </button>
        </section>

        {/* Summary */}
        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
            <p className="text-sm text-black">Total Budget</p>
            <p className="text-2xl font-semibold">₦{budget || 0}</p>
          </div>
          <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
            <p className="text-sm text-black">Total Expenses</p>
            <p className="text-2xl font-semibold">₦{total}</p>
          </div>
          <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
            <p className="text-sm text-black">Remaining Balance</p>
            <p className="text-2xl font-semibold">₦{left}</p>
          </div>
        </section>

        {/* Expense List */}
        <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
          <h2 className="text-lg font-semibold">Expense List</h2>

          {items.length === 0 && (
            <p className="text-sm text-black/70">
              No expenses yet. Add one above 👆
            </p>
          )}

          {items.map((it, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-3">
                <CircleDollarSign className="size-5 text-emerald-800" />
                <span className="font-medium">{it.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">₦{it.amount}</span>
                <button
                  className="p-2 hover:bg-gray-100 rounded"
                  onClick={() => removeItem(i)}
                  title="Delete"
                >
                  <Trash2 className="size-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-black pt-6 font-bold">
          Made by JoJo with React + Tailwind + Lucide Icons
        </footer>
      </div>
    </div>
  );
}

export default App;
