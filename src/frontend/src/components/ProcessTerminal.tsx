import { useEffect, useState } from 'react';
import { Terminal, Lock, Shield, Zap } from 'lucide-react';

interface ProcessTerminalProps {
  onNext: () => void;
  tier: string;
}

const getLogLines = (tier: string) => {
  const baseLines = [
    'Initializing secure connection...',
    'Connecting to Internet Computer Protocol...',
    'Establishing encrypted channel...',
  ];

  const tierSpecificLines: Record<string, string[]> = {
    MKT: [
      'Generating Merkle Tree structure...',
      'Computing hash values...',
      'Building immutable deletion log...',
      'Verifying tree integrity...',
    ],
    ZKP: [
      'Generating zk-SNARK proof...',
      'Computing witness data...',
      'Verifying Non-Membership...',
      'Validating cryptographic constraints...',
    ],
    PQR: [
      'Initializing post-quantum algorithms...',
      'Generating lattice-based proof...',
      'Computing quantum-resistant signature...',
      'Verifying future-proof deletion...',
    ],
  };

  const endLines = [
    'Planting cryptographic tombstone...',
    'Finalizing deletion proof...',
    'Securing immutable record...',
    'Process complete.',
  ];

  return [...baseLines, ...(tierSpecificLines[tier] || tierSpecificLines.ZKP), ...endLines];
};

const getAsciiArt = (tier: string): string[] => {
  const asciiArt: Record<string, string[]> = {
    MKT: [
      '                    ╔═══════════════════════════════╗',
      '                    ║     MERKLE TREE DELETE        ║',
      '                    ╚═══════════════════════════════╝',
      '',
      '                           ┌─────────┐',
      '                           │  ROOT   │',
      '                           └────┬────┘',
      '                      ┌─────────┴─────────┐',
      '                  ┌───┴───┐           ┌───┴───┐',
      '                  │ HASH  │           │ HASH  │',
      '                  └───┬───┘           └───┬───┘',
      '                ┌─────┴─────┐       ┌─────┴─────┐',
      '              ┌─┴─┐       ┌─┴─┐   ┌─┴─┐       ┌─┴─┐',
      '              │ █ │       │ █ │   │ █ │       │ █ │',
      '              └───┘       └───┘   └───┘       └───┘',
      '',
    ],
    ZKP: [
      '                    ╔═══════════════════════════════╗',
      '                    ║   ZERO-KNOWLEDGE PROOF        ║',
      '                    ╚═══════════════════════════════╝',
      '',
      '                          ╔═════════════╗',
      '                          ║             ║',
      '                          ║   ▓▓▓▓▓▓▓   ║',
      '                          ║   ▓▓███▓▓   ║',
      '                          ║   ▓█████▓   ║',
      '                          ║   ▓▓███▓▓   ║',
      '                          ║   ▓▓▓▓▓▓▓   ║',
      '                          ║             ║',
      '                          ╚═════════════╝',
      '                         PRIVACY SHIELD',
      '',
    ],
    PQR: [
      '                    ╔═══════════════════════════════╗',
      '                    ║  POST-QUANTUM RESISTANT       ║',
      '                    ╚═══════════════════════════════╝',
      '',
      '                              ⚛',
      '                          ╱   │   ╲',
      '                        ●     ●     ●',
      '                       ╱│╲   ╱│╲   ╱│╲',
      '                      ● ● ● ● ● ● ● ● ●',
      '                       ╲│╱   ╲│╱   ╲│╱',
      '                        ●     ●     ●',
      '                          ╲   │   ╱',
      '                              ⚛',
      '                      QUANTUM LATTICE',
      '',
    ],
  };

  return asciiArt[tier] || asciiArt.ZKP;
};

export function ProcessTerminal({ onNext, tier }: ProcessTerminalProps) {
  const [logLines] = useState(() => getLogLines(tier));
  const [asciiArt] = useState(() => getAsciiArt(tier));
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flickerStates, setFlickerStates] = useState([true, true, true]);
  const [showCursor, setShowCursor] = useState(true);
  const [uptime, setUptime] = useState(0);
  const [packets, setPackets] = useState(0);

  // Flickering console lights effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlickerStates([
        Math.random() > 0.3,
        Math.random() > 0.4,
        Math.random() > 0.35,
      ]);
    }, 200);

    return () => clearInterval(flickerInterval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Update uptime and packets
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
      setPackets((prev) => prev + Math.floor(Math.random() * 500) + 200);
    }, 1000);

    return () => clearInterval(statsInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < logLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, logLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timeout);
    } else {
      const completeTimeout = setTimeout(() => {
        onNext();
      }, 5000);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, logLines, onNext]);

  const getTierName = () => {
    const tierNames: Record<string, string> = {
      MKT: 'Merkle Tree Delete',
      ZKP: 'Zero-Knowledge Proof',
      PQR: 'Post-Quantum Resistant',
    };
    return tierNames[tier] || 'Zombie Delete';
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Subtle static grid pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Flickering console lights */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <div
          className={`w-3 h-3 rounded-full transition-opacity duration-100 ${
            flickerStates[0] ? 'bg-terminal-green opacity-100 shadow-glow-green' : 'bg-terminal-green/20 opacity-50'
          }`}
        />
        <div
          className={`w-3 h-3 rounded-full transition-opacity duration-100 ${
            flickerStates[1] ? 'bg-terminal-green opacity-100 shadow-glow-green' : 'bg-terminal-green/20 opacity-50'
          }`}
        />
        <div
          className={`w-3 h-3 rounded-full transition-opacity duration-100 ${
            flickerStates[2] ? 'bg-terminal-green opacity-100 shadow-glow-green' : 'bg-terminal-green/20 opacity-50'
          }`}
        />
      </div>

      {/* Main terminal content */}
      <div className="relative h-full flex flex-col p-3 sm:p-6 md:p-8">
        {/* Terminal header */}
        <div className="bg-terminal-green/10 border-2 border-terminal-green/50 rounded-t-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green animate-glow-subtle" />
            <span className="text-terminal-green text-xs sm:text-sm tracking-wide">
              Zombie Delete Protocol - {getTierName()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-terminal-green/70 animate-pulse-soft" />
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-terminal-green/70 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-terminal-green/70 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Terminal body */}
        <div className="flex-1 bg-black/95 border-2 border-t-0 border-terminal-green/50 p-4 sm:p-6 md:p-8 text-xs sm:text-sm md:text-base overflow-y-auto terminal-scrollbar backdrop-blur-sm shadow-terminal-strong">
          <div className="space-y-2 sm:space-y-3">
            {/* ASCII Art Header */}
            <div className="text-terminal-green font-mono text-[8px] sm:text-xs leading-tight mb-6 animate-terminal-fade-in whitespace-pre">
              {asciiArt.map((line, index) => (
                <div key={index} className="terminal-glow">
                  {line}
                </div>
              ))}
            </div>

            {/* System info header */}
            <div className="text-terminal-green/60 mb-4 pb-3 border-b border-terminal-green/20">
              <div className="animate-terminal-fade-in">SYSTEM: Internet Computer Protocol</div>
              <div className="animate-terminal-fade-in" style={{ animationDelay: '0.1s' }}>
                MODE: {getTierName()}
              </div>
              <div className="animate-terminal-fade-in" style={{ animationDelay: '0.2s' }}>
                STATUS: ACTIVE
              </div>
            </div>

            {/* Main log lines with layered animations */}
            {displayedLines.map((line, index) => (
              <div
                key={index}
                className="text-terminal-green leading-relaxed animate-terminal-fade-in opacity-0"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <span className="text-terminal-green/50 mr-2 select-none">{'>'}</span>
                <span className="terminal-glow tracking-wide">{line}</span>
                {/* Progress indicators for certain lines */}
                {(line.includes('Generating') || line.includes('Verifying') || line.includes('Planting') || line.includes('Computing')) && (
                  <span className="ml-2 text-terminal-green/70 animate-pulse-soft">
                    [{'█'.repeat(Math.floor(Math.random() * 5) + 3)}]
                  </span>
                )}
              </div>
            ))}

            {/* Cursor */}
            {currentIndex < logLines.length && (
              <div className="text-terminal-green leading-relaxed">
                <span className="text-terminal-green/50 mr-2 select-none">{'>'}</span>
                <span className={`terminal-glow ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </div>
            )}

            {/* Additional system messages */}
            {displayedLines.length > 5 && (
              <div className="mt-6 pt-3 border-t border-terminal-green/20 space-y-2 text-terminal-green/50 text-xs animate-terminal-fade-in">
                <div>ENCRYPTION: AES-256-GCM</div>
                <div>TIER: {tier}</div>
                <div>NETWORK: Internet Computer Mainnet</div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom status bar - System Info Footer */}
        <div className="bg-terminal-green/5 border-2 border-t-0 border-terminal-green/50 rounded-b-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between text-xs text-terminal-green/70 backdrop-blur-sm">
          <div className="flex items-center gap-3 sm:gap-4">
            <span>Uptime: 99.97%</span>
            <span className="hidden sm:inline">|</span>
            <span>Packets: {packets.toLocaleString()}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden md:inline">Encryption: AES-256-GCM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`animate-pulse-soft ${showCursor ? 'opacity-100' : 'opacity-30'}`}>●</span>
            <span className="hidden sm:inline">SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
