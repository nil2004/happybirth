import { useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
// Radha Krishna image path - now in public folder
const radhaKrishnaImage = "/assets/radha-krishna-moonlit.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audio] = useState(new Audio("/audio/krishna-birthday-message.mp3"));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.6;
    
    // Handle audio loading errors
    const handleError = () => {
      setAudioError(true);
      console.log("Audio file not found. Please add krishna-birthday-message.mp3 to the public/audio folder");
    };
    
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (audioError) {
      alert("Please add the audio file 'krishna-birthday-message.mp3' to the public/audio folder to enable music playback.");
      return;
    }
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setAudioError(false);
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioError) return;
    
    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${radhaKrishnaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-moonlit opacity-60"></div>
      </div>

      {/* Music Player - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-divine border border-divine-gold/30">
          <div className="flex items-center space-x-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-glow hover:shadow-divine group ${
                audioError 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                  : 'bg-divine-gold text-background hover:bg-divine-gold-light'
              }`}
              disabled={audioError}
            >
              {audioError ? (
                <Music className="w-5 h-5" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-1" />
              )}
            </button>
            
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                audioError 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                  : 'bg-card-foreground/20 hover:bg-card-foreground/30'
              }`}
              disabled={audioError}
            >
              {isMuted ? (
                <VolumeX className="text-divine-gold w-4 h-4" />
              ) : (
                <Volume2 className="text-divine-gold w-4 h-4" />
              )}
            </button>
            
            {/* Music Info */}
            <div className="text-left">
              <p className="font-sanskrit text-sm text-divine-gold font-semibold">
                Jiya Ka Janamdin
              </p>
              <p className="font-devotional text-xs text-moonlight">
                Krishna's Birthday Message
              </p>
              {audioError && (
                <p className="font-devotional text-xs text-destructive mt-1">
                  Audio file needed
                </p>
              )}
            </div>
          </div>
          
          {/* Playing Indicator */}
          {isPlaying && !audioError && (
            <div className="mt-3 flex items-center space-x-1">
              <div className="w-1 h-3 bg-divine-gold rounded-full animate-pulse"></div>
              <div className="w-1 h-4 bg-divine-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-2 bg-divine-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-1 h-5 bg-divine-gold rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-1 h-3 bg-divine-gold rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="w-1 h-4 bg-divine-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Lotus Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-lotus-pink rounded-full opacity-70 animate-lotus-dance"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 text-center px-6 transition-all duration-2000 ${
          isVisible ? 'animate-fade-in-slow' : 'opacity-0'
        }`}
      >
        {/* Sanskrit Calligraphy Name */}
        <h1 className="font-sanskrit text-6xl md:text-8xl lg:text-9xl font-bold text-divine-gold mb-8 animate-glow">
          जिया
        </h1>
        
        <div className="font-sanskrit text-2xl md:text-3xl text-divine-gold-light mb-4 tracking-wider">
          Jiya
        </div>

        {/* Blessing Message */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <p className="font-devotional text-lg md:text-xl lg:text-2xl text-moonlight leading-relaxed italic mb-8">
            "On this blessed day, may the love of Radha and Krishna surround you, Jiya."
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-divine-gold">
            <div className="w-12 h-px bg-divine-gold"></div>
            <span className="text-sm tracking-widest">🕉</span>
            <div className="w-12 h-px bg-divine-gold"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-divine-gold animate-float">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-divine-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-divine-gold rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="font-devotional text-sm">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};