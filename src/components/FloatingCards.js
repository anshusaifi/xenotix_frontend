import React from 'react';
import { Star, Users, TrendingUp, Zap, Code, Smartphone, Globe, Brain, Shield, Rocket } from 'lucide-react';

const FloatingCards = () => {
  const cards = [
    {
      id: 1,
      title: "Xenotix Tech",
      subtitle: "Tired of Your 9-5?",
      description: "Quit Dreaming, Start Building",
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      image: null, 
      position: "top-24 left-4", 
      rotation: "-rotate-12",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "AI/ML Solutions",
      subtitle: "Machine Learning & AI",
      description: "Transform Your Business",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      image: "https://images.pexels.com/photos/33041778/pexels-photo-33041778.png", 
      position: "top-32 left-16", // 
      rotation: "rotate-6",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      title: "Blockchain",
      subtitle: "Decentralized Solutions",
      description: "Web3 & Smart Contracts",
      icon: <Shield className="w-6 h-6 text-green-400" />,
      image: null, 
      position: "bottom-4 left-8", 
      rotation: "-rotate-3",
      gradient: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "UI/UX Design",
      subtitle: "Creating intuitive, aesthetic, and user-friendly digital experiences",
      description: "Modern Design Solutions",
      icon: <Code className="w-6 h-6 text-orange-400" />,
      image: null, 
      position: "bottom-20 left-2",
      rotation: "rotate-12",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Xenotix Tech",
      subtitle: "Posting but getting zero traction?",
      description: "→ Social Media Marketing",
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
      image: null, 
      position: "top-24 right-4", 
      rotation: "rotate-8",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      id: 6,
      title: "Xenotix Tech",
      subtitle: "Start Online Business?",
      description: "E-commerce Solutions",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      image: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg",
      position: "top-40 right-12", 
      rotation: "-rotate-6",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 7,
      title: "Google Ads",
      subtitle: "4.8 Reviews",
      description: "META ADS",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      image: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg", 
      position: "bottom-4 right-8", 
      rotation: "rotate-3",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      id: 8,
      title: "Social Media Marketing",
      subtitle: "Unlock new opportunities for your brand. Our streamlined approach helps you capture your online presence.",
      description: "Digital Marketing Solutions",
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      image: null, 
      position: "bottom-20 right-2",
      rotation: "-rotate-9",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 9,
      title: "Mobile Development",
      subtitle: "iOS & Android Apps",
      description: "Cross-platform Solutions",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", 
      position: "top-96 left-2", 
      rotation: "rotate-15",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      id: 10,
      title: "Performance Boost",
      subtitle: "Optimization Services",
      description: "Speed & Efficiency",
      icon: <Zap className="w-6 h-6 text-red-400" />,
      image: null, 
      position: "top-96 right-2", 
      rotation: "-rotate-12",
      gradient: "from-red-600 to-pink-600"
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`absolute ${card.position} ${card.rotation} pointer-events-auto`}
          style={{ 
            
            maxWidth: '280px'
          }}
        >
          <div className={`bg-gradient-to-br ${card.gradient} p-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 max-w-xs hover:scale-105 transition-all duration-300 cursor-pointer group`}>
            {/* Header with icon/image and title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-black/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                {card.image ? (
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div style={{ display: card.image ? 'none' : 'block' }}>
                  {card.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-sm truncate">{card.title}</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <p className="text-white/90 text-xs leading-relaxed line-clamp-3">
                {card.subtitle}
              </p>
              {card.description && (
                <p className="text-white/80 text-xs font-medium">
                  {card.description}
                </p>
              )}
            </div>
            
            {/* Floating animation effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
            
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-300`}></div>
          </div>
        </div>
      ))}
      
     
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default FloatingCards;