'use client';

import { Store, FileText, Timer, Radar, Trophy, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Micro-Skill Storefront',
    description: 'Create a Frame-native storefront for tiny services. Go from idea to first sale in under 60 minutes.',
    color: 'text-accent',
    bgColor: 'bg-accent',
  },
  {
    icon: FileText,
    title: 'Portfolio-to-Product',
    description: 'Upload portfolio items and AI extracts reusable templates. Turn sunk-cost work into passive income.',
    color: 'text-primary',
    bgColor: 'bg-primary',
  },
  {
    icon: Timer,
    title: '48-Hour Validator',
    description: 'Launch payment-gated waitlist. Get 10+ paying customers or kill bad ideas in 2 days, not 2 months.',
    color: 'text-warning',
    bgColor: 'bg-warning',
  },
  {
    icon: Radar,
    title: 'Niche Community Radar',
    description: 'AI-powered scanner finds 5-10 hyper-relevant communities where your target users are active.',
    color: 'text-success',
    bgColor: 'bg-success',
  },
  {
    icon: Trophy,
    title: 'Social Proof Engine',
    description: 'Every transaction triggers shareable Frame moments. Turn every sale into free marketing.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400',
  },
  {
    icon: BarChart3,
    title: 'Revenue Dashboard',
    description: 'Real-time MRR tracker with projections. See exactly how close you are to your next milestone.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Launch Fast</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Six powerful features designed to help solo builders validate and monetize quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className={`w-12 h-12 ${feature.bgColor} bg-opacity-20 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
