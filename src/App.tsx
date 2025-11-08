import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './components/LandingPage';
import { RegistrationForm } from './components/RegistrationForm';
import { MatchResults } from './components/MatchResults';
import { UserProfile, findTopMatches } from './utils/pythonMatcher';
import { mockMentors } from './data/mockData';

type AppState = 'landing' | 'registration' | 'results';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [matches, setMatches] = useState<ReturnType<typeof findTopMatches>>([]);

  const handleAuth = (name: string, email: string) => {
    setUserName(name);
    setAppState('registration');
  };

  const handleRegistrationComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    
    // Run the Python-style matching algorithm
    const topMatches = findTopMatches(profile, mockMentors, 10);
    setMatches(topMatches);
    
    setAppState('results');
  };

  const handleReset = () => {
    setAppState('landing');
    setUserProfile(null);
    setUserName('');
    setMatches([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      {appState === 'landing' && <LandingPage onAuth={handleAuth} />}
      {appState === 'registration' && (
        <RegistrationForm onComplete={handleRegistrationComplete} />
      )}
      {appState === 'results' && userProfile && (
        <MatchResults
          userProfile={userProfile}
          matches={matches}
          onReset={handleReset}
        />
      )}

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
