import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PetalsOfLove } from "@/components/PetalsOfLove";
import { KrishnaSurprise } from "@/components/KrishnaSurprise";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PhotoGallery />
      <PetalsOfLove />
      <KrishnaSurprise />
    </div>
  );
};

export default Index;