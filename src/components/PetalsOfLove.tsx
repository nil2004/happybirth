import { useState, useEffect } from "react";
import { Heart, Gift, Music, Camera, Star, Crown, Sparkles, Flower2 } from "lucide-react";

const loveMessages = [
  {
    id: 1,
    icon: Heart,
    title: "Divine Love",
    message: "Like Radha's eternal love for Krishna, may your heart always be filled with pure, divine love that transcends all boundaries.",
    color: "text-lotus-pink",
    emoji: "💖"
  },
  {
    id: 2,
    icon: Gift,
    title: "Blessed Gift",
    message: "You are Krishna's special gift to this world, bringing joy and light wherever you go, just like the divine flute's melody.",
    color: "text-divine-gold",
    emoji: "🎁"
  },
  {
    id: 3,
    icon: Music,
    title: "Melodious Life",
    message: "May your life be like Krishna's enchanting flute music - full of harmony, peace, and melodies that touch every soul.",
    color: "text-peacock-teal",
    emoji: "🎵"
  },
  {
    id: 4,
    icon: Camera,
    title: "Beautiful Memories",
    message: "Each moment of your life is a precious memory in Krishna's divine play, captured eternally in the cosmic consciousness.",
    color: "text-lotus-white",
    emoji: "📸"
  },
  {
    id: 5,
    icon: Star,
    title: "Shining Light",
    message: "Like the stars that witnessed Krishna's divine leelas, may you always shine bright and guide others with your inner light.",
    color: "text-moonlight",
    emoji: "⭐"
  },
  {
    id: 6,
    icon: Crown,
    title: "Divine Princess",
    message: "You are Krishna's beloved devotee, worthy of all divine blessings and cosmic love that flows eternally from Vrindavan.",
    color: "text-divine-gold-light",
    emoji: "👑"
  }
];

export const PetalsOfLove = () => {
  const [openPetal, setOpenPetal] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePetal = (id: number) => {
    setOpenPetal(openPetal === id ? null : id);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            🪷
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-sanskrit text-3xl md:text-4xl lg:text-5xl text-divine-gold mb-4">
            Petals of Love
          </h2>
          <p className="font-devotional text-base md:text-lg text-moonlight italic mb-8 px-4">
            Tap each floating lotus to reveal Krishna's blessings for you
          </p>
          
          {/* Enhanced Instructions */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-lotus-pink/30 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 text-lotus-pink mb-3">
              <Flower2 className="w-5 h-5 animate-pulse" />
              <span className="font-sanskrit text-sm font-semibold">How to Use</span>
              <Flower2 className="w-5 h-5 animate-pulse" />
            </div>
            <p className="font-devotional text-sm text-moonlight leading-relaxed">
              <strong>Tap or click</strong> on any floating lotus petal below to reveal Krishna's special blessing for you. 
              Each petal holds a unique message of divine love and wisdom.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-lotus-pink">
            <div className="w-20 h-px bg-lotus-pink"></div>
            <span className="text-3xl animate-glow">🕉</span>
            <div className="w-20 h-px bg-lotus-pink"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {loveMessages.map((petal, index) => {
            const Icon = petal.icon;
            const isOpen = openPetal === petal.id;
            
            return (
              <div
                key={petal.id}
                className={`animate-fade-in relative ${isOpen ? 'mb-64 sm:mb-48' : 'mb-8'} transition-all duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  onClick={() => togglePetal(petal.id)}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    isOpen ? 'scale-105' : 'hover:scale-105 active:scale-105'
                  }`}
                >
                  {/* Lotus Petal Shape */}
                  <div
                    className={`relative w-full h-48 sm:h-56 md:h-64 rounded-full bg-gradient-watercolor shadow-soft hover:shadow-divine transition-all duration-500 ${
                      isOpen ? 'shadow-glow ring-2 ring-divine-gold' : ''
                    } flex items-center justify-center group overflow-hidden touch-manipulation`}
                  >
                    {/* Floating Emoji */}
                    <div className="absolute top-4 right-4 text-2xl animate-float opacity-80">
                      {petal.emoji}
                    </div>
                    
                    {/* Icon */}
                    <div className={`${petal.color} transition-all duration-500 ${
                      isOpen ? 'scale-125' : 'group-hover:scale-110 group-active:scale-110'
                    }`}>
                      <Icon size={isMobile ? 36 : 48} />
                    </div>

                    {/* Ripple Effect */}
                    <div className={`absolute inset-0 rounded-full border-2 border-divine-gold opacity-0 transition-all duration-300 ${
                      isOpen ? 'opacity-100 animate-ping' : ''
                    }`}></div>
                  </div>

                  {/* Message Card */}
                  <div
                    className={`absolute top-full left-0 right-0 mt-4 bg-card rounded-xl shadow-divine border border-border p-4 md:p-6 transition-all duration-500 ${
                      isOpen 
                        ? 'opacity-100 transform translate-y-0 visible' 
                        : 'opacity-0 transform translate-y-4 pointer-events-none invisible'
                    }`}
                  >
                    <h3 className="font-sanskrit text-lg md:text-xl text-divine-gold mb-3 text-center">
                      {petal.title}
                    </h3>
                    <p className="font-devotional text-sm md:text-base text-foreground leading-relaxed text-center">
                      {petal.message}
                    </p>
                    
                    {/* Decorative Border */}
                    <div className="flex items-center justify-center mt-4 space-x-2 text-lotus-pink">
                      <div className="w-8 h-px bg-lotus-pink"></div>
                      <span className="text-xs">🪷</span>
                      <div className="w-8 h-px bg-lotus-pink"></div>
                    </div>
                    
                    {/* Close instruction */}
                    <div className="text-center mt-3">
                      <span className="text-xs text-muted-foreground italic bg-card-foreground/10 px-3 py-1 rounded-full">
                        Tap again to close
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Instructions Footer */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-lotus-pink/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Sparkles className="w-5 h-5 text-lotus-pink" />
              <span className="font-sanskrit text-lg text-peacock-teal">Divine Wisdom</span>
              <Sparkles className="w-5 h-5 text-lotus-pink" />
            </div>
            <p className="font-devotional text-peacock-teal italic text-base">
              Each petal holds a special blessing from Krishna's heart to yours. 
              Open them all to receive the complete divine message of love and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};