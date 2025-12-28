import { Home, Compass, Heart, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Explore', path: '/discover' },
  { icon: Heart, label: 'Saved', path: '/saved' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/30">
      <div className="container">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 min-w-[64px]",
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isActive && "fill-primary/20"
                )} />
                <span className="text-xs font-medium">{label}</span>
                {isActive && (
                  <div className="absolute -top-0.5 w-8 h-1 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Safe area padding for mobile */}
      <div className="h-safe-area-inset-bottom bg-background" />
    </nav>
  );
}
