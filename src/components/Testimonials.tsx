import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    category: 'students',
    name: 'Sarah Martinez',
    role: 'Computer Science Student',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    text: "Finding my mentor through this platform changed everything. I went from struggling with algorithms to landing my dream internship at Google. The personalized matching really works!",
    rating: 5,
  },
  {
    category: 'students',
    name: 'Alex Chen',
    role: 'MBA Candidate',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    text: "The mentorship I received helped me pivot my career goals and discover my passion for product management. I'm now working at a top tech company!",
    rating: 5,
  },
  {
    category: 'entrepreneurs',
    name: 'Michael Johnson',
    role: 'Founder, TechStart',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    text: "My mentor helped me avoid costly mistakes and navigate the fundraising process. We raised our Series A in 6 months. This platform is a game-changer for founders.",
    rating: 5,
  },
  {
    category: 'entrepreneurs',
    name: 'Priya Sharma',
    role: 'CEO, GreenEco',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    text: "The strategic guidance from my mentor was invaluable. From scaling operations to building a team, they've been there every step of the way.",
    rating: 5,
  },
  {
    category: 'corporate',
    name: 'David Thompson',
    role: 'Senior Director, Finance',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    text: "My mentor's insights on leadership and executive presence helped me secure a VP position. The matching algorithm paired me with someone who truly understood my aspirations.",
    rating: 5,
  },
  {
    category: 'corporate',
    name: 'Jessica Lee',
    role: 'VP of Engineering',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    text: "Transitioning from IC to leadership was challenging, but my mentor guided me through every decision. I learned more in 6 months than I did in years.",
    rating: 5,
  },
  {
    category: 'career-changers',
    name: 'Robert Kim',
    role: 'Software Engineer (ex-Teacher)',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    text: "Switching from teaching to tech seemed impossible until I found my mentor. They helped me build my portfolio, prepare for interviews, and land my first dev job at 35.",
    rating: 5,
  },
  {
    category: 'career-changers',
    name: 'Emma Williams',
    role: 'UX Designer (ex-Lawyer)',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    text: "My mentor showed me how to leverage my legal background in UX. The career transition was smooth, and I'm now designing products that impact millions.",
    rating: 5,
  },
];

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'students', label: 'Students' },
    { id: 'entrepreneurs', label: 'Entrepreneurs' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'career-changers', label: 'Career Changers' },
  ];

  const filteredTestimonials = selectedCategory
    ? testimonials.filter((t) => t.category === selectedCategory)
    : testimonials;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Hear from our community members who transformed their careers with the right mentorship
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2 rounded-full transition-all ${
                selectedCategory === null
                  ? 'liquid-gradient text-white'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              All Stories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? 'liquid-gradient text-white'
                    : 'glass-card text-gray-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-purple-900/30">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
