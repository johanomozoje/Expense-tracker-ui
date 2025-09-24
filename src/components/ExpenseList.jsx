import { CircleDollarSign, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ExpenseList({ expenses, onDelete, onEdit }) {
  // simple inline editor state
  const [editIndex, setEditIndex] = useState(-1);
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");

  const startEdit = (i) => {
    setEditIndex(i);
    setEditTitle(xexpenses[i].title);
    setEditAmount(String(expenses[i].amount));
  };

  const saveEdit = () => {
    if (!editTitle.trim() || !editAmount) return;
    onEdit(editIndex, editTitle.trim(), Number(editAmount));
    setEditIndex(-1);
    setEditTitle("");
    setEditAmount("");
  };

  return (
    <section className="mt-4 bg-white rounded-lg shadow space-y-3 bg-white/30 border border-white/10 p-4">
      <h2 className="text-lg font-semibold">Expense List</h2>

      {expenses.length === 0 && (
        <p className="text-sm text-black/70">
          No expenses yet. Add one above 👆
        </p>
      )}

      {expenses.map((exp, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b py-3"
        >
          <div className="flex items-center gap-3">
            <CircleDollarSign className="size-5 text-emerald-800" />
            {editIndex === i ? (
              <input
                className="rounded px-2 py-1 border border-white/50 bg-white/50"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <span className="font-medium">{exp.title}</span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {editIndex === i ? (
              <input
                type="number"
                className="rounded px-2 py-1 border border-white/50 bg-white/50 w-28"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
              />
            ) : (
              <span className="font-semibold">₦{exp.amount}</span>
            )}

            {editIndex === i ? (
              <button
                onClick={saveEdit}
                className="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Save
              </button>
            ) : (
              <button
                className="p-2 hover:bg-gray-100 rounded"
                onClick={() => startEdit(i)}
                title="Edit"
              >
                <Pencil className="size-4" />
              </button>
            )}

            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => onDelete(i)}
              title="Delete"
            >
              <Trash2 className="size-4 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
