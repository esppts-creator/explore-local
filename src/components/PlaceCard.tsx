import { Place, categoryLabels, categoryColors } from '@/types/place';
import { MapPin, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

export function PlaceCard({ place, onClick }: PlaceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="flex gap-4 p-3 bg-card rounded-2xl border border-border/50 cursor-pointer hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-medium text-foreground truncate mb-1">
          {place.name}
        </h4>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{place.address}</span>
        </div>
        <span className={`self-start px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[place.category]}`}>
          {categoryLabels[place.category]}
        </span>
      </div>

      {/* Distance & Bookmark */}
      <div className="flex flex-col items-end justify-between shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Toggle bookmark
          }}
        >
          <Bookmark className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground">
          {place.distance?.toFixed(1)} km
        </span>
      </div>
    </div>
  );
}
