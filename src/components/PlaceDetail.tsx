import { Place, categoryLabels, categoryColors } from '@/types/place';
import { ArrowLeft, Share2, Star, MapPin, Clock, Utensils, Wallet, Bookmark, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlaceDetailProps {
  place: Place;
  onBack: () => void;
}

export function PlaceDetail({ place, onBack }: PlaceDetailProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto animate-slide-up">
      {/* Hero Image */}
      <div className="relative h-[45vh] min-h-[320px]">
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        {/* Top Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <Button 
            variant="icon" 
            size="icon" 
            onClick={onBack}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="icon" size="icon" className="h-10 w-10">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="icon" size="icon" className="h-10 w-10">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Category & Rating Badge */}
        <div className="absolute bottom-24 left-5 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[place.category]}`}>
            {categoryLabels[place.category]}
          </span>
          {place.rating && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {place.rating}
            </span>
          )}
        </div>

        {/* Title & Distance */}
        <div className="absolute bottom-4 left-5 right-5">
          <h1 className="font-display text-3xl text-foreground mb-1">
            {place.name}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Open Now
            </span>
            <span className="flex items-center gap-1">
              <Navigation className="h-4 w-4 text-primary" />
              {place.distance?.toFixed(1)} km away
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 pb-32 space-y-6">
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {place.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1" size="lg">
            <Navigation className="h-4 w-4 mr-2" />
            Navigate Here
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard 
            icon={Clock} 
            label="Best Time" 
            value={place.openingHours || 'All day'} 
          />
          <InfoCard 
            icon={MapPin} 
            label="Distance" 
            value={`${place.distance?.toFixed(1)} km`} 
          />
          {place.cuisineType && (
            <InfoCard 
              icon={Utensils} 
              label="Cuisine" 
              value={place.cuisineType} 
            />
          )}
          {place.budgetRange && (
            <InfoCard 
              icon={Wallet} 
              label="Budget" 
              value={place.budgetRange} 
            />
          )}
        </div>

        {/* Address */}
        <div className="bg-card rounded-2xl p-4 border border-border/50">
          <h3 className="font-medium text-foreground mb-2">Address</h3>
          <p className="text-sm text-muted-foreground">{place.address}, {place.city}</p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="font-display text-lg text-foreground mb-3">
            Highlights & Amenities
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Photography Allowed', 'Shoe Rack Area', 'Family Friendly'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1.5 bg-secondary rounded-full text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
}) {
  return (
    <div className="bg-card rounded-xl p-4 border border-border/50">
      <div className="flex items-center gap-2 text-muted-foreground mb-1">
        <Icon className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}
