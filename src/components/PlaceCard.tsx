import { Place, categoryLabels, categoryColors } from '@/types/place';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

export function PlaceCard({ place, onClick }: PlaceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="relative w-[160px] flex-shrink-0 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-[200px] rounded-2xl overflow-hidden mb-3">
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-background/40 backdrop-blur-sm hover:bg-background/60"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isFavorite ? 'fill-primary text-primary' : 'text-foreground'
            }`} 
          />
        </Button>

        {/* Bottom Content */}
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="font-display font-semibold text-foreground truncate">
            {place.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            {place.category === 'cultural' || place.category === 'tourist' 
              ? place.city 
              : categoryLabels[place.category]
            }
          </p>
        </div>
      </div>
    </div>
  );
}

// Alternative horizontal card for list view
export function PlaceCardHorizontal({ place, onClick }: PlaceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="flex gap-4 p-3 bg-card rounded-2xl border border-border/30 cursor-pointer hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1 right-1 h-7 w-7 bg-background/40 backdrop-blur-sm hover:bg-background/60"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart 
            className={`h-3.5 w-3.5 transition-colors ${
              isFavorite ? 'fill-primary text-primary' : 'text-foreground'
            }`} 
          />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-display font-semibold text-foreground truncate mb-1">
          {place.name}
        </h4>
        <p className="text-sm text-muted-foreground mb-2">
          {place.city} {place.distance && `• ${place.distance.toFixed(1)} km`}
        </p>
        <span className={`self-start px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[place.category]}`}>
          {categoryLabels[place.category]}
        </span>
      </div>
    </div>
  );
}
