'use client'
import React, { useState } from 'react';

interface ApiSyncProps {
  onSync?: () => Promise<void>;
  initialListingsCount?: number;
}

interface SyncState {
  status: 'synced' | 'syncing' | 'error';
  listingsCount: number;
  lastSync: Date;
}

const SyncAPI: React.FC<ApiSyncProps> = ({ 
  onSync, 
  initialListingsCount = 24 
}) => {
  const [syncState, setSyncState] = useState<SyncState>({
    status: 'synced',
    listingsCount: initialListingsCount,
    lastSync: new Date()
  });

  const [isSyncing, setIsSyncing] = useState(false);

  const formatLastSync = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    
    const isToday = date.toDateString() === now.toDateString();
    if (isToday) {
      return `Today at ${date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })}`;
    }
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncState(prev => ({ ...prev, status: 'syncing' }));

    try {
      // Call the provided onSync function or simulate sync
      if (onSync) {
        await onSync();
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      // Update state after successful sync
      setSyncState({
        status: 'synced',
        listingsCount: syncState.listingsCount, // In real app, this would come from API
        lastSync: new Date()
      });
    } catch (error) {
      setSyncState(prev => ({ ...prev, status: 'error' }));
      console.error('Sync failed:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  const getStatusDisplay = () => {
    switch (syncState.status) {
      case 'syncing':
        return { text: 'Syncing...', color: 'text-blue-600' };
      case 'error':
        return { text: 'Sync failed', color: 'text-red-600' };
      case 'synced':
      default:
        return { text: 'All synced', color: 'text-green12' };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="bg-white border border-solid border-gray-1100 rounded-xl mt-6 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-black-1000 font-semibold text-lg leading-7 mb-1 tracking-[-0.45px]">
            API Sync
          </h4>
          <p className="text-sm font-normal leading-5 text-gray-1000">
            Sync listings from your property management system
          </p>
        </div>
        <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
          <img src="../images/clock-green.svg" alt="Sync icon" />
        </span>
      </div>

      <ul className="mb-4">
        <li className="text-gray-1000 font-normal text-sm leading-5 mb-3 flex items-center justify-between">
          Status 
          <span className={`${statusDisplay.color} font-medium`}>
            {statusDisplay.text}
          </span>
        </li>
        <li className="text-gray-1000 font-normal text-sm leading-5 mb-3 flex items-center justify-between">
          Synced Listings 
          <span className="text-black-1000 font-medium">
            {syncState.listingsCount}
          </span>
        </li>
        <li className="text-gray-1000 font-normal text-sm leading-5 flex items-center justify-between">
          Last Sync 
          <span className="text-black-1000 font-medium">
            {formatLastSync(syncState.lastSync)}
          </span>
        </li>
      </ul>

      <button
        onClick={handleSync}
        disabled={isSyncing}
        className={`
          h-10 px-4 gap-2 w-full
          bg-white border border-solid border-gray-1100 
          text-black-1000 font-medium rounded-lg
          flex items-center justify-center
          transition-all duration-200
          ${isSyncing 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]'
          }
        `}
      >
        <img 
          src="../images/sync-icon.svg" 
          alt="" 
          className={isSyncing ? 'animate-spin' : ''}
        />
        {isSyncing ? 'Syncing...' : 'Sync Now'}
      </button>
    </div>
  );
};

export default SyncAPI;