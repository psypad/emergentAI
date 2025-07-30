import React from 'react';
import { 
  Users, 
  MessageCircle, 
  Download, 
  Upload, 
  Activity, 
  Wifi,
  HardDrive,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { dashboardStats, p2pStats, recentActivity, torrentFiles } from '../data/mock';

const Dashboard = () => {
  const statsCards = [
    {
      title: 'Connected Peers',
      value: dashboardStats.connectedPeers,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      change: '+12%'
    },
    {
      title: 'Active Chats',
      value: dashboardStats.activeChats,
      icon: MessageCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      change: '+25%'
    },
    {
      title: 'Files Shared',
      value: dashboardStats.filesShared,
      icon: HardDrive,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      change: '+8%'
    },
    {
      title: 'Upload Ratio',
      value: dashboardStats.uploadRatio,
      icon: TrendingUp,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      change: '+15%'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'download_complete': return Download;
      case 'new_peer': return Users;
      case 'file_shared': return Upload;
      case 'chat_message': return MessageCircle;
      default: return Activity;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'downloading': return 'bg-blue-500';
      case 'seeding': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      case 'queued': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back to your P2P network</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Wifi className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium">Connected</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{dashboardStats.networkLatency}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Network Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Network Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Download Speed</span>
                <span className="text-green-400 font-medium">{p2pStats.downloadSpeed}</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Upload Speed</span>
                <span className="text-blue-400 font-medium">{p2pStats.uploadSpeed}</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Downloaded</span>
                <span className="text-white font-medium">{p2pStats.totalDownloaded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Uploaded</span>
                <span className="text-white font-medium">{p2pStats.totalUploaded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Share Ratio</span>
                <span className="text-purple-400 font-medium">{p2pStats.shareRatio}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Activity className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gray-700/50">
                      <Icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white">{activity.message}</p>
                      <p className="text-xs text-gray-400 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Downloads Overview */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white">
            <Download className="w-5 h-5" />
            <span>Active Downloads</span>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
              {torrentFiles.filter(t => t.status === 'downloading').length} active
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {torrentFiles.slice(0, 3).map((torrent) => (
              <div key={torrent.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/30">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(torrent.status)}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{torrent.name}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                    <span>{torrent.size}</span>
                    <span>•</span>
                    <span className="capitalize">{torrent.status}</span>
                    {torrent.status === 'downloading' && (
                      <>
                        <span>•</span>
                        <span>{torrent.downloadSpeed}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{torrent.progress}%</p>
                  <Progress value={torrent.progress} className="w-20 h-1.5 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;