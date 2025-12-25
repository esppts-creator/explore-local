import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterClick?: () => void;
}

export function SearchBar({ value, onChange, onFilterClick }: SearchBarProps) {
  return (
    <div className="relative flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search places, events..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-11 pr-4 h-12 bg-secondary/50 border-border/50 rounded-xl focus:ring-2 focus:ring-primary/30 transition-all"
        />
      </div>
      <Button 
        variant="icon" 
        size="icon" 
        onClick={onFilterClick}
        className="h-12 w-12 shrink-0"
      >
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
}
