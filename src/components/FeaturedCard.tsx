import { Place, categoryLabels, categoryColors } from '@/types/place';
import { MapPin, ArrowRight } from 'lucide-react';

interface FeaturedCardProps {
  place: Place;
  onClick: () => void;
}

export function FeaturedCard({ place, onClick }: FeaturedCardProps) {
  return (
    <div 
      onClick={onClick}
      className="relative flex-shrink-0 w-[300px] h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${place.imageUrl})` }}
      />
      
      {/* Shimmer Effect */}
      <div className="shimmer-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${categoryColors[place.category]}`}>
          {categoryLabels[place.category]}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          {place.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{place.city}</span>
          {place.openingHours && (
            <>
              <span className="text-primary">•</span>
              <span>{place.openingHours}</span>
            </>
          )}
        </div>
        
        {/* Description & Arrow */}
        <div className="flex items-end justify-between gap-3">
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
            {place.description}
          </p>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shrink-0 group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
