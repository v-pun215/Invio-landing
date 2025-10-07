import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, DollarSign, User, MapPin } from 'lucide-react';

const FLAGGED_KEYWORDS = ['crypto', 'bitcoin', 'overseas', 'foreign', 'wire', 'urgent', 'lottery', 'prize'];
const SUSPICIOUS_RECIPIENTS = ['unknown sender', 'verified account', 'customer service', 'support team'];

export default function FraudDetection() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [location, setLocation] = useState('');
  const [checked, setChecked] = useState(false);
  const [isSuspicious, setIsSuspicious] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const checkTransaction = (e: React.FormEvent) => {
    e.preventDefault();

    const detectedAlerts: string[] = [];
    let suspicious = false;

    const transactionAmount = parseFloat(amount);
    if (transactionAmount > 5000) {
      detectedAlerts.push('Large transaction amount detected');
      suspicious = true;
    }

    if (transactionAmount > 10000) {
      detectedAlerts.push('Transaction exceeds daily limit threshold');
      suspicious = true;
    }

    const recipientLower = recipient.toLowerCase();
    if (SUSPICIOUS_RECIPIENTS.some(keyword => recipientLower.includes(keyword))) {
      detectedAlerts.push('Recipient name matches suspicious pattern');
      suspicious = true;
    }

    if (FLAGGED_KEYWORDS.some(keyword => recipientLower.includes(keyword) || location.toLowerCase().includes(keyword))) {
      detectedAlerts.push('Transaction contains flagged keywords');
      suspicious = true;
    }

    const locationLower = location.toLowerCase();
    if (locationLower && !locationLower.includes('usa') && !locationLower.includes('united states')) {
      detectedAlerts.push('International transaction detected');
      suspicious = true;
    }

    if (recipient.length < 3) {
      detectedAlerts.push('Incomplete recipient information');
      suspicious = true;
    }

    if (!suspicious) {
      detectedAlerts.push('Transaction patterns match your normal activity');
      detectedAlerts.push('Recipient verified in trusted contacts');
      detectedAlerts.push('No unusual location or timing detected');
    }

    setAlerts(detectedAlerts);
    setIsSuspicious(suspicious);
    setChecked(true);
  };

  const reset = () => {
    setAmount('');
    setRecipient('');
    setLocation('');
    setChecked(false);
    setIsSuspicious(false);
    setAlerts([]);
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-2">Fraud Detection Simulator</h1>
          <p className="text-gray-600">See how Invio protects your transactions in real-time</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Test Transaction</h2>
              <form onSubmit={checkTransaction} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Amount ($)
                  </label>
                  <div className="relative">
                    <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="Who are you paying?"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location (Optional)
                  </label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Transaction location"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1F44] focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1F44] text-white py-3 rounded-lg hover:bg-[#0D2A5C] transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <Shield size={20} />
                  Check Transaction
                </button>

                {checked && (
                  <button
                    type="button"
                    onClick={reset}
                    className="w-full border-2 border-[#0A1F44] text-[#0A1F44] py-3 rounded-lg hover:bg-[#0A1F44] hover:text-white transition-colors font-semibold"
                  >
                    Test Another Transaction
                  </button>
                )}
              </form>
            </div>

            <div className="bg-gradient-to-br from-[#0A1F44] to-[#14A56D] rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-3">How It Works</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A3D2CA] font-bold">•</span>
                  <span>AI analyzes transaction amount, recipient, and location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A3D2CA] font-bold">•</span>
                  <span>Compares against your typical spending patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A3D2CA] font-bold">•</span>
                  <span>Checks for known fraud indicators and red flags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A3D2CA] font-bold">•</span>
                  <span>Blocks suspicious transactions before they process</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {!checked ? (
              <div className="bg-white rounded-xl p-12 shadow-lg text-center">
                <Shield size={64} className="mx-auto mb-4 text-[#0A1F44] opacity-50" />
                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Ready to Test</h3>
                <p className="text-gray-600">
                  Enter transaction details to see our fraud detection system in action.
                </p>
                <div className="mt-6 text-left bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Try these scenarios:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Large amounts (over $5,000)</li>
                    <li>• Suspicious names like "Unknown Sender"</li>
                    <li>• Keywords: "crypto", "wire", "urgent"</li>
                    <li>• International locations</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className={`rounded-xl p-8 shadow-lg ${isSuspicious ? 'bg-red-50 border-2 border-red-300' : 'bg-green-50 border-2 border-green-300'}`}>
                <div className="flex items-center gap-4 mb-6">
                  {isSuspicious ? (
                    <>
                      <div className="bg-red-500 rounded-full p-4">
                        <AlertTriangle size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-700">Suspicious Activity Detected!</h3>
                        <p className="text-red-600">Transaction blocked for your protection</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-green-500 rounded-full p-4">
                        <CheckCircle size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-700">Transaction Safe</h3>
                        <p className="text-green-600">No suspicious activity detected</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Transaction Details</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold">${parseFloat(amount).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recipient:</span>
                      <span className="font-semibold">{recipient}</span>
                    </div>
                    {location && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-semibold">{location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Detection Report</h4>
                  <div className="space-y-2">
                    {alerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-2 p-3 rounded-lg ${
                          isSuspicious ? 'bg-red-100' : 'bg-green-100'
                        }`}
                      >
                        {isSuspicious ? (
                          <AlertTriangle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${isSuspicious ? 'text-red-700' : 'text-green-700'}`}>
                          {alert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {isSuspicious && (
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">What happens next?</span> You'll receive an instant notification.
                      Verify if this is legitimate through the app, or the transaction will be permanently blocked.
                    </p>
                  </div>
                )}
              </div>
            )}

            {checked && (
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-[#0A1F44] mb-3">Protection Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#14A56D]">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#14A56D]">&lt;1s</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#14A56D]">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#14A56D]">$0</div>
                    <div className="text-sm text-gray-600">Fraud Losses</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
