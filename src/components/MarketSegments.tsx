import { motion } from 'motion/react';
import { GraduationCap, Rocket, Briefcase, TrendingUp } from 'lucide-react';

const segments = [
  {
    id: 'students',
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Students',
    description: 'Get guidance from industry professionals to accelerate your learning journey',
    image: 'https://images.unsplash.com/photo-1758874573116-2bc02232eef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmV8ZW58MXx8fHwxNzYyMjM2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
    stats: ['5,000+ Students', '95% Success Rate', 'Career Guidance'],
  },
  {
    id: 'entrepreneurs',
    icon: <Rocket className="w-8 h-8" />,
    title: 'Entrepreneurs',
    description: 'Connect with successful founders and business leaders to scale your venture',
    image: 'https://images.unsplash.com/photo-1661286178389-e067299f907e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBzdGFydHVwJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIyNjE5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
    stats: ['2,000+ Startups', '$50M+ Raised', 'Business Strategy'],
  },
  {
    id: 'corporate',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Corporate Professionals',
    description: 'Advance your career with mentorship from senior executives and industry leaders',
    image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYyMTg3Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-500 to-red-500',
    stats: ['10,000+ Professionals', 'C-Suite Mentors', 'Leadership Skills'],
  },
  {
    id: 'career-changers',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Career Changers',
    description: 'Navigate your career transition with guidance from those who made the leap',
    image: 'https://images.unsplash.com/photo-1758691738691-557c09410bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjaGFuZ2UlMjBvcHBvcnR1bml0eXxlbnwxfHx8fDE3NjIyNjE5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
    stats: ['3,000+ Transitions', '85% Success Rate', 'New Industries'],
  },
];

interface MarketSegmentsProps {
  onSegmentSelect?: (segment: string) => void;
}

export function MarketSegments({ onSegmentSelect }: MarketSegmentsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mentorship for Everyone
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're a student, entrepreneur, professional, or career changer,
            we have the perfect mentor waiting for you
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSegmentSelect?.(segment.id)}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer glow-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-20`} />
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${segment.color} text-white`}>
                  {segment.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2">{segment.title}</h3>
                <p className="text-gray-400 mb-4">{segment.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {segment.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
