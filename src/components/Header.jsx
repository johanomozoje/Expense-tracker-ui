import { CircleDollarSign } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-2 border-b pb-4 sticky">
      <CircleDollarSign className="size-6 text-emerald-600" />
      <h1 className="text-xl font-bold text-white">
        Jojo’s Expense Tracker (UI Only → Now Working!)
      </h1>
    </header>
  );
}
