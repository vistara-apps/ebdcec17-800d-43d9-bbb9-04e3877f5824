'use client';

import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Path',
    description: 'Select from Micro-Skills, Digital Products, or 48-Hour Validator based on what you want to launch.',
  },
  {
    number: '02',
    title: 'Create Your Offering',
    description: 'Fill in details, upload files, or describe your idea. AI helps optimize pricing and descriptions.',
  },
  {
    number: '03',
    title: 'Share to Community',
    description: 'Publish as a Frame and share to Farcaster. Our Community Radar finds your ideal audience.',
  },
  {
    number: '04',
    title: 'Get Paid Instantly',
    description: 'Accept payments in USDC or ETH. Track revenue in real-time and celebrate milestones.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-surface bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Four simple steps from idea to revenue. No coding required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 h-full">
                <div className="text-6xl font-bold text-accent opacity-20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-muted">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-accent opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
