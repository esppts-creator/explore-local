import { MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const cities = ['Bhilai', 'Durg', 'Raipur'];

export function Header({ selectedCity, onCityChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/30">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20">
              <span className="text-xl">🛕</span>
            </div>
            <div>
              <h1 className="font-cursive text-2xl text-primary">
                Vihaar
              </h1>
            </div>
          </div>

          {/* City Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{selectedCity} CG</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-card border-border min-w-[140px]"
            >
              {cities.map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => onCityChange(city)}
                  className={`cursor-pointer ${
                    city === selectedCity ? 'text-primary bg-primary/10' : ''
                  }`}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Tagline */}
        <p className="mt-1 text-sm text-muted-foreground">
          The Pulse of Chhattisgarh
        </p>
      </div>
    </header>
  );
}
