import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { CategoryPills } from '@/components/CategoryPills';
import { FeaturedCard } from '@/components/FeaturedCard';
import { PlaceCard } from '@/components/PlaceCard';
import { BottomNav } from '@/components/BottomNav';
import { PlaceDetail } from '@/components/PlaceDetail';
import { mockPlaces, featuredPlaces } from '@/data/mockPlaces';
import { Place, PlaceCategory } from '@/types/place';
import { useGeolocation } from '@/hooks/useGeolocation';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('Bhilai');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory | 'all'>('all');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  const { location, error: locationError } = useGeolocation();

  // Filter places based on city, category, and search
  const filteredPlaces = useMemo(() => {
    return mockPlaces.filter((place) => {
      const matchesCity = place.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCity && matchesCategory && matchesSearch;
    }).sort((a, b) => (a.distance || 0) - (b.distance || 0));
  }, [selectedCity, selectedCategory, searchQuery]);

  // Get featured places for the selected city
  const cityFeaturedPlaces = useMemo(() => {
    return featuredPlaces.filter(p => 
      p.city.toLowerCase() === selectedCity.toLowerCase() || 
      featuredPlaces.length <= 3
    );
  }, [selectedCity]);

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
      <Header selectedCity={selectedCity} onCityChange={setSelectedCity} />
      
      <main className="container py-4 space-y-6">
        {/* Search */}
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
        />

        {/* Categories */}
        <CategoryPills 
          selected={selectedCategory} 
          onSelect={setSelectedCategory} 
        />

        {/* Featured Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-foreground">
              Featured Today
            </h2>
            <button className="flex items-center gap-1 text-sm text-primary hover:underline">
              View All
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {cityFeaturedPlaces.length > 0 ? (
              cityFeaturedPlaces.map((place, index) => (
                <div 
                  key={place.id} 
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FeaturedCard 
                    place={place} 
                    onClick={() => setSelectedPlace(place)} 
                  />
                </div>
              ))
            ) : (
              featuredPlaces.slice(0, 3).map((place, index) => (
                <div 
                  key={place.id} 
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FeaturedCard 
                    place={place} 
                    onClick={() => setSelectedPlace(place)} 
                  />
                </div>
              ))
            )}
          </div>
        </section>

        {/* Near You Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-foreground">
              Near You
            </h2>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              Sort
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {locationError && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-sm text-amber-400">
              {locationError} - Showing default location.
            </div>
          )}

          <div className="space-y-3">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place, index) => (
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
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No places found in {selectedCity} matching your criteria.
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
