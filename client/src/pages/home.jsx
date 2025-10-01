import React from 'react';

const navItems = [
  { href: '/devices', label: 'Device Inventory', color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
  { href: '/movements', label: 'Device Movements', color: 'bg-green-600', hover: 'hover:bg-green-700' },
  { href: '/maintenance', label: 'Maintenance Log', color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
  { href: '/reports', label: 'Reports', color: 'bg-purple-600', hover: 'hover:bg-purple-700' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="8" fill="#3b82f6" opacity="0.2">
            <animate attributeName="cx" values="20;80;20" dur="8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="20;80;20" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="80" r="6" fill="#f59e42" opacity="0.2">
            <animate attributeName="cx" values="80;20;80" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="80;20;80" dur="10s" repeatCount="indefinite" />
          </circle>
          <rect x="40" y="40" width="20" height="20" fill="#10b981" opacity="0.15">
            <animate attributeName="x" values="40;60;40" dur="6s" repeatCount="indefinite" />
            <animate attributeName="y" values="40;60;40" dur="6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 animate-fade-in-down">
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            MNS Inventory System
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 text-center animate-fade-in-up">
          Welcome to the Mwalimu ICT Team Inventory App.<br />
          <span className="text-blue-300">Track devices, movements, maintenance, and generate reports.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`px-6 py-3 rounded-xl shadow-lg text-white font-semibold text-lg transition-transform transform hover:scale-110 ${item.color} ${item.hover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Simple CSS animations */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 1s cubic-bezier(.39,.575,.565,1) both;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1.2s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}