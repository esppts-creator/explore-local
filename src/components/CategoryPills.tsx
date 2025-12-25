import { Button } from '@/components/ui/button';
import { PlaceCategory, categoryLabels } from '@/types/place';

interface CategoryPillsProps {
  selected: PlaceCategory | 'all';
  onSelect: (category: PlaceCategory | 'all') => void;
}

const categories: (PlaceCategory | 'all')[] = [
  'all',
  'cultural',
  'tourist',
  'cafe',
  'food_court',
  'hidden_gem',
];

export function CategoryPills({ selected, onSelect }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selected === category ? 'pillActive' : 'pill'}
          size="pill"
          onClick={() => onSelect(category)}
          className="shrink-0 capitalize transition-all duration-300"
        >
          {category === 'all' ? 'All' : categoryLabels[category as PlaceCategory]}
        </Button>
      ))}
    </div>
  );
}
