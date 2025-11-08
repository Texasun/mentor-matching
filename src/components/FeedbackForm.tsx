import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, Star } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Thank you for your feedback!', {
      description: 'We appreciate you taking the time to share your thoughts.',
    });

    // Reset form
    setRating(0);
    setFeedback('');
    setCategory('general');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 glow-border"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">We Value Your Input</span>
            </div>
            <h2 className="mb-4">Share Your Feedback</h2>
            <p className="text-gray-400">
              Help us improve the platform by sharing your experience and suggestions
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block mb-3 text-gray-300">Feedback Category</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'general', label: 'General' },
                  { value: 'matching', label: 'Matching' },
                  { value: 'features', label: 'Features' },
                  { value: 'bug', label: 'Bug Report' },
                ].map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategory(cat.value)}
                    className={`px-4 py-3 rounded-xl border transition-all ${
                      category === cat.value
                        ? 'border-purple-400 bg-purple-500/20 text-purple-300'
                        : 'border-purple-900/30 bg-purple-900/10 text-gray-400 hover:border-purple-500/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block mb-3 text-gray-300">
                How would you rate your experience?
              </label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-center text-gray-400 mt-2">
                  {rating === 5 && 'Excellent! 🎉'}
                  {rating === 4 && 'Great! 👍'}
                  {rating === 3 && 'Good 👌'}
                  {rating === 2 && 'Needs Improvement 🤔'}
                  {rating === 1 && 'Poor 😞'}
                </p>
              )}
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block mb-3 text-gray-300">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-6 py-4 rounded-xl glass-input text-white min-h-[150px] resize-none"
                placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!rating || !feedback || isSubmitting}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                rating && feedback && !isSubmitting
                  ? 'liquid-gradient text-white hover:scale-[1.02]'
                  : 'bg-gray-700/20 text-gray-600 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Feedback
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Info */}
          <p className="text-center text-gray-500 mt-6">
            Your feedback helps us create a better mentorship experience for everyone
          </p>
        </motion.div>
      </div>
    </section>
  );
}
