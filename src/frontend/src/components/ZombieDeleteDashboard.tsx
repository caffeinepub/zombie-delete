import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Wrench, Database, Code, Link2 } from 'lucide-react';

interface ZombieDeleteDashboardProps {
  onInitiate: (tier: string) => void;
  onViewGraveyard: () => void;
}

export function ZombieDeleteDashboard({ onInitiate, onViewGraveyard }: ZombieDeleteDashboardProps) {
  return (
    <div className="min-h-screen flex flex-col bg-pearl-dark relative">
      {/* Gradient overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-pearl-gradient pointer-events-none z-0"></div>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="border-b border-white/10 py-16 sm:py-20 md:py-24 lg:py-32 bg-pearl-darker">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl">
            <div className="space-y-10 sm:space-y-12 md:space-y-14">
              <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
                <img
                  src="/assets/output-onlinepngtools.png"
                  alt="Zombie Delete"
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                />
              </div>
              
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight">
                  First Product: Zombie Delete
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light">
                  Proof that data and AI memory are gone.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl">
                  Zombie Delete addresses the hardest problem in modern compliance. Verifiable deletion where trust is impossible or undesirable.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl">
                  <span className="font-semibold">ZKP-Delete</span> The world's first provable deletion of data from immutable blockchains and traditional systems. Zero-knowledge proof of erasure. Off-chain and on-chain. Anonymous (ZKPd).
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl">
                  Built for enterprise, AI governance, and regulatory environments.
                </p>

                <div className="pt-4">
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
        </section>

        {/* Product Offering Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Zombie Delete Suite
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
                Choose the deletion verification tier that matches your security and compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Tier 1 - MKT Delete */}
              <div className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">MKT Delete</h3>
                    <Badge className="bg-success text-white border-0 text-xs sm:text-sm">
                      Available Now
                    </Badge>
                  </div>
                  <p className="text-sm text-white/60 uppercase tracking-wider font-semibold">
                    Merkle Tree Delete
                  </p>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  The most affordable way to prove deletion. Uses Merkle Tree verification to create an immutable log of erased data.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Low cost, instant implementation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-warning text-sm">⚠️</span>
                    <span className="text-sm text-white/70">Note: Deleted metadata is public</span>
                  </div>
                </div>

                <button
                  onClick={() => onInitiate('MKT')}
                  className="w-full bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Select MKT Delete
                </button>
              </div>

              {/* Tier 2 - ZKP Delete */}
              <div className="bg-pearl-panel backdrop-blur-sm border-2 border-pearl-blue rounded-2xl p-6 sm:p-8 space-y-6 hover:border-pearl-blue/80 transition-all duration-300 hover:shadow-2xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-pearl-blue text-white border-0 text-xs sm:text-sm px-4 py-1">
                    Recommended
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">ZKP Delete</h3>
                    <Badge className="bg-success text-white border-0 text-xs sm:text-sm">
                      Enterprise Pilot
                    </Badge>
                  </div>
                  <p className="text-sm text-white/60 uppercase tracking-wider font-semibold">
                    Zero-Knowledge Proof
                  </p>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  The privacy standard. Proves data is gone without revealing what the data was.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Total privacy protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">GDPR compliant</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Premium protection</span>
                  </div>
                </div>

                <button
                  onClick={() => onInitiate('ZKP')}
                  className="w-full bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Select ZKP Delete
                </button>
              </div>

              {/* Tier 3 - PQR Delete */}
              <div className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">PQR Delete</h3>
                    <Badge className="bg-success text-white border-0 text-xs sm:text-sm">
                      When it's needed, it will be ready.
                    </Badge>
                  </div>
                  <p className="text-sm text-white/60 uppercase tracking-wider font-semibold">
                    Post-Quantum Resistant
                  </p>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Future-proof security against quantum decryption attacks. The ultimate protection for long-term data erasure guarantees.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Quantum-resistant cryptography</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Future-ready architecture</span>
                  </div>
                </div>

                <button
                  onClick={() => onInitiate('PQR')}
                  className="w-full bg-white hover:bg-white/90 text-black font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Select PQR Delete
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-pearl-darker/50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                How it Works
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
                Integrate Zombie Delete into your infrastructure with flexible deployment options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Webhook */}
              <div className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pearl-blue/20 flex items-center justify-center">
                  <Link2 className="w-7 h-7 sm:w-8 sm:h-8 text-pearl-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Webhook</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    For native database connections. Seamlessly integrate deletion verification into your existing data workflows.
                  </p>
                </div>
              </div>

              {/* SDK */}
              <div className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pearl-blue/20 flex items-center justify-center">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 text-pearl-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">SDK</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    For custom app development. Build deletion verification directly into your applications with our developer toolkit.
                  </p>
                </div>
              </div>

              {/* On-Chain */}
              <div className="bg-pearl-panel backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pearl-blue/20 flex items-center justify-center">
                  <Database className="w-7 h-7 sm:w-8 sm:h-8 text-pearl-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">On-Chain</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    For immutable ledger enforcement. Deploy deletion proofs directly to the Internet Computer blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
