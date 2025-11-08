import { motion } from 'motion/react';
import { UserProfile } from '../utils/pythonMatcher';
import { Mail, Clock, Award, TrendingUp } from 'lucide-react';

interface MentorCardProps {
  mentor: UserProfile;
  matchScore?: number;
  breakdown?: {
    skillsMatch: number;
    interestsMatch: number;
    goalsMatch: number;
    experienceCompatibility: number;
  };
  index: number;
}

export function MentorCard({ mentor, matchScore, breakdown, index }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 glow-border"
    >
      {/* Header with Avatar and Score */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={mentor.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name}`}
              alt={mentor.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-purple-500/30"
            />
            {matchScore && matchScore >= 80 && (
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div>
            <h3 className="mb-1">{mentor.name}</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {mentor.experienceLevel}
              </span>
            </div>
          </div>
        </div>

        {matchScore !== undefined && (
          <div className="text-right">
            <div className="text-3xl mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {matchScore}%
            </div>
            <p className="text-gray-400">Match</p>
          </div>
        )}
      </div>

      {/* Bio */}
      {mentor.bio && (
        <p className="text-gray-400 mb-4 line-clamp-2">{mentor.bio}</p>
      )}

      {/* Skills */}
      <div className="mb-4">
        <p className="text-gray-500 mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {mentor.skills.slice(0, 5).map(skill => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              {skill}
            </span>
          ))}
          {mentor.skills.length > 5 && (
            <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-400">
              +{mentor.skills.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Match Breakdown */}
      {breakdown && (
        <div className="mb-4 p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
          <p className="text-gray-400 mb-3">Match Breakdown</p>
          <div className="space-y-2">
            {[
              { label: 'Skills', score: breakdown.skillsMatch, color: 'blue' },
              { label: 'Interests', score: breakdown.interestsMatch, color: 'cyan' },
              { label: 'Goals', score: breakdown.goalsMatch, color: 'purple' },
              { label: 'Experience', score: breakdown.experienceCompatibility, color: 'pink' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">{item.label}</span>
                  <span className={`text-${item.color}-400`}>{item.score}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-purple-900/30">
        <div className="flex items-center gap-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{mentor.availability || 'Flexible'}</span>
        </div>
        
        <button className="px-6 py-2 rounded-xl liquid-gradient text-white hover:scale-105 transition-transform flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Connect
        </button>
      </div>
    </motion.div>
  );
}
