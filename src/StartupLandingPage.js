import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

export default function StartupLandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-bold">Xenotix Tech</div>
        <div className="flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Tech Stack</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Articles</a>
        </div>
        {/* <Button className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-xl">Contact Now</Button> */}
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 relative">
        <h1 className="text-5xl font-bold mb-4">Got a startup Idea?</h1>
        <p className="text-gray-400 mb-6">Let's Turn It Into Reality.</p>
        <div className="flex justify-center gap-4">
          {["🗂️", "📊", "🔍", "📝", "☁️"].map((icon, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-2 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </section>

      {/* IoT Section */}
      <section className="text-center py-16 relative">
        <h2 className="text-3xl font-semibold mb-2">Curious About IoT..?</h2>
        <p className="text-gray-400 mb-6">Why Not Create It?</p>
        {/* <Button className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-xl mb-10">Pracpoint →</Button> */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              🤖
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Cards */}
      <FloatingCard title="Blockchain" content="Smart Contracts, DApps, Tokens" position="top-60 left-8" />
      <FloatingCard title="UI/UX Designing" content="Figma, Adobe XD, Wireframe" position="top-96 left-4" />
      <FloatingCard title="Social Media Marketing" content="SEO, Ads, Branding" position="top-60 right-8" />
      <FloatingCard title="META ADS" content="Google Ads, Meta Verified" position="top-96 right-4" />
    </div>
  );
}

function FloatingCard({ title, content, position }) {
  return (
    <motion.div
      className={`absolute ${position} bg-gradient-to-r from-purple-700 to-blue-500 rounded-2xl p-4 shadow-xl w-52 text-white text-sm`}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <h3 className="font-semibold mb-1">{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
}
