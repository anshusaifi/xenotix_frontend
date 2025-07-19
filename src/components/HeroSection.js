import { useState, useEffect } from 'react';
import { Wifi, Settings, Smartphone, Car, Home, User, Zap, Bot } from 'lucide-react';

const HeroSection = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const topicNodes = [
    
    { id: 1, label: 'Smart Home', row: 0, col: 0, robotColor: 'text-blue-400' },
    { id: 2, label: 'Connected Cars', row: 0, col: 1, robotColor: 'text-green-400' },
    
    
    { id: 3, label: 'Sensors', row: 1, col: 0, robotColor: 'text-purple-400' },
    { id: 4, label: 'IoT Hub', row: 1, col: 1, isCenter: true, robotColor: 'text-white' },
    { id: 5, label: 'Mobile IoT', row: 1, col: 2, robotColor: 'text-pink-400' },
    
    
    { id: 6, label: 'Industrial IoT', row: 2, col: 0, robotColor: 'text-orange-400' },
    { id: 7, label: 'Energy Systems', row: 2, col: 1, robotColor: 'text-yellow-400' },
  ];

 
  const connectionIcons = [
    
    { id: 1, icon: Settings, position: { top: '25%', left: '38%' }, rotation: 0 },      
    { id: 2, icon: Car, position: { top: '25%', right: '38%' }, rotation: 0 },         
    { id: 3, icon: Wifi, position: { top: '48%', left: '25%' }, rotation: 0 },         
    { id: 4, icon: Smartphone, position: { top: '48%', right: '25%' }, rotation: 0 },  
    { id: 5, icon: Home, position: { bottom: '25%', left: '38%' }, rotation: 0 },      
    { id: 6, icon: Zap, position: { bottom: '25%', right: '38%' }, rotation: 0 },    
  ];


  const userAvatars = [
    { 
      id: 1, 
      position: { top: '12%', left: '12%' }, 
      color: 'bg-blue-400',
      size: 'w-8 h-8', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      name: 'Alex'
    },
    { 
      id: 2, 
      position: { top: '10%', right: '5%' }, 
      color: 'bg-green-400',
      size: 'w-16 h-16', 
      image: 'https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg',
      name: 'Sarah'
    },
    { 
      id: 3, 
      position: { bottom: '12%', left: '12%' }, 
      color: 'bg-purple-400',
      size: 'w-8 h-8', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      name: 'Mike'
    },
    { 
      id: 4, 
      position: { bottom: '10%', right: '5%' }, 
      color: 'bg-pink-400',
      size: 'w-16 h-16', 
      image: 'https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg',
      name: 'Emma'
    },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4">
      
      
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        
        <div className="text-center mb-6 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-2">
            Curious About IoT..?
          </h1>
          <p className="text-base text-gray-300 mb-4">
            Why Not Create It?
          </p>
          
          
          <button className="bg-gradient-to-t from-stone-900 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 mx-auto mb-8">
            <Settings className="w-4 h-4" />
            Pracpoint →
          </button>
        </div>

        
        <div className="relative">
          
          <div className="absolute inset-0 w-72 h-56 border-2 border-dashed border-purple-400/50 rounded-3xl" 
               style={{ 
                 left: '50%', 
                 top: '50%', 
                 transform: 'translate(-50%, -50%)',
                 animation: mounted ? 'pulse 3s ease-in-out infinite' : 'none'
               }}>
          </div>

        
          <div className="grid grid-cols-3 gap-1.5 place-items-center mb-4">
            {topicNodes.map((node, index) => {
              return (
                <div
                  key={node.id}
                  className={`transition-all duration-700 ${
                    mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{
                    gridColumn: node.row === 0 ? (node.col === 0 ? '1' : '3') : 
                               node.row === 1 ? (node.col + 1) : 
                               (node.col === 0 ? '1' : '3'),
                    gridRow: node.row + 1,
                    animationDelay: `${index * 150}ms`,
                    marginLeft: node.row === 0 && node.col === 1 ? '-8px' : 
                              node.row === 2 && node.col === 1 ? '-8px' : '0px',
                    marginRight: node.row === 0 && node.col === 0 ? '-8px' : 
                               node.row === 2 && node.col === 0 ? '-8px' : '0px',
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={`
                    ${node.isCenter 
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600' 
                      : 'bg-gradient-to-br from-purple-700/80 to-blue-700/80'
                    } 
                    backdrop-blur-sm border ${node.isCenter ? 'border-purple-400/50' : 'border-purple-500/30'}
                    w-24 h-20 
                    rounded-xl flex flex-col items-center justify-center 
                    cursor-pointer transition-all duration-300
                    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50
                    ${hoveredNode === node.id ? 'ring-2 ring-purple-400 scale-105' : ''}
                    ${node.isCenter ? 'shadow-2xl ring-2 ring-purple-400/30 z-20' : 'z-10'}
                    relative
                  `}>
                    
                    <Bot className={`w-8 h-8 ${node.robotColor} mb-1 ${node.isCenter ? 'animate-bounce' : ''}`} />
                    
                   
                    <span className="text-white text-xs font-medium text-center px-1">
                      {node.label}
                    </span>
                  </div>
                  
                
                  {hoveredNode === node.id && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap z-30">
                      {node.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Connection Icons - On the wrapper border */}
          {connectionIcons.map((iconNode, index) => {
            const IconComponent = iconNode.icon;
            return (
              <div
                key={iconNode.id}
                className={`absolute z-30 transition-all duration-700 ${
                  mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  ...iconNode.position,
                  animationDelay: `${(index + 7) * 100}ms`,
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border-2 border-purple-400 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-purple-100 shadow-lg hover:shadow-purple-500/50">
                  <IconComponent className="w-3.5 h-3.5 text-purple-700" />
                </div>
              </div>
            );
          })}

          {/* Connection Lines - From wrapper border icons to boxes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
              </linearGradient>
            </defs>
            
            {mounted && (
              <>
                {/* Lines from border icons to respective boxes */}
                <line x1="40%" y1="25%" x2="25%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="60%" y1="25%" x2="75%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="25%" y1="48%" x2="15%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="75%" y1="48%" x2="85%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="40%" y1="75%" x2="25%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
                <line x1="60%" y1="75%" x2="75%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
              </>
            )}
          </svg>
        </div>

        {/* User Avatars with Custom Images */}
        {userAvatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`absolute z-20 transition-all duration-500 group ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              ...avatar.position,
              animationDelay: `${(index + 13) * 100}ms`,
            }}
          >
            <div className={`
              ${avatar.size}
              rounded-full border-3 border-white/40 
              cursor-pointer transition-all duration-300
              hover:scale-110 hover:border-white/80
              shadow-lg hover:shadow-xl
              overflow-hidden
              bg-gradient-to-br ${avatar.color}
              relative
            `}>
              <img 
                src={avatar.image} 
                alt={avatar.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback icon (hidden by default) */}
              <div className="absolute inset-0 items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-full hidden">
                <User className="w-4 h-4 text-white" />
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {avatar.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom decorative element */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Interactive Learning Experience</span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;