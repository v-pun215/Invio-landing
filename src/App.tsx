import { CreditCard, Shield, TrendingUp, Wallet, Menu, X, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/img/logo.png" alt="Invio Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-[#0A1F44]">Invio</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#0A1F44] hover:text-[#14A56D] transition-colors">Features</a>
              <a href="#card" className="text-[#0A1F44] hover:text-[#14A56D] transition-colors">Credit Card</a>
              <a href="#why" className="text-[#0A1F44] hover:text-[#14A56D] transition-colors">Why Invio</a>
              <button className="bg-[#14A56D] text-white px-6 py-2 rounded-lg hover:bg-[#0F8555] transition-colors">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-[#0A1F44]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#features" className="block text-[#0A1F44] hover:text-[#14A56D] py-2">Features</a>
              <a href="#card" className="block text-[#0A1F44] hover:text-[#14A56D] py-2">Credit Card</a>
              <a href="#why" className="block text-[#0A1F44] hover:text-[#14A56D] py-2">Why Invio</a>
              <button className="w-full bg-[#14A56D] text-white px-6 py-2 rounded-lg hover:bg-[#0F8555] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A1F44] leading-tight mb-6">
                Your Money,
                <br />
                <span className="text-[#14A56D]">Unified & Smart</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Stop juggling multiple apps. Invio brings expense tracking, investment monitoring, fraud protection, and a smart credit card into one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#14A56D] text-white px-8 py-4 rounded-lg hover:bg-[#0F8555] transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                  Start Free Trial
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-[#14A56D] text-[#14A56D] px-8 py-4 rounded-lg hover:bg-[#14A56D] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#14A56D] to-[#0A1F44] rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium">Total Balance</span>
                    <img src="/img/logo_white.png" alt="Logo" className="h-6" />
                  </div>
                  <div className="text-4xl font-bold text-white">$24,586.40</div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/70 text-xs mb-1">Expenses</div>
                      <div className="text-white font-semibold">$3,420</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/70 text-xs mb-1">Investments</div>
                      <div className="text-white font-semibold">+12.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">The Problem</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Managing expenses across multiple apps and spreadsheets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Losing track of investments without real-time insights</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Reacting to fraud after damage is done</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Credit cards that don't align with your financial goals</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#14A56D] mb-6">The Solution</h2>
              <p className="text-lg text-gray-700 mb-6">
                Invio unifies everything into one intelligent platform. Track, invest, protect, and spend smarter — all in one place.
              </p>
              <div className="bg-gradient-to-br from-[#A3D2CA] to-[#14A56D] rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-white" size={24} />
                  <span className="font-semibold text-lg">One Platform. Complete Control.</span>
                </div>
                <p className="text-white/90">
                  No more switching between apps. Everything syncs in real-time, giving you a complete financial picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-700">Powerful features designed to give you complete financial control</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#14A56D]">
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Expense Tracking</h3>
              <p className="text-gray-600">
                Automatically categorize and track every transaction. Set custom budgets and get alerts when you're close to limits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#A3D2CA]">
              <div className="bg-[#A3D2CA]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-[#A3D2CA]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Investment Monitoring</h3>
              <p className="text-gray-600">
                Track all your investments in real-time. Get insights, performance metrics, and smart recommendations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#0A1F44]">
              <div className="bg-[#0A1F44]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#0A1F44]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Fraud Detection</h3>
              <p className="text-gray-600">
                Advanced AI monitors transactions 24/7. Suspicious activity is blocked instantly, before damage occurs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#14A56D]">
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Smart Credit Card</h3>
              <p className="text-gray-600">
                A credit card that's directly linked to your goals. Earn rewards that actually help you grow wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Deep Dive */}
      <section id="card" className="py-20 bg-gradient-to-br from-[#0A1F44] to-[#14A56D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Invio Credit Card</h2>
            <p className="text-xl text-white/90">More than just a card — your smart financial assistant</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">01</div>
              <h3 className="text-xl font-bold mb-3">Unified Ecosystem</h3>
              <p className="text-white/90">
                Every transaction instantly updates your expense tracker, adjusts budgets, and provides insights without third-party integrations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">02</div>
              <h3 className="text-xl font-bold mb-3">Smart Spending Insights</h3>
              <p className="text-white/90">
                Real-time analysis flags unnecessary expenses, suggests saving goals, and recommends better investment options based on your behavior.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">03</div>
              <h3 className="text-xl font-bold mb-3">Built-in Fraud Detection</h3>
              <p className="text-white/90">
                Our own fraud-detection layer monitors patterns and blocks suspicious activity instantly — not after the fact.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">04</div>
              <h3 className="text-xl font-bold mb-3">Customizable Modes</h3>
              <p className="text-white/90">
                Switch between Budget Mode, Travel Mode, or Savings Mode where spending limits, cashback, and alerts adapt to your goals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">05</div>
              <h3 className="text-xl font-bold mb-3">Growth-Aligned Rewards</h3>
              <p className="text-white/90">
                Earn Invio Points that can be invested, saved, or used for bill payments — promoting smart money habits, not random cashback.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col justify-center items-center text-center">
              <CreditCard size={48} className="mb-4" />
              <p className="text-lg font-semibold">
                A smart financial assistant that lives inside your wallet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invio */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Why Choose Invio?</h2>
            <p className="text-lg text-gray-700">Built for people who want complete control of their financial future</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#14A56D]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-[#14A56D]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">All-in-One Platform</h3>
              <p className="text-gray-600">
                Stop switching between apps. Everything you need is in one place, synced in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#A3D2CA]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#A3D2CA]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Bank-Level Security</h3>
              <p className="text-gray-600">
                Advanced encryption and AI-powered fraud detection keep your money safe 24/7.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0A1F44]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#0A1F44]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Smart Automation</h3>
              <p className="text-gray-600">
                Let AI handle the heavy lifting. Get insights and recommendations without manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#14A56D] to-[#A3D2CA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who've unified their money management with Invio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#14A56D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/img/logo_white.png" alt="Invio Logo" className="h-8 w-8" />
                <span className="text-2xl font-bold">Invio</span>
              </div>
              <p className="text-white/70">
                Your unified money management platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Card</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2025 Invio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
