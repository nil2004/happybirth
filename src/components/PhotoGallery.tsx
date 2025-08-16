import { useState } from "react";
// Peacock frame image path - now in public folder
const peacockFrame = "/assets/peacock-feather-frame.png";

// Sample photos - using local photos from the photos folder
const samplePhotos = [
  {
    id: 1,
    src: "/photos/IMG-20240915-WA0046.jpg",
    note: "A beautiful soul with a radiant smile, blessed by Krishna's divine grace.",
    verse: "जब तक है जीवन, जब तक है दम, गदगदाकर हो, कृष्ण नाम। (As long as there is life, as long as there is breath, sing Krishna's name with joy.)"
  },
  {
    id: 2,
    src: "/photos/IMG-20240921-WA0000.jpg",
    note: "Like a lotus blooming in Krishna's love, pure and divine.",
    verse: "राधे राधे बोल मन मेरे, प्रेम दीवाने हो जा। (Chant Radhe Radhe, O my mind, become intoxicated with love.)"
  },
  {
    id: 3,
    src: "/photos/WhatsApp Image 2025-08-16 at 1.33.56 PM.jpeg",
    note: "Blessed with Krishna's divine protection on this special day.",
    verse: "कान्हा की मुरली की तान सुनकर, मन मेरा खुशी से झूमे। (Hearing the melody of Krishna's flute, my heart dances with joy.)"
  },
  {
    id: 4,
    src: "/photos/WhatsApp Image 2025-08-16 at 1.33.57 PM.jpeg",
    note: "A heart filled with devotion, eyes sparkling with Krishna's blessings.",
    verse: "श्री कृष्ण गोविंद हरे मुरारे, हे नाथ नारायण वासुदेवे। (Sri Krishna Govinda Hare Murare, O Lord Narayana Vasudeva.)"
  },
  {
    id: 5,
    src: "/photos/WhatsApp Image 2024-09-22 at 10.32.27 PM.jpeg",
    note: "May Krishna's flute always play melodies of joy in your life.",
    verse: "हरि ॐ तत्सत् श्री कृष्ण प्रणमामि। (Hari Om Tat Sat, I bow to Sri Krishna.)"
  },
  {
    id: 6,
    src: "/photos/WhatsApp Image 2024-09-22 at 10.32.28 PM.jpeg",
    note: "Surrounded by love and divine blessings on your birthday.",
    verse: "राधे कृष्ण राधे कृष्ण, कृष्ण कृष्ण राधे राधे। (Radhe Krishna Radhe Krishna, Krishna Krishna Radhe Radhe.)"
  }
];

export const PhotoGallery = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-sanskrit text-3xl md:text-4xl lg:text-5xl text-divine-gold mb-4">
            Divine Memories
          </h2>
          <p className="font-devotional text-base md:text-lg text-moonlight italic px-4">
            Each moment blessed by Krishna's grace
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4 text-lotus-pink">
            <div className="w-16 h-px bg-lotus-pink"></div>
            <span className="text-2xl">🪷</span>
            <div className="w-16 h-px bg-lotus-pink"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {samplePhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
              onTouchStart={() => setHoveredPhoto(photo.id)}
              onTouchEnd={() => setHoveredPhoto(null)}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-soft hover:shadow-divine transition-all duration-500 group-hover:scale-105 active:scale-105">
                {/* Peacock Feather Frame Overlay */}
                <div 
                  className="absolute inset-0 z-10 opacity-80 mix-blend-multiply"
                  style={{ backgroundImage: `url(${peacockFrame})`, backgroundSize: 'cover' }}
                ></div>
                
                {/* Photo */}
                <img
                  src={photo.src}
                  alt={`Beautiful moment ${photo.id}`}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-watercolor opacity-0 transition-opacity duration-500 ${
                  hoveredPhoto === photo.id ? 'opacity-90' : ''
                } flex items-center justify-center p-4 md:p-6 z-20`}>
                  <div className="text-center text-background">
                    <p className="font-devotional text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                      {photo.note}
                    </p>
                    <div className="border-t border-background/30 pt-3 md:pt-4">
                      <p className="font-sanskrit text-xs md:text-sm opacity-90 italic leading-tight">
                        {photo.verse}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 text-2xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                🦚
              </div>
              <div className="absolute -bottom-2 -left-2 text-xl animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                🪷
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};