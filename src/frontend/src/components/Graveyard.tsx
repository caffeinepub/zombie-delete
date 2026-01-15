import { useState } from 'react';
import { ChevronDown, ChevronUp, Lock, ShieldOff, Clock } from 'lucide-react';
import type { Tombstone } from '../App';

interface GraveyardProps {
  tombstones: Tombstone[];
  onReturnToDashboard: () => void;
}

export function Graveyard({ tombstones, onReturnToDashboard }: GraveyardProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTierName = (tier: string) => {
    const tierNames: Record<string, string> = {
      MKT: 'MKT Delete',
      ZKP: 'ZKP Delete',
      PQR: 'PQR Delete',
    };
    return tierNames[tier] || tier;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-pearl-dark relative">
      {/* Gradient overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-pearl-gradient pointer-events-none z-0"></div>

      <main className="flex-1 relative z-10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              GRAVEYARD
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Global Tombstone Registry (Read-Only)
            </p>
          </div>

          {/* Tombstone List */}
          <div className="space-y-4 sm:space-y-6 mb-12">
            {tombstones.map((tombstone) => (
              <div
                key={tombstone.id}
                className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Tombstone Row */}
                <button
                  onClick={() => toggleExpand(tombstone.id)}
                  className="w-full p-6 sm:p-8 text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                    {/* Tombstone ID */}
                    <div className="flex-shrink-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Tombstone ID
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white">
                        {tombstone.id}
                      </div>
                    </div>

                    {/* Proof ID */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Proof ID
                      </div>
                      <div className="text-sm sm:text-base text-white font-mono truncate">
                        {tombstone.proofId.substring(0, 12)}...{tombstone.proofId.substring(tombstone.proofId.length - 6)}
                      </div>
                    </div>

                    {/* Product Tier */}
                    <div className="flex-shrink-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Product Tier
                      </div>
                      <div className="text-sm sm:text-base text-white font-semibold">
                        {getTierName(tombstone.tier)}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex-shrink-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Status
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-success" />
                        <span className="text-sm sm:text-base text-success font-semibold">
                          {tombstone.status}
                        </span>
                      </div>
                    </div>

                    {/* Restore Capability */}
                    <div className="flex-shrink-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Restore
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldOff className="w-4 h-4 text-success" />
                        <span className="text-sm sm:text-base text-success font-semibold">
                          {tombstone.restoreCapability}
                        </span>
                      </div>
                    </div>

                    {/* Lock Duration */}
                    <div className="flex-shrink-0">
                      <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-1">
                        Duration
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white/70" />
                        <span className="text-sm sm:text-base text-white">
                          {tombstone.lockDuration}
                        </span>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className="flex-shrink-0 lg:ml-auto">
                      {expandedId === tombstone.id ? (
                        <ChevronUp className="w-6 h-6 text-white/70" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white/70" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedId === tombstone.id && (
                  <div className="border-t border-white/10 p-6 sm:p-8 bg-pearl-darker/50 animate-fade-in">
                    <div className="space-y-6">
                      {/* Full Proof ID */}
                      <div>
                        <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-2">
                          Full Proof ID
                        </div>
                        <div className="text-sm sm:text-base text-white font-mono break-all bg-black/30 p-4 rounded-lg">
                          {tombstone.proofId}
                        </div>
                      </div>

                      {/* Timestamp */}
                      <div>
                        <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-2">
                          Timestamp
                        </div>
                        <div className="text-sm sm:text-base text-white">
                          {formatTimestamp(tombstone.timestamp)}
                        </div>
                      </div>

                      {/* Explanation */}
                      <div>
                        <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mb-2">
                          Explanation
                        </div>
                        <div className="text-sm sm:text-base text-white/80 leading-relaxed">
                          This tombstone prevents any data resurrection from backups, ETL, or AI pipelines.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Return Button */}
          <div className="text-center">
            <button
              onClick={onReturnToDashboard}
              className="bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </main>

      {/* Footer with gradient */}
      <footer className="border-t border-white/10 py-6 sm:py-8 bg-pearl-gradient-footer relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
              <img
                src="/assets/generated/internet-computer-logo-transparent.dim_200x200.png"
                alt="Internet Computer"
                className="h-10 sm:h-12 md:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/assets/generated/together-alone-ventures-logo-transparent.dim_200x200.png"
                alt="Together Alone Ventures"
                className="h-10 sm:h-12 md:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-xs sm:text-sm text-white/70">
              © 2025. Built with love using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white/80 transition-colors underline"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
