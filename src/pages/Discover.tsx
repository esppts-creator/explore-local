import { useState, useMemo } from 'react';
import { mockPlaces } from '@/data/mockPlaces';
import { PlaceCard } from '@/components/PlaceCard';
import { PlaceDetail } from '@/components/PlaceDetail';
import { BottomNav } from '@/components/BottomNav';
import { CategoryPills } from '@/components/CategoryPills';
import { Place, PlaceCategory } from '@/types/place';
import { Map, List, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory | 'all'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filteredPlaces = useMemo(() => {
    return mockPlaces.filter((place) => 
      selectedCategory === 'all' || place.category === selectedCategory
    ).sort((a, b) => (a.distance || 0) - (b.distance || 0));
  }, [selectedCategory]);

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
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-display text-2xl text-foreground">Discover</h1>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'list' ? 'pillActive' : 'pill'}
                size="pill"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-1" />
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'pillActive' : 'pill'}
                size="pill"
                onClick={() => setViewMode('map')}
              >
                <Map className="h-4 w-4 mr-1" />
                Map
              </Button>
            </div>
          </div>
          <CategoryPills 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </div>
      </header>

      <main className="container py-4">
        {viewMode === 'list' ? (
          <div className="space-y-3">
            {filteredPlaces.map((place, index) => (
              <div 
                key={place.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PlaceCard 
                  place={place} 
                  onClick={() => setSelectedPlace(place)} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-[calc(100vh-220px)] bg-secondary rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center animate-pulse-glow">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Map View Coming Soon
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  We're integrating MapLibre GL to show you beautiful, interactive maps of nearby places.
                </p>
              </div>
            </div>
            
            {/* Decorative pins */}
            <div className="absolute top-[20%] left-[30%] w-6 h-6 text-primary animate-bounce" style={{ animationDelay: '0s' }}>
              <MapPin className="w-full h-full" />
            </div>
            <div className="absolute top-[40%] right-[25%] w-5 h-5 text-amber-400 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <MapPin className="w-full h-full" />
            </div>
            <div className="absolute bottom-[30%] left-[20%] w-4 h-4 text-emerald-400 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <MapPin className="w-full h-full" />
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Discover;
