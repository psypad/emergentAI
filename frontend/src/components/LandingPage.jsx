import React from 'react';
import { MessageCircle, Download, Shield, Zap, Users, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const LandingPage = ({ onGetStarted }) => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "P2P Messaging",
      description: "Truly decentralized chat with end-to-end encryption. No servers, no data mining."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Torrent Management",
      description: "Advanced BitTorrent client with smart bandwidth management and seeding optimization."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anonymous & Secure",
      description: "Your identity remains private. All communications are encrypted and metadata-free."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized P2P protocols ensure maximum speed and minimum latency."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Swarm Intelligence",
      description: "Automatic peer discovery and optimal route selection for best performance."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with users worldwide in a truly distributed network infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              DecentralChat
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              The Future of Private Communication
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Experience true digital freedom with our P2P chat and file sharing platform. 
              No central servers, no surveillance, no limits - just pure peer-to-peer connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg transition-all duration-300"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Why Choose DecentralChat?
          </h2>
          <p className="text-xl text-gray-400">
            Built for privacy, designed for performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">2.5M+</div>
              <div className="text-gray-400">Files Shared</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-400">Privacy Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Take control of your digital communications. No signup required, no data collected.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl transition-all duration-300 transform hover:scale-105"
          >
            Launch Dashboard
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 DecentralChat. Truly decentralized, always free.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;