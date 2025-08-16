import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import krishnaButterPot from "@/assets/krishna-butter-pot.jpg";

export const KrishnaSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio("/audio/voice.mp3"));

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    audio.loop = false;
    audio.volume = 0.7;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-moonlit relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-30 animate-float"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? '🧈' : i % 3 === 1 ? '🐄' : '🦚'}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in mb-12">
          <h2 className="font-sanskrit text-3xl md:text-4xl lg:text-5xl text-divine-gold mb-6">
            Krishna's Special Gift
          </h2>
          <p className="font-devotional text-base md:text-lg text-moonlight italic px-4">
            Tap on the butter pot to receive Krishna's divine surprise
          </p>
        </div>

        {!isRevealed ? (
          <div className="animate-fade-in">
            {/* Krishna with Butter Pot */}
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4">
              <img
                src={krishnaButterPot}
                alt="Krishna with butter pot"
                className="w-full rounded-xl md:rounded-2xl shadow-divine"
              />
              
              {/* Clickable Butter Pot */}
              <button
                onClick={handleReveal}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 group touch-manipulation"
              >
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-divine-gold rounded-full shadow-glow hover:shadow-divine transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-active:scale-110 animate-float">
                    <span className="text-2xl sm:text-3xl">🧈</span>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-divine-gold rounded-full opacity-30 animate-ping"></div>
                  
                  {/* Instruction */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="font-devotional text-xs sm:text-sm text-divine-gold-light">
                      Tap the butter pot
                    </span>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-8 md:mt-12 px-4">
              <p className="font-devotional text-base md:text-lg text-lotus-white leading-relaxed">
                Just as Krishna lovingly shares his butter, <br className="hidden sm:block" />
                he has a special message waiting for you, dear Jiya.
              </p>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-slow">
            {/* Revealed Content */}
            <div className="bg-card rounded-2xl md:rounded-3xl shadow-divine p-6 md:p-8 lg:p-12 border-2 border-divine-gold mx-4">
              <div className="mb-6 md:mb-8">
                {/* Audio Player */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="bg-gradient-divine rounded-full p-4 shadow-glow">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 bg-background rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-divine"
                    >
                      {isPlaying ? (
                        <Pause className="text-divine-gold" size={24} />
                      ) : (
                        <Play className="text-divine-gold ml-1" size={24} />
                      )}
                    </button>
                  </div>
                  
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 bg-card-foreground/20 rounded-full flex items-center justify-center hover:bg-card-foreground/30 transition-all duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="text-divine-gold w-5 h-5" />
                    ) : (
                      <Volume2 className="text-divine-gold w-5 h-5" />
                    )}
                  </button>
                  
                  <div className="text-left">
                    <p className="font-sanskrit text-sm text-divine-gold font-semibold">
                      Krishna's Voice Message
                    </p>
                    <p className="font-devotional text-xs text-moonlight">
                      Listen to divine blessings
                    </p>
                  </div>
                </div>
                
                <h3 className="font-sanskrit text-2xl md:text-3xl text-divine-gold mb-4 md:mb-6 animate-glow">
                  Krishna's Birthday Message for Jiya
                </h3>
              </div>

              {/* Message Content */}
              <div className="space-y-4 md:space-y-6 text-left max-w-2xl mx-auto">
                <p className="font-devotional text-base md:text-lg text-foreground leading-relaxed">
                  🪷 <em>Dearest Jiya,</em>
                </p>
                
                <p className="font-devotional text-sm md:text-base text-foreground leading-relaxed">
                  On this sacred day of your birth, I, Krishna, send you my divine blessings from the eternal lands of Vrindavan. 
                  Just as the Yamuna river flows with endless love, may your life flow with joy, peace, and spiritual abundance.
                </p>
                
                <p className="font-devotional text-sm md:text-base text-foreground leading-relaxed">
                  You are my beloved devotee, precious as the butter I once stole as a child. Your pure heart resonates 
                  with the same divine love that Radha and I share. May this birthday mark the beginning of a new chapter 
                  filled with divine grace and cosmic blessings.
                </p>
                
                <p className="font-devotional text-sm md:text-base text-foreground leading-relaxed">
                  Remember, dear one, that you are never alone. My flute plays melodies of protection around you, 
                  and my peacock feather crowns you with eternal love. Dance through life with the same joy as my gopis, 
                  and know that every step you take is blessed by my divine presence.
                </p>
                
                <div className="text-center py-4 md:py-6">
                  <div className="flex items-center justify-center space-x-3 md:space-x-4 text-divine-gold">
                    <span className="text-2xl">❤️</span>
                    <span className="font-sanskrit text-base md:text-lg">Happy Birthday, Beloved Jiya</span>
                    <span className="text-2xl">❤️</span>
                  </div>
                </div>
                
                <p className="font-devotional text-sm md:text-base text-foreground leading-relaxed text-center italic">
                  <em>With eternal love and divine blessings,</em><br />
                  <strong className="text-divine-gold font-sanskrit text-base md:text-lg">श्री कृष्ण</strong>
                </p>
              </div>

              {/* Decorative Footer */}
              <div className="mt-8 flex items-center justify-center space-x-6 text-2xl">
                <span className="animate-float">🦚</span>
                <span className="animate-float" style={{ animationDelay: '1s' }}>🪷</span>
                <span className="animate-float" style={{ animationDelay: '2s' }}>🧈</span>
                <span className="animate-float" style={{ animationDelay: '3s' }}>🪈</span>
              </div>
            </div>

            {/* Final Blessing */}
            <div className="mt-8 md:mt-12 animate-fade-in px-4" style={{ animationDelay: '1s' }}>
              <p className="font-sanskrit text-lg md:text-2xl text-divine-gold animate-glow text-center">
                "Happy Birthday, Jiya — you are cherished beyond measure."
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};