import { useState } from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../utils/pythonMatcher';
import { ArrowRight, User, Target, Star, Lightbulb } from 'lucide-react';

interface RegistrationFormProps {
  onComplete: (profile: UserProfile) => void;
}

const skillOptions = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Machine Learning',
  'Data Science', 'AI', 'Deep Learning', 'Cloud Architecture', 'AWS', 'DevOps',
  'Product Management', 'UX Design', 'UI Design', 'Mobile Development',
  'Backend Development', 'Frontend Development', 'Cybersecurity', 'SQL',
  'Database Design', 'API Development', 'Agile', 'Leadership', 'Docker', 'Kubernetes',
];

const interestOptions = [
  'Neural Networks', 'Computer Vision', 'Research', 'Teaching', 'Open Source',
  'Code Review', 'Frontend Development', 'UI/UX', 'Product Strategy', 'Team Building',
  'User Experience', 'Infrastructure', 'Automation', 'Scalability', 'Security',
  'Data Analysis', 'Business Intelligence', 'Statistics', 'Mobile UX', 'System Design',
  'Clean Code', 'Design Thinking', 'Accessibility', 'AI Ethics', 'Career Growth',
];

const goalOptions = [
  'Learn New Technologies', 'Career Advancement', 'Build AI Community',
  'Improve Coding Skills', 'Leadership Development', 'Start a Startup',
  'Master Machine Learning', 'Become a Better Developer', 'Product Excellence',
  'System Architecture', 'Code Quality', 'Portfolio Building', 'Interview Prep',
  'Networking', 'Side Projects', 'Open Source Contribution',
];

export function RegistrationForm({ onComplete }: RegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: [] as string[],
    interests: [] as string[],
    goals: [] as string[],
    experienceLevel: 'intermediate' as 'beginner' | 'intermediate' | 'advanced' | 'expert',
  });

  const toggleSelection = (field: 'skills' | 'interests' | 'goals', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = () => {
    const profile: UserProfile = {
      id: `u${Date.now()}`,
      name: formData.name,
      email: formData.email,
      role: 'mentee',
      skills: formData.skills,
      interests: formData.interests,
      goals: formData.goals,
      experienceLevel: formData.experienceLevel,
    };
    onComplete(profile);
  };

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email;
    if (step === 2) return formData.skills.length >= 3;
    if (step === 3) return formData.interests.length >= 3;
    if (step === 4) return formData.goals.length >= 2;
    return false;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl"
      >
        <div className="glass-card rounded-3xl p-8 md:p-12 glow-border">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map(num => (
                <div
                  key={num}
                  className={`w-1/4 h-2 rounded-full mx-1 transition-all duration-300 ${
                    num <= step ? 'liquid-gradient' : 'bg-purple-900/30'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-400 text-center">Step {step} of 4</p>
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-purple-400" />
                <h2>Let's get to know you</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-6 py-4 rounded-xl glass-input text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-gray-300">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-6 py-4 rounded-xl glass-input text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">Experience Level</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['beginner', 'intermediate', 'advanced', 'expert'].map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, experienceLevel: level as any }))}
                        className={`px-4 py-3 rounded-xl border transition-all ${
                          formData.experienceLevel === level
                            ? 'border-purple-400 bg-purple-500/20 text-purple-300'
                            : 'border-purple-900/30 bg-purple-900/10 text-gray-400 hover:border-purple-500/50'
                        }`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Skills */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-blue-400" />
                <h2>Select your skills</h2>
              </div>
              <p className="text-gray-400 mb-6">Choose at least 3 skills you want to develop or already have</p>
              
              <div className="flex flex-wrap gap-3 max-h-96 overflow-y-auto pr-2">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSelection('skills', skill)}
                    className={`px-5 py-2 rounded-full border transition-all ${
                      formData.skills.includes(skill)
                        ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                        : 'border-purple-900/30 bg-purple-900/10 text-gray-400 hover:border-blue-500/50'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-gray-500">
                Selected: {formData.skills.length} / {skillOptions.length}
              </p>
            </motion.div>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-400" />
                <h2>What interests you?</h2>
              </div>
              <p className="text-gray-400 mb-6">Choose at least 3 areas you're passionate about</p>
              
              <div className="flex flex-wrap gap-3 max-h-96 overflow-y-auto pr-2">
                {interestOptions.map(interest => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleSelection('interests', interest)}
                    className={`px-5 py-2 rounded-full border transition-all ${
                      formData.interests.includes(interest)
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                        : 'border-purple-900/30 bg-purple-900/10 text-gray-400 hover:border-cyan-500/50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-gray-500">
                Selected: {formData.interests.length} / {interestOptions.length}
              </p>
            </motion.div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <h2>What are your goals?</h2>
              </div>
              <p className="text-gray-400 mb-6">Choose at least 2 goals you want to achieve</p>
              
              <div className="flex flex-wrap gap-3 max-h-96 overflow-y-auto pr-2">
                {goalOptions.map(goal => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleSelection('goals', goal)}
                    className={`px-5 py-2 rounded-full border transition-all ${
                      formData.goals.includes(goal)
                        ? 'border-purple-400 bg-purple-500/20 text-purple-300'
                        : 'border-purple-900/30 bg-purple-900/10 text-gray-400 hover:border-purple-500/50'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-gray-500">
                Selected: {formData.goals.length} / {goalOptions.length}
              </p>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-purple-900/30">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl bg-purple-900/20 text-purple-300 hover:bg-purple-900/30 transition-all"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${
                  canProceed()
                    ? 'liquid-gradient text-white hover:scale-105'
                    : 'bg-gray-700/20 text-gray-600 cursor-not-allowed'
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`px-8 py-3 rounded-xl flex items-center gap-2 transition-all ${
                  canProceed()
                    ? 'liquid-gradient text-white hover:scale-105'
                    : 'bg-gray-700/20 text-gray-600 cursor-not-allowed'
                }`}
              >
                Find My Mentors
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
