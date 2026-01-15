import { CheckCircle2, Lock, ShieldOff } from 'lucide-react';
import { useEffect } from 'react';

interface DeletionReceiptProps {
  onReset: () => void;
  tier: string;
  onViewGraveyard: () => void;
  onAddTombstone: () => void;
}

export function DeletionReceipt({ onReset, tier, onViewGraveyard, onAddTombstone }: DeletionReceiptProps) {
  const getTierName = () => {
    const tierNames: Record<string, string> = {
      MKT: 'Merkle Tree Delete',
      ZKP: 'Zero-Knowledge Proof',
      PQR: 'Post-Quantum Resistant',
    };
    return tierNames[tier] || 'Zombie Delete';
  };

  // Add tombstone when receipt is displayed
  useEffect(() => {
    onAddTombstone();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-pearl-dark relative">
      {/* Gradient overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-pearl-gradient pointer-events-none z-0"></div>

      <main className="flex-1 flex flex-col lg:flex-row relative z-10">
        {/* Left Section - Header and Description */}
        <div className="flex-1 bg-pearl-panel flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-xl w-full space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-success flex-shrink-0" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Deletion Verified
              </h1>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Your zombie data has been permanently eliminated using {getTierName()} technology. 
                This cryptographic receipt guarantees irreversible deletion and compliance with data protection regulations.
              </p>
              
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                The tombstone has been planted on the Internet Computer blockchain, ensuring that data resurrection 
                is cryptographically impossible for the specified duration. Your liability exposure has been eliminated.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onReset}
                  className="bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Go Back to Dashboard
                </button>
                <button
                  onClick={onViewGraveyard}
                  className="bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Graveyard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Cryptographic Proof Data */}
        <div className="flex-1 bg-pearl-darker flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-md w-full space-y-6 sm:space-y-8">
            <div className="space-y-6">
              {/* Tier Type */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🧟</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">Deletion Tier</div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white pl-0 sm:pl-14">
                  {getTierName()}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20"></div>

              {/* Proof ID */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🔐</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">Proof ID</div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl text-white pl-0 sm:pl-14">
                  0x7f8a...9c2
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20"></div>

              {/* Tombstone Status */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">Tombstone Status</div>
                </div>
                <div className="font-semibold text-xl sm:text-2xl md:text-3xl text-success pl-0 sm:pl-14">
                  LOCKED (5 Years)
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20"></div>

              {/* Restore Capability */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <ShieldOff className="w-5 h-5 sm:w-6 sm:h-6 text-danger" />
                  </div>
                  <div className="text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">Restore Capability</div>
                </div>
                <div className="font-semibold text-xl sm:text-2xl md:text-3xl text-danger pl-0 sm:pl-14">
                  BLOCKED
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Logos and gradient */}
      <footer className="border-t border-white/10 py-6 sm:py-8 bg-pearl-gradient-footer relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
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
            <div className="text-center text-xs sm:text-sm text-white/70">
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
