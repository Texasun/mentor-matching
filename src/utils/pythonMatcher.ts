// Simulated Python-style mentor matching algorithm
// This replicates what would be done in a Python backend

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'mentor' | 'mentee';
  skills: string[];
  interests: string[];
  goals: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  bio?: string;
  availability?: string;
  avatar?: string;
}

export interface MatchScore {
  mentor: UserProfile;
  score: number;
  breakdown: {
    skillsMatch: number;
    interestsMatch: number;
    goalsMatch: number;
    experienceCompatibility: number;
  };
}

/**
 * Python-style matching algorithm implementation
 * Calculates match scores based on multiple weighted factors
 */
export function calculateMatchScore(
  mentee: UserProfile,
  mentor: UserProfile
): MatchScore {
  // Skills overlap calculation (40% weight)
  const skillsMatch = calculateJaccardSimilarity(
    mentee.skills,
    mentor.skills
  ) * 0.4;

  // Interests alignment (30% weight)
  const interestsMatch = calculateJaccardSimilarity(
    mentee.interests,
    mentor.interests
  ) * 0.3;

  // Goals matching (20% weight)
  const goalsMatch = calculateJaccardSimilarity(
    mentee.goals,
    mentor.goals
  ) * 0.2;

  // Experience level compatibility (10% weight)
  const experienceCompatibility = calculateExperienceCompatibility(
    mentee.experienceLevel,
    mentor.experienceLevel
  ) * 0.1;

  const totalScore = skillsMatch + interestsMatch + goalsMatch + experienceCompatibility;

  return {
    mentor,
    score: Math.round(totalScore * 100), // Convert to percentage
    breakdown: {
      skillsMatch: Math.round(skillsMatch * 100 / 0.4),
      interestsMatch: Math.round(interestsMatch * 100 / 0.3),
      goalsMatch: Math.round(goalsMatch * 100 / 0.2),
      experienceCompatibility: Math.round(experienceCompatibility * 100 / 0.1),
    },
  };
}

/**
 * Jaccard similarity coefficient - classic Python algorithm for set similarity
 * Formula: |A ∩ B| / |A ∪ B|
 */
function calculateJaccardSimilarity(setA: string[], setB: string[]): number {
  if (setA.length === 0 && setB.length === 0) return 0;
  
  const normalizedA = setA.map(s => s.toLowerCase());
  const normalizedB = setB.map(s => s.toLowerCase());
  
  const intersection = normalizedA.filter(item => normalizedB.includes(item));
  const union = [...new Set([...normalizedA, ...normalizedB])];
  
  return union.length > 0 ? intersection.length / union.length : 0;
}

/**
 * Experience compatibility scoring
 * Mentors should ideally be 1-2 levels above mentees
 */
function calculateExperienceCompatibility(
  menteeLevel: string,
  mentorLevel: string
): number {
  const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
  const menteeIndex = levels.indexOf(menteeLevel);
  const mentorIndex = levels.indexOf(mentorLevel);
  
  const difference = mentorIndex - menteeIndex;
  
  // Optimal: mentor is 1-2 levels above
  if (difference >= 1 && difference <= 2) return 1.0;
  // Good: mentor is 3 levels above or same level (peer mentoring)
  if (difference === 0 || difference === 3) return 0.7;
  // Acceptable: mentor is slightly less experienced but still valuable
  if (difference === -1) return 0.5;
  // Not ideal: large gap or mentor less experienced
  return 0.3;
}

/**
 * Main matching function - returns top N matches sorted by score
 * This is the Python endpoint equivalent
 */
export function findTopMatches(
  mentee: UserProfile,
  allMentors: UserProfile[],
  topN: number = 5
): MatchScore[] {
  // Calculate scores for all mentors
  const scores = allMentors
    .filter(mentor => mentor.role === 'mentor')
    .map(mentor => calculateMatchScore(mentee, mentor));
  
  // Sort by score descending (Python: sorted(scores, key=lambda x: x['score'], reverse=True))
  scores.sort((a, b) => b.score - a.score);
  
  // Return top N matches (Python: scores[:topN])
  return scores.slice(0, topN);
}
