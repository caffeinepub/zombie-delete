import { useState } from 'react';
import { ZombieDeleteDashboard } from './components/ZombieDeleteDashboard';
import { ProcessTerminal } from './components/ProcessTerminal';
import { DeletionReceipt } from './components/DeletionReceipt';
import { Graveyard } from './components/Graveyard';

type AppState = 'dashboard' | 'process' | 'receipt' | 'graveyard';

export interface Tombstone {
  id: string;
  proofId: string;
  tier: string;
  status: string;
  restoreCapability: string;
  lockDuration: string;
  timestamp: string;
}

function App() {
  const [state, setState] = useState<AppState>('dashboard');
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [tombstones, setTombstones] = useState<Tombstone[]>([
    {
      id: 'TS-001',
      proofId: '0x7f8a9c2d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b',
      tier: 'ZKP',
      status: 'LOCKED',
      restoreCapability: 'BLOCKED',
      lockDuration: '5 Years',
      timestamp: '2025-01-10T14:32:18Z',
    },
    {
      id: 'TS-002',
      proofId: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      tier: 'MKT',
      status: 'LOCKED',
      restoreCapability: 'BLOCKED',
      lockDuration: '5 Years',
      timestamp: '2025-01-09T09:15:42Z',
    },
    {
      id: 'TS-003',
      proofId: '0x9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e',
      tier: 'PQR',
      status: 'LOCKED',
      restoreCapability: 'BLOCKED',
      lockDuration: '5 Years',
      timestamp: '2025-01-08T16:47:55Z',
    },
  ]);

  const handleInitiateDelete = (tier: string) => {
    setSelectedTier(tier);
    setState('process');
  };

  const handleProcessComplete = () => {
    setState('receipt');
  };

  const handleReset = () => {
    setState('dashboard');
    setSelectedTier('');
  };

  const handleViewGraveyard = () => {
    setState('graveyard');
  };

  const handleAddTombstone = () => {
    // Generate a new tombstone from the current receipt
    const newTombstone: Tombstone = {
      id: `TS-${String(tombstones.length + 1).padStart(3, '0')}`,
      proofId: `0x${Math.random().toString(16).substring(2, 66)}`,
      tier: selectedTier,
      status: 'LOCKED',
      restoreCapability: 'BLOCKED',
      lockDuration: '5 Years',
      timestamp: new Date().toISOString(),
    };
    setTombstones([newTombstone, ...tombstones]);
  };

  return (
    <div className="min-h-screen bg-pearl-dark text-white">
      {state === 'dashboard' && (
        <ZombieDeleteDashboard 
          onInitiate={handleInitiateDelete} 
          onViewGraveyard={handleViewGraveyard}
        />
      )}
      {state === 'process' && (
        <ProcessTerminal onNext={handleProcessComplete} tier={selectedTier} />
      )}
      {state === 'receipt' && (
        <DeletionReceipt 
          onReset={handleReset} 
          tier={selectedTier}
          onViewGraveyard={handleViewGraveyard}
          onAddTombstone={handleAddTombstone}
        />
      )}
      {state === 'graveyard' && (
        <Graveyard 
          tombstones={tombstones}
          onReturnToDashboard={handleReset}
        />
      )}
    </div>
  );
}

export default App;
