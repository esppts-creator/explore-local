import { Button } from '@/components/ui/button';
import { PlaceCategory, categoryLabels } from '@/types/place';

interface CategoryPillsProps {
  selected: PlaceCategory | 'all';
  onSelect: (category: PlaceCategory | 'all') => void;
}

const categories: { key: PlaceCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'cultural', label: 'Temples' },
  { key: 'tourist', label: 'Attractions' },
  { key: 'cafe', label: 'Cafés' },
  { key: 'food_court', label: 'Food' },
  { key: 'hidden_gem', label: 'Hidden Gems' },
];

export function CategoryPills({ selected, onSelect }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {categories.map(({ key, label }) => (
        <Button
          key={key}
          variant={selected === key ? 'pillActive' : 'pill'}
          size="pill"
          onClick={() => onSelect(key)}
          className="shrink-0 transition-all duration-300"
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
