export type PlaceCategory = 
  | 'cultural'
  | 'tourist'
  | 'cafe'
  | 'food_court'
  | 'hidden_gem';

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  city: string;
  address: string;
  openingHours?: string;
  cuisineType?: string;
  budgetRange?: string;
  distance?: number; // in km
  imageUrl: string;
  rating?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface UserLocation {
  lat: number;
  lng: number;
  city?: string;
}

export const categoryLabels: Record<PlaceCategory, string> = {
  cultural: 'Cultural',
  tourist: 'Tourist',
  cafe: 'Café',
  food_court: 'Food Court',
  hidden_gem: 'Hidden Gem',
};

export const categoryColors: Record<PlaceCategory, string> = {
  cultural: 'bg-amber-500/20 text-amber-400',
  tourist: 'bg-emerald-500/20 text-emerald-400',
  cafe: 'bg-primary/20 text-primary',
  food_court: 'bg-rose-500/20 text-rose-400',
  hidden_gem: 'bg-violet-500/20 text-violet-400',
};
