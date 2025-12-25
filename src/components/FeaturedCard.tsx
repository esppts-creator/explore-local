import { Place, categoryLabels, categoryColors } from '@/types/place';
import { MapPin, Star, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedCardProps {
  place: Place;
  onClick: () => void;
}

export function FeaturedCard({ place, onClick }: FeaturedCardProps) {
  return (
    <div 
      onClick={onClick}
      className="relative flex-shrink-0 w-[300px] h-[380px] rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${place.imageUrl})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[place.category]}`}>
          {categoryLabels[place.category]}
        </span>
        {place.rating && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {place.rating}
          </span>
        )}
      </div>

      {/* Bookmark Button */}
      <Button
        variant="icon"
        size="icon"
        className="absolute top-4 right-4 h-9 w-9"
        onClick={(e) => {
          e.stopPropagation();
          // TODO: Toggle bookmark
        }}
      >
        <Bookmark className="h-4 w-4" />
      </Button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-2xl text-foreground mb-2 line-clamp-2">
          {place.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{place.openingHours}</span>
          <span>•</span>
          <span>{place.city}</span>
        </div>
      </div>
    </div>
  );
}
