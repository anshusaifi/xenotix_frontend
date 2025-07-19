import React from 'react';

const RotatingIcons = () => {
  const icons = [
    { id: 1, icon: '💡', rotation: '-rotate-12' },
    { id: 2, icon: '🚀', rotation: '-rotate-12' },
    { id: 3, icon: '⚡', rotation: '-rotate-12' },
    { id: 4, icon: '🎯', rotation: 'rotate-12' },
    { id: 5, icon: '💎', rotation: 'rotate-12' },
    { id: 6, icon: '🔥', rotation: 'rotate-12' }
  ];

  return (
    <div className="text-center py-20">
      {/* Brand Name */}
      <div className="text-gray-400 text-sm font-medium mb-8 tracking-wider my-4">
        Xenotix Tech
      </div>
      
      {/* Main Heading */}
      <h1 className="text-white text-4xl font-bold -my-5">
        Got a startup Idea ?
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-400 text-xl mb-12 font-light my-10">
        Let's Turn It Into Reality.
      </p>
      
      {/* Rotating Icons */}
      <div className="flex items-center justify-center gap-8 -my-8">
        {icons.map((item) => (
          <div
            key={item.id}
            className={`w-10 h-10 bg-slate-300 rounded-2xl flex items-center justify-center transform transition-transform duration-300 hover:scale-110 ${item.rotation} shadow-lg border border-gray-700`}
          >
            <span className="text-2xl">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingIcons;