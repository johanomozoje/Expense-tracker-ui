import { CircleDollarSign, Pencil, Trash2 } from 'lucide-react';

function App() {
  return (
    <>
    <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to bg-slate-900">
    <div className="max-w-3xl mx-auto p-6 space-y-8 bg-gradient-to-br from-green-950 via-emerald-800 to-slate-800 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="flex items-center gap-2 border-b pb-4 sticky">
        <CircleDollarSign className="size-6 text-emerald-600" />
        <h1 className="text-xl font-bold">Jojo's Expense Tracker (UI Only)</h1>
      </header>

      {/* Summary */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
          <p className="text-sm text-black">Total Budget</p>
          <p className="text-2xl font-semibold">₦1000.00</p>
        </div>
        <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
          <p className="text-sm text-black">Total Expenses</p>
          <p className="text-2xl font-semibold">₦500.00</p>
        </div>
        <div className="p-4 bg-white/30 border border-white/10 rounded-2xl shadow text-center">
          <p className="text-sm text-black">Remaining Balance</p>
          <p className="text-2xl font-semibold">₦500.00</p>
        </div>
      </section>

      {/* Budget Input goes here */}
      <section className="p-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10">
        <h2 className="text-lg font-semibold">Budget Input</h2>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/40 placeholder:text-black/50"
          />
          <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
            Set
          </button>
        </div>
      </section>

      {/* Expense Input goes here */}
      <section className="p-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10">
        <h2 className="text-lg font-semibold">Expense Input</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Expense title"
            className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/30 border border-white/50 placeholder:text-black/50"
          />
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
          Add Expense
        </button>
      </section>

      {/* Expense List */}
      <section className="p-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10">
        <h2 className="text-lg font-medium">Expense List</h2>

        {/* Row 1 */}
        <div className="flex items-center justify-between border-b py-3">
          <div className="flex items-center gap-3">
            <CircleDollarSign className="size-5 text-emerald-800" />
            <span className="font-medium">Groceries</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">₦250.00</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Pencil className="size-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Trash2 className="size-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between border-b py-3">
          <div className="flex items-center gap-3">
            <CircleDollarSign className="size-5 text-emerald-800" />
            <span className="font-medium">Transport</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">₦150.00</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Pencil className="size-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Trash2 className="size-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between border-b py-3">
          <div className="flex items-center gap-3">
            <CircleDollarSign className="size-5 text-emerald-800" />
            <span className="font-medium">Data</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">₦100.00</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Pencil className="size-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Trash2 className="size-4 text-red-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-black pt-6 font-bold">
        Made by JoJo with React + Tailwind + Lucide Icons
      </footer>
    </div>
    </body>
    </>
  );
}

export default App;