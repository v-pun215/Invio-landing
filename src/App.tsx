import { Wallet, Menu, X, Home } from 'lucide-react';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import ExpenseTracker from './components/ExpenseTracker';
import InvestmentTracker from './components/InvestmentTracker';
import FraudDetection from './components/FraudDetection';
import CreditCard from './components/CreditCard';

export type Page = 'home' | 'expenses' | 'investments' | 'fraud' | 'card';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img src="img/logo.png" alt="Invio Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-[#0A1F44]">Invio</span>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigateTo('home')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                <Home size={18} />
                Home
              </button>
              <button
                onClick={() => navigateTo('expenses')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'expenses'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Expenses
              </button>
              <button
                onClick={() => navigateTo('investments')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'investments'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Investments
              </button>
              <button
                onClick={() => navigateTo('fraud')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'fraud'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Fraud Detection
              </button>
              <button
                onClick={() => navigateTo('card')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'card'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Credit Card
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
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => navigateTo('home')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('expenses')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'expenses'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Expenses
              </button>
              <button
                onClick={() => navigateTo('investments')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'investments'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Investments
              </button>
              <button
                onClick={() => navigateTo('fraud')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'fraud'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Fraud Detection
              </button>
              <button
                onClick={() => navigateTo('card')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'card'
                    ? 'text-[#14A56D] bg-[#14A56D]/10'
                    : 'text-[#0A1F44] hover:text-[#14A56D]'
                }`}
              >
                Credit Card
              </button>
            </div>
          </div>
        )}
      </nav>

      {currentPage === 'home' && <LandingPage onNavigate={navigateTo} />}
      {currentPage === 'expenses' && <ExpenseTracker />}
      {currentPage === 'investments' && <InvestmentTracker />}
      {currentPage === 'fraud' && <FraudDetection />}
      {currentPage === 'card' && <CreditCard />}

      <footer className="bg-[#0A1F44] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="img/logo_white.png" alt="Invio Logo" className="h-8 w-8" />
                <span className="text-2xl font-bold">Invio</span>
              </div>
              <p className="text-white/70">
                Your unified money management platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <button onClick={() => navigateTo('expenses')} className="hover:text-white transition-colors">
                    Expense Tracker
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('investments')} className="hover:text-white transition-colors">
                    Investment Calculator
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('fraud')} className="hover:text-white transition-colors">
                    Fraud Detection
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('card')} className="hover:text-white transition-colors">
                    Credit Card
                  </button>
                </li>
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
