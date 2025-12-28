import { Search, Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterClick?: () => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="relative flex items-center">
        <div className="absolute left-4 flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20">
          <Search className="h-4 w-4 text-primary" />
        </div>
        <Input
          type="text"
          placeholder="Search places, events..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-14 pr-12 h-14 bg-secondary/60 border-border/40 rounded-2xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 h-10 w-10 text-muted-foreground hover:text-foreground"
        >
          <Mic className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
