import { useState, useEffect } from 'react';
import { Plus, Trash2, DollarSign, TrendingDown, Calendar, PieChart } from 'lucide-react';

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

const CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Other'];
const MONTHLY_BUDGET = 5000;

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('invio_expenses');
    if (stored) {
      setExpenses(JSON.parse(stored));
    }
  }, []);

  const saveExpenses = (newExpenses: Expense[]) => {
    localStorage.setItem('invio_expenses', JSON.stringify(newExpenses));
    setExpenses(newExpenses);
  };

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;

    const newExpense: Expense = {
      id: Date.now().toString(),
      category,
      amount: parseFloat(amount),
      date,
      description,
    };

    saveExpenses([newExpense, ...expenses]);
    setAmount('');
    setDescription('');
  };

  const deleteExpense = (id: string) => {
    saveExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = MONTHLY_BUDGET - totalSpent;
  const percentSpent = (totalSpent / MONTHLY_BUDGET) * 100;

  const categoryTotals = CATEGORIES.map(cat => ({
    category: cat,
    total: expenses.filter(exp => exp.category === cat).reduce((sum, exp) => sum + exp.amount, 0),
  })).filter(item => item.total > 0);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-2">Expense Tracker</h1>
          <p className="text-gray-600">Track your spending and stay within budget</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#14A56D] to-[#0F8555] rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium opacity-90">Monthly Budget</span>
              <DollarSign size={20} />
            </div>
            <div className="text-3xl font-bold">${MONTHLY_BUDGET.toFixed(2)}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#A3D2CA]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Spent</span>
              <TrendingDown size={20} className="text-[#A3D2CA]" />
            </div>
            <div className="text-3xl font-bold text-[#0A1F44]">${totalSpent.toFixed(2)}</div>
            <div className="mt-2 text-sm text-gray-500">{percentSpent.toFixed(1)}% of budget</div>
          </div>

          <div className={`rounded-xl p-6 shadow-lg ${remaining >= 0 ? 'bg-white border-2 border-[#14A56D]' : 'bg-red-50 border-2 border-red-300'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Remaining</span>
              <Calendar size={20} className={remaining >= 0 ? 'text-[#14A56D]' : 'text-red-500'} />
            </div>
            <div className={`text-3xl font-bold ${remaining >= 0 ? 'text-[#14A56D]' : 'text-red-500'}`}>
              ${Math.abs(remaining).toFixed(2)}
            </div>
            {remaining < 0 && <div className="mt-2 text-sm text-red-600">Over budget!</div>}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Add Expense</h2>
              <form onSubmit={addExpense} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14A56D] focus:border-transparent"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14A56D] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14A56D] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What was this for?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14A56D] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#14A56D] text-white py-3 rounded-lg hover:bg-[#0F8555] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <Plus size={20} />
                  Add Expense
                </button>
              </form>
            </div>

            {categoryTotals.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <PieChart size={20} className="text-[#14A56D]" />
                  <h2 className="text-xl font-bold text-[#0A1F44]">By Category</h2>
                </div>
                <div className="space-y-3">
                  {categoryTotals.map(item => (
                    <div key={item.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.category}</span>
                        <span className="font-semibold text-[#0A1F44]">${item.total.toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#14A56D] h-2 rounded-full transition-all"
                          style={{ width: `${(item.total / totalSpent) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Recent Expenses</h2>
              {expenses.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <TrendingDown size={48} className="mx-auto mb-3 opacity-50" />
                  <p>No expenses yet. Add your first expense to get started!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Category</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Description</th>
                        <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenses.map((expense) => (
                        <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {new Date(expense.date).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-2">
                            <span className="inline-block bg-[#14A56D]/10 text-[#14A56D] px-3 py-1 rounded-full text-sm font-medium">
                              {expense.category}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {expense.description || '-'}
                          </td>
                          <td className="py-3 px-2 text-right font-semibold text-[#0A1F44]">
                            ${expense.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-2 text-right">
                            <button
                              onClick={() => deleteExpense(expense.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                              title="Delete expense"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
