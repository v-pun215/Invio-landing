import { CreditCard as CreditCardIcon, Zap, Shield, Target, TrendingUp, Settings, Award } from 'lucide-react';

export default function CreditCard() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            The Invio Credit Card
          </h1>
          <p className="text-xl text-gray-600">
            More than just a card — your smart financial assistant in your wallet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-[#0A1F44] via-[#14A56D] to-[#A3D2CA] rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <div className="text-white/80 text-sm mb-2">INVIO SMART CARD</div>
                    <div className="flex gap-2">
                      <div className="w-10 h-8 bg-white/20 rounded"></div>
                      <div className="w-12 h-8 bg-white/30 rounded"></div>
                    </div>
                  </div>
                  <CreditCardIcon size={40} className="text-white" />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-1">
                        {[...Array(4)].map((_, j) => (
                          <div key={j} className="w-2 h-2 bg-white/60 rounded-full"></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-white/70 text-xs mb-1">CARDHOLDER</div>
                    <div className="text-white font-semibold">YOUR NAME</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">EXPIRES</div>
                    <div className="text-white font-semibold">12/28</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">
                Not Just Another Credit Card
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                The Invio Card is designed to work seamlessly with your financial goals. Every swipe brings you closer to smarter money management.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#14A56D]">
                <div className="text-2xl font-bold text-[#14A56D] mb-1">0%</div>
                <div className="text-sm text-gray-600">Foreign Transaction Fees</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#A3D2CA]">
                <div className="text-2xl font-bold text-[#A3D2CA] mb-1">2-5%</div>
                <div className="text-sm text-gray-600">Invio Points Back</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#0A1F44]">
                <div className="text-2xl font-bold text-[#0A1F44] mb-1">24/7</div>
                <div className="text-sm text-gray-600">Fraud Protection</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#14A56D]">
                <div className="text-2xl font-bold text-[#14A56D] mb-1">$0</div>
                <div className="text-sm text-gray-600">Annual Fee</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0A1F44] text-center mb-12">
            What Makes It Smart
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Unified Ecosystem</h3>
              <p className="text-gray-600">
                Every transaction instantly updates your expense tracker, adjusts budgets, and provides insights without third-party integrations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#A3D2CA]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-[#A3D2CA]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Smart Spending Insights</h3>
              <p className="text-gray-600">
                Real-time analysis flags unnecessary expenses, suggests saving goals, and recommends better investment options based on your behavior.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#0A1F44]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#0A1F44]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Built-in Fraud Detection</h3>
              <p className="text-gray-600">
                Our own fraud-detection layer monitors patterns and blocks suspicious activity instantly — not after the fact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Customizable Modes</h3>
              <p className="text-gray-600">
                Switch between Budget Mode, Travel Mode, or Savings Mode where spending limits, cashback, and alerts adapt to your goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#A3D2CA]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-[#A3D2CA]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Growth-Aligned Rewards</h3>
              <p className="text-gray-600">
                Earn Invio Points that can be invested, saved, or used for bill payments — promoting smart money habits, not random cashback.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#0A1F44]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-[#0A1F44]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Goal-Oriented Design</h3>
              <p className="text-gray-600">
                Set financial goals and your card helps you achieve them with automatic savings and intelligent spending suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0A1F44] to-[#14A56D] rounded-2xl p-12 text-white shadow-2xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Card Modes Explained</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-xl font-bold mb-3">Budget Mode</div>
                <p className="text-white/90 text-sm mb-4">
                  Strict spending limits, real-time alerts, and automatic savings to keep you on track.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Daily spending caps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Category limits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Overspend warnings</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-xl font-bold mb-3">Travel Mode</div>
                <p className="text-white/90 text-sm mb-4">
                  Enhanced security for international use with 0% foreign fees and travel rewards.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>No foreign fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Extra fraud protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Travel rewards boost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-xl font-bold mb-3">Savings Mode</div>
                <p className="text-white/90 text-sm mb-4">
                  Maximize rewards and automatically route excess to investments or savings goals.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>5% Invio Points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Auto-invest rewards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A3D2CA] rounded-full"></div>
                    <span>Round-up savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">
            Ready to Get Your Invio Card?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of smart spending.
          </p>
          <button className="bg-[#14A56D] text-white px-12 py-4 rounded-lg hover:bg-[#0F8555] transition-all transform hover:scale-105 font-semibold text-lg">
            Join Waitlist
          </button>
          <p className="text-sm text-gray-500 mt-4">No credit check required to join</p>
        </div>
      </div>
    </div>
  );
}
