import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent, LineChart, Lightbulb } from 'lucide-react';

export default function InvestmentTracker() {
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualReturn, setAnnualReturn] = useState('7');
  const [years, setYears] = useState('10');
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({
    futureValue: 0,
    totalContributions: 0,
    totalEarnings: 0,
    yearlyBreakdown: [] as { year: number; balance: number; earnings: number }[],
  });

  const calculateInvestment = (e: React.FormEvent) => {
    e.preventDefault();

    const P = parseFloat(initialAmount) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(annualReturn) / 100;
    const t = parseFloat(years);

    const yearlyBreakdown = [];
    let balance = P;

    for (let year = 1; year <= t; year++) {
      const yearStart = balance;
      for (let month = 0; month < 12; month++) {
        balance = balance * (1 + r / 12) + PMT;
      }
      const earnings = balance - yearStart - (PMT * 12);
      yearlyBreakdown.push({ year, balance, earnings });
    }

    const totalContributions = P + (PMT * 12 * t);
    const totalEarnings = balance - totalContributions;

    setResults({
      futureValue: balance,
      totalContributions,
      totalEarnings,
      yearlyBreakdown,
    });
    setCalculated(true);
  };

  const getSuggestion = () => {
    const currentTotal = results.futureValue;
    const additionalMonthly = 500;
    const P = parseFloat(initialAmount) || 0;
    const PMT = (parseFloat(monthlyContribution) || 0) + additionalMonthly;
    const r = parseFloat(annualReturn) / 100;
    const t = parseFloat(years);

    let balance = P;
    for (let year = 0; year < t; year++) {
      for (let month = 0; month < 12; month++) {
        balance = balance * (1 + r / 12) + PMT;
      }
    }

    const difference = balance - currentTotal;
    return { additionalMonthly, potentialGain: difference };
  };

  const suggestion = calculated ? getSuggestion() : null;

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-2">Investment Calculator</h1>
          <p className="text-gray-600">Plan your financial future with smart insights</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Investment Details</h2>
              <form onSubmit={calculateInvestment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Investment ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(e.target.value)}
                    placeholder="10000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3D2CA] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    placeholder="500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3D2CA] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3D2CA] focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Average market return is 7-10%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    min="1"
                    max="50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A3D2CA] focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A3D2CA] text-white py-3 rounded-lg hover:bg-[#8BC0B8] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <LineChart size={20} />
                  Calculate Returns
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {!calculated ? (
              <div className="bg-white rounded-xl p-12 shadow-lg text-center">
                <TrendingUp size={64} className="mx-auto mb-4 text-[#A3D2CA] opacity-50" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Ready to Plan Your Future?</h3>
                <p className="text-gray-600">
                  Enter your investment details to see potential growth and get smart recommendations.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-[#A3D2CA] to-[#8BC0B8] rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium opacity-90">Future Value</span>
                      <DollarSign size={20} />
                    </div>
                    <div className="text-3xl font-bold">${results.futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="text-sm opacity-90 mt-1">in {years} years</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#14A56D]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Total Contributions</span>
                      <Calendar size={20} className="text-[#14A56D]" />
                    </div>
                    <div className="text-3xl font-bold text-[#0A1F44]">
                      ${results.totalContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#A3D2CA]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Total Earnings</span>
                      <Percent size={20} className="text-[#A3D2CA]" />
                    </div>
                    <div className="text-3xl font-bold text-[#A3D2CA]">
                      ${results.totalEarnings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {((results.totalEarnings / results.totalContributions) * 100).toFixed(1)}% growth
                    </div>
                  </div>
                </div>

                {suggestion && (
                  <div className="bg-gradient-to-r from-[#14A56D] to-[#A3D2CA] rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-start gap-3">
                      <Lightbulb size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Smart Suggestion</h3>
                        <p className="text-white/90">
                          By investing just <span className="font-bold">${suggestion.additionalMonthly}</span> more per month,
                          you could reach <span className="font-bold">${(results.futureValue + suggestion.potentialGain).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span> in {years} years
                          — that's <span className="font-bold">${suggestion.potentialGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span> more!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Year-by-Year Growth</h3>
                  <div className="space-y-2">
                    {results.yearlyBreakdown.map((item) => (
                      <div key={item.year} className="flex items-center gap-4">
                        <div className="w-16 text-sm font-semibold text-gray-700">
                          Year {item.year}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              ${item.balance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </span>
                            <span className="text-[#A3D2CA] font-medium">
                              +${item.earnings.toLocaleString('en-US', { maximumFractionDigits: 0 })} earned
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#A3D2CA] to-[#14A56D] h-2 rounded-full transition-all"
                              style={{ width: `${(item.balance / results.futureValue) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0A1F44] rounded-xl p-6 text-white shadow-lg">
                  <h3 className="font-bold text-lg mb-3">Key Insights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#14A56D] font-bold">•</span>
                      <span>Your investment will grow by <span className="font-bold">{((results.futureValue / results.totalContributions - 1) * 100).toFixed(1)}%</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#14A56D] font-bold">•</span>
                      <span>Compound interest will earn you <span className="font-bold">${results.totalEarnings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#14A56D] font-bold">•</span>
                      <span>Starting early makes a huge difference — time is your biggest ally</span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
