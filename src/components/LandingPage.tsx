import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Zap, Menu, X } from 'lucide-react';
import { MarketSegments } from './MarketSegments';
import { Testimonials } from './Testimonials';
import { Features } from './Features';
import { FeedbackForm } from './FeedbackForm';
import { AuthModal } from './AuthModal';

interface LandingPageProps {
  onAuth: (name: string, email: string) => void;
}

export function LandingPage({ onAuth }: LandingPageProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MentorMatch
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('segments')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                For You
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('feedback')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Feedback
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-6 py-2 rounded-full liquid-gradient text-white hover:scale-105 transition-transform"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-purple-500/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 space-y-2"
            >
              <button
                onClick={() => scrollToSection('segments')}
                className="block w-full text-left px-4 py-2 rounded-xl text-gray-300 hover:bg-purple-500/10 transition-colors"
              >
                For You
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 rounded-xl text-gray-300 hover:bg-purple-500/10 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 rounded-xl text-gray-300 hover:bg-purple-500/10 transition-colors"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('feedback')}
                className="block w-full text-left px-4 py-2 rounded-xl text-gray-300 hover:bg-purple-500/10 transition-colors"
              >
                Feedback
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="block w-full px-6 py-2 rounded-full liquid-gradient text-white"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">AI-Powered Mentor Matching</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Transform Your Career with the Perfect Mentor
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-12 max-w-2xl mx-auto text-gray-300"
            >
              Connect with industry experts tailored to your unique goals. Our advanced Python-powered 
              matching algorithm finds mentors who align perfectly with your skills, interests, and aspirations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-8 py-4 rounded-full liquid-gradient text-white overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Find Your Mentor
                  <Zap className="w-5 h-5" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 rounded-full glass-card text-white hover:bg-purple-500/20 transition-all"
              >
                Explore Features
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Users className="w-6 h-6 text-purple-400" />,
                  title: '20,000+ Mentors',
                  description: 'Vetted professionals across all industries',
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-blue-400" />,
                  title: '95% Match Rate',
                  description: 'Python algorithm ensures perfect compatibility',
                },
                {
                  icon: <Zap className="w-6 h-6 text-cyan-400" />,
                  title: '50,000+ Connections',
                  description: 'Successful mentorship relationships formed',
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <h3 className="mb-2">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Segments */}
      <div id="segments">
        <MarketSegments onSegmentSelect={() => setIsAuthModalOpen(true)} />
      </div>

      {/* Features */}
      <div id="features">
        <Features />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Feedback */}
      <div id="feedback">
        <FeedbackForm />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 MentorMatch. All rights reserved.</p>
          <p className="mt-2">Empowering careers through meaningful mentorship</p>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={onAuth}
      />
    </div>
  );
}
