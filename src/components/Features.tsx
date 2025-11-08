import { motion } from 'motion/react';
import { Sparkles, Video, MessageCircle, BarChart3, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI-Powered Matching',
    description: 'Our Python-based algorithm analyzes your profile to find the perfect mentor match',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMjUwODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Virtual Mentorship Sessions',
    description: 'Connect with mentors worldwide through integrated video calls and screen sharing',
    image: 'https://images.unsplash.com/photo-1633114129669-78b1ff09902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBtZWV0aW5nfGVufDF8fHx8MTc2MjE5Nzk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Real-Time Messaging',
    description: 'Stay connected with your mentor through instant messaging and file sharing',
    image: 'https://images.unsplash.com/photo-1659353670522-674c7cc8a969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtZXNzYWdpbmd8ZW58MXx8fHwxNzYyMjYxOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Progress Tracking',
    description: 'Monitor your growth with detailed analytics and goal tracking dashboards',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMjUwODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Smart Scheduling',
    description: 'Seamlessly schedule sessions with built-in calendar integration and reminders',
    image: 'https://images.unsplash.com/photo-1633114129669-78b1ff09902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBtZWV0aW5nfGVufDF8fHx8MTc2MjE5Nzk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Verified Mentors',
    description: 'All mentors are thoroughly vetted and verified for quality and authenticity',
    image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYyMTg3Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
  },
];

export function Features() {
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300">Platform Features</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need for a successful mentorship experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 glow-border"
            >
              {/* Feature Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-40`} />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to experience these features yourself?
          </p>
          <button className="px-8 py-4 rounded-full liquid-gradient text-white hover:scale-105 transition-transform">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
