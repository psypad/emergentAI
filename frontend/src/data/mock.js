// Mock data for P2P Chat and File Management Dashboard

export const currentUser = {
  id: 'user-1',
  username: 'john_doe',
  displayName: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  status: 'online',
  publicKey: 'ED25519:2yWERhJ8S9b1JvQs8w...',
  peers: 24,
  filesShared: 156
};

export const chatContacts = [
  {
    id: 'user-2',
    username: 'alice_smith',
    displayName: 'Alice Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    status: 'online',
    lastMessage: 'Hey, did you get that file?',
    timestamp: '2 min ago',
    unreadCount: 2,
    isTyping: false
  },
  {
    id: 'user-3',
    username: 'bob_wilson',
    displayName: 'Bob Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    status: 'online',
    lastMessage: 'Thanks for the torrent link!',
    timestamp: '5 min ago',
    unreadCount: 0,
    isTyping: true
  },
  {
    id: 'user-4',
    username: 'carol_davis',
    displayName: 'Carol Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    status: 'away',
    lastMessage: 'See you tomorrow',
    timestamp: '1 hour ago',
    unreadCount: 0,
    isTyping: false
  },
  {
    id: 'user-5',
    username: 'dave_brown',
    displayName: 'Dave Brown',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    status: 'offline',
    lastMessage: 'Great file sharing app!',
    timestamp: '3 hours ago',
    unreadCount: 1,
    isTyping: false
  }
];

export const chatMessages = {
  'user-2': [
    {
      id: 'msg-1',
      senderId: 'user-2',
      content: 'Hey John! How are you doing?',
      timestamp: '10:30 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 'msg-2',
      senderId: 'user-1',
      content: 'Hi Alice! All good here. Just testing the new P2P features.',
      timestamp: '10:32 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 'msg-3',
      senderId: 'user-2',
      content: 'Awesome! Can you share that documentary we talked about?',
      timestamp: '10:35 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 'msg-4',
      senderId: 'user-1',
      content: 'Sure! Here\'s the torrent file:',
      timestamp: '10:36 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 'msg-5',
      senderId: 'user-1',
      content: 'Nature_Documentary_4K.torrent',
      timestamp: '10:36 AM',
      type: 'file',
      fileData: {
        name: 'Nature_Documentary_4K.torrent',
        size: '1.2 MB',
        type: 'torrent'
      },
      status: 'delivered'
    },
    {
      id: 'msg-6',
      senderId: 'user-2',
      content: 'Perfect! Downloading now. Thanks!',
      timestamp: '10:38 AM',
      type: 'text',
      status: 'delivered'
    }
  ]
};

export const torrentFiles = [
  {
    id: 'torrent-1',
    name: 'Ubuntu 24.04 LTS Desktop',
    magnet: 'magnet:?xt=urn:btih:...',
    size: '4.7 GB',
    status: 'downloading',
    progress: 67,
    seeds: 234,
    peers: 45,
    downloadSpeed: '2.5 MB/s',
    uploadSpeed: '800 KB/s',
    eta: '12 min',
    priority: 'high',
    category: 'Software'
  },
  {
    id: 'torrent-2',
    name: 'Nature Documentary Collection 4K',
    magnet: 'magnet:?xt=urn:btih:...',
    size: '15.2 GB',
    status: 'seeding',
    progress: 100,
    seeds: 89,
    peers: 23,
    downloadSpeed: '0 KB/s',
    uploadSpeed: '1.2 MB/s',
    eta: 'Complete',
    priority: 'normal',
    category: 'Movies'
  },
  {
    id: 'torrent-3',
    name: 'Programming Tutorials 2024',
    magnet: 'magnet:?xt=urn:btih:...',
    size: '8.9 GB',
    status: 'paused',
    progress: 23,
    seeds: 156,
    peers: 67,
    downloadSpeed: '0 KB/s',
    uploadSpeed: '0 KB/s',
    eta: '∞',
    priority: 'low',
    category: 'Education'
  },
  {
    id: 'torrent-4',
    name: 'Open Source Games Pack',
    magnet: 'magnet:?xt=urn:btih:...',
    size: '12.4 GB',
    status: 'queued',
    progress: 0,
    seeds: 78,
    peers: 12,
    downloadSpeed: '0 KB/s',
    uploadSpeed: '0 KB/s',
    eta: 'Queued',
    priority: 'normal',
    category: 'Games'
  },
  {
    id: 'torrent-5',
    name: 'Creative Commons Music',
    magnet: 'magnet:?xt=urn:btih:...',
    size: '2.1 GB',
    status: 'error',
    progress: 12,
    seeds: 0,
    peers: 0,
    downloadSpeed: '0 KB/s',
    uploadSpeed: '0 KB/s',
    eta: 'Error',
    priority: 'normal',
    category: 'Music'
  }
];

export const p2pStats = {
  totalPeers: 1247,
  activeTorrents: 5,
  totalDownloaded: '156.7 GB',
  totalUploaded: '89.3 GB',
  downloadSpeed: '3.2 MB/s',
  uploadSpeed: '2.1 MB/s',
  shareRatio: 0.57,
  networkStatus: 'Connected'
};

export const recentActivity = [
  {
    id: 'activity-1',
    type: 'download_complete',
    message: 'Ubuntu 24.04 LTS Desktop download completed',
    timestamp: '5 min ago',
    icon: 'download'
  },
  {
    id: 'activity-2',
    type: 'new_peer',
    message: 'Connected to 12 new peers',
    timestamp: '8 min ago',
    icon: 'users'
  },
  {
    id: 'activity-3',
    type: 'file_shared',
    message: 'Shared Nature_Documentary_4K.torrent with Alice',
    timestamp: '15 min ago',
    icon: 'share'
  },
  {
    id: 'activity-4',
    type: 'chat_message',
    message: 'New message from Bob Wilson',
    timestamp: '20 min ago',
    icon: 'message-circle'
  }
];

export const dashboardStats = {
  connectedPeers: 24,
  activeChats: 3,
  filesShared: 156,
  totalDownloaded: '2.4 TB',
  uploadRatio: '1.8',
  networkLatency: '45ms'
};