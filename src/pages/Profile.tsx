import { User, Bookmark, Settings, LogIn, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-gradient-to-b from-secondary to-background pt-12 pb-8">
        <div className="container text-center">
          <div className="w-24 h-24 rounded-full bg-card border-2 border-border mx-auto mb-4 flex items-center justify-center">
            <User className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl text-foreground mb-1">
            Guest User
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <MapPin className="h-4 w-4" />
            Bhilai, Chhattisgarh
          </p>
        </div>
      </header>

      <main className="container py-6 space-y-6">
        {/* Sign In Card */}
        <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
          <div className="w-14 h-14 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center shadow-glow">
            <LogIn className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="font-display text-xl text-foreground mb-2">
            Sign in to save favorites
          </h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto">
            Create an account to bookmark places and get personalized recommendations.
          </p>
          <Button size="lg" className="w-full max-w-xs">
            Sign In with Google
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <ProfileLink 
            icon={Bookmark} 
            label="Saved Places" 
            count={0}
          />
          <ProfileLink 
            icon={Settings} 
            label="Settings" 
          />
        </div>

        {/* App Info */}
        <div className="text-center pt-8">
          <h3 className="font-display text-lg tracking-[0.2em] text-foreground mb-1">
            VIHAAR
          </h3>
          <p className="text-xs text-muted-foreground">
            The Pulse of Chhattisgarh
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Version 1.0.0 • Made with ♥ in India
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

function ProfileLink({ 
  icon: Icon, 
  label, 
  count 
}: { 
  icon: React.ElementType; 
  label: string; 
  count?: number;
}) {
  return (
    <button className="w-full flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <span className="flex-1 text-left font-medium text-foreground">
        {label}
      </span>
      {count !== undefined && (
        <span className="text-sm text-muted-foreground">{count}</span>
      )}
    </button>
  );
}

export default Profile;
