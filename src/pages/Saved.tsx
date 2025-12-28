import { useState } from 'react';
import { BottomNav } from '@/components/BottomNav';
import { PlaceCardHorizontal } from '@/components/PlaceCard';
import { PlaceDetail } from '@/components/PlaceDetail';
import { mockPlaces } from '@/data/mockPlaces';
import { Place } from '@/types/place';
import { Heart } from 'lucide-react';

const Saved = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  // For now, show first 3 places as "saved" - will be connected to real favorites later
  const savedPlaces = mockPlaces.slice(0, 3);

  if (selectedPlace) {
    return (
      <PlaceDetail 
        place={selectedPlace} 
        onBack={() => setSelectedPlace(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/30">
        <div className="container py-4">
          <h1 className="font-display text-2xl font-semibold text-foreground">
            Saved Places
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your favorite spots in Chhattisgarh
          </p>
        </div>
      </header>

      <main className="container py-6">
        {savedPlaces.length > 0 ? (
          <div className="space-y-3">
            {savedPlaces.map((place, index) => (
              <div 
                key={place.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PlaceCardHorizontal 
                  place={place} 
                  onClick={() => setSelectedPlace(place)} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No saved places yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Tap the heart icon on any place to save it for later.
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Saved;
