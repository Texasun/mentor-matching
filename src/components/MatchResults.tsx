import { motion } from 'motion/react';
import { MatchScore, UserProfile } from '../utils/pythonMatcher';
import { MentorCard } from './MentorCard';
import { Sparkles, RefreshCw, User } from 'lucide-react';

interface MatchResultsProps {
  userProfile: UserProfile;
  matches: MatchScore[];
  onReset: () => void;
}

export function MatchResults({ userProfile, matches, onReset }: MatchResultsProps) {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300">Python Algorithm Results</span>
          </div>
          
          <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Your Top Mentor Matches
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Based on your profile, we've identified the best mentors for you using our 
            advanced matching algorithm. Each match is scored based on skills, interests, 
            goals, and experience compatibility.
          </p>
        </motion.div>

        {/* User Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3>{userProfile.name}</h3>
              <p className="text-gray-400">{userProfile.email}</p>
            </div>
            <button
              onClick={onReset}
              className="ml-auto px-4 py-2 rounded-xl bg-purple-900/20 text-purple-300 hover:bg-purple-900/30 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Start Over
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 mb-2">Skills ({userProfile.skills.length})</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {skill}
                  </span>
                ))}
                {userProfile.skills.length > 3 && (
                  <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-400">
                    +{userProfile.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <p className="text-gray-500 mb-2">Interests ({userProfile.interests.length})</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.slice(0, 3).map(interest => (
                  <span key={interest} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {interest}
                  </span>
                ))}
                {userProfile.interests.length > 3 && (
                  <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-400">
                    +{userProfile.interests.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <p className="text-gray-500 mb-2">Goals ({userProfile.goals.length})</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.goals.slice(0, 3).map(goal => (
                  <span key={goal} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {goal}
                  </span>
                ))}
                {userProfile.goals.length > 3 && (
                  <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-400">
                    +{userProfile.goals.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Match Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-3xl mb-1 text-cyan-400">{matches.length}</p>
            <p className="text-gray-400">Matches Found</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-3xl mb-1 text-blue-400">{matches[0]?.score || 0}%</p>
            <p className="text-gray-400">Best Match</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-3xl mb-1 text-purple-400">
              {Math.round(matches.reduce((sum, m) => sum + m.score, 0) / matches.length) || 0}%
            </p>
            <p className="text-gray-400">Avg Score</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-3xl mb-1 text-pink-400">
              {matches.filter(m => m.score >= 80).length}
            </p>
            <p className="text-gray-400">Excellent Matches</p>
          </div>
        </motion.div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match, index) => (
            <MentorCard
              key={match.mentor.id}
              mentor={match.mentor}
              matchScore={match.score}
              breakdown={match.breakdown}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {matches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="mb-2">No matches found</h3>
            <p className="text-gray-400">Try adjusting your profile to find more mentors.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
