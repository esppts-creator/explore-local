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
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container py-4">
        <div className="flex flex-col items-center gap-3">
          {/* Logo */}
          <div className="text-center">
            <h1 className="font-display text-2xl tracking-[0.3em] text-foreground">
              VIHAAR
            </h1>
            <p className="text-xs text-muted-foreground tracking-wide">
              The Pulse of Chhattisgarh
            </p>
          </div>

          {/* City Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="gap-2 bg-secondary/50 border-border/50 hover:bg-secondary"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">{selectedCity}, Chhattisgarh</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="bg-card border-border"
            >
              {cities.map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => onCityChange(city)}
                  className={`cursor-pointer ${
                    city === selectedCity ? 'text-primary' : ''
                  }`}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
