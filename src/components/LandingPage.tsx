import { CreditCard, Shield, TrendingUp, Wallet, ArrowRight, CheckCircle, Zap } from 'lucide-react';

import type { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <>
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
                <button
                  onClick={() => onNavigate('expenses')}
                  className="bg-[#14A56D] text-white px-8 py-4 rounded-lg hover:bg-[#0F8555] transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                >
                  Try Expense Tracker
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
                    <Wallet size={20} />
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

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-700">Powerful features designed to give you complete financial control</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate('expenses')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#14A56D] text-left group cursor-pointer"
            >
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#14A56D]/20 transition-colors">
                <Wallet className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Expense Tracking</h3>
              <p className="text-gray-600">
                Automatically categorize and track every transaction. Set custom budgets and get alerts when you're close to limits.
              </p>
            </button>

            <button
              onClick={() => onNavigate('investments')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#A3D2CA] text-left group cursor-pointer"
            >
              <div className="bg-[#A3D2CA]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#A3D2CA]/20 transition-colors">
                <TrendingUp className="text-[#A3D2CA]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Investment Monitoring</h3>
              <p className="text-gray-600">
                Track all your investments in real-time. Get insights, performance metrics, and smart recommendations.
              </p>
            </button>

            <button
              onClick={() => onNavigate('fraud')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#0A1F44] text-left group cursor-pointer"
            >
              <div className="bg-[#0A1F44]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0A1F44]/20 transition-colors">
                <Shield className="text-[#0A1F44]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Fraud Detection</h3>
              <p className="text-gray-600">
                Advanced AI monitors transactions 24/7. Suspicious activity is blocked instantly, before damage occurs.
              </p>
            </button>

            <button
              onClick={() => onNavigate('card')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#14A56D] text-left group cursor-pointer"
            >
              <div className="bg-[#14A56D]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#14A56D]/20 transition-colors">
                <CreditCard className="text-[#14A56D]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">Smart Credit Card</h3>
              <p className="text-gray-600">
                A credit card that's directly linked to your goals. Earn rewards that actually help you grow wealth.
              </p>
            </button>
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#14A56D] to-[#A3D2CA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who've unified their money management with Invio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('expenses')}
              className="bg-white text-[#14A56D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
