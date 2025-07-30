import React from 'react';
import { 
  MessageCircle, 
  Download, 
  Settings, 
  Users, 
  Activity,
  Home,
  LogOut,
  Wifi,
  WifiOff
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { currentUser } from '../data/mock';

const Sidebar = ({ activeView, onViewChange, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', badge: null },
    { id: 'chat', icon: MessageCircle, label: 'P2P Chat', badge: 3 },
    { id: 'downloads', icon: Download, label: 'Downloads', badge: 5 },
    { id: 'peers', icon: Users, label: 'Peers', badge: currentUser.peers },
    { id: 'activity', icon: Activity, label: 'Activity', badge: null },
    { id: 'settings', icon: Settings, label: 'Settings', badge: null }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    return status === 'online' ? Wifi : WifiOff;
  };

  const StatusIcon = getStatusIcon(currentUser.status);

  return (
    <div className="h-full bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 flex flex-col">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarImage src={currentUser.avatar} alt={currentUser.displayName} />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                {currentUser.displayName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${getStatusColor(currentUser.status)}`}></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {currentUser.displayName}
            </p>
            <p className="text-xs text-gray-400 truncate">
              @{currentUser.username}
            </p>
          </div>
        </div>
        
        {/* Status and Network Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-gray-400">
              <StatusIcon className="w-3 h-3" />
              <span className="capitalize">{currentUser.status}</span>
            </div>
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {currentUser.peers} peers
            </Badge>
          </div>
          
          <div className="text-xs text-gray-500">
            Public Key: {currentUser.publicKey.substring(0, 20)}...
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start px-3 py-2 h-auto transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => onViewChange(item.id)}
              >
                <Icon className="w-4 h-4 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 ${
                      isActive 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Network Stats */}
      <div className="p-4 border-t border-gray-700">
        <div className="space-y-2 text-xs">
          <div className="flex justify-between text-gray-400">
            <span>Downloaded:</span>
            <span className="text-green-400 font-medium">2.4 TB</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Uploaded:</span>
            <span className="text-blue-400 font-medium">4.3 TB</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Ratio:</span>
            <span className="text-purple-400 font-medium">1.8</span>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start px-3 py-2 text-gray-400 hover:text-red-400 hover:bg-red-900/20"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;