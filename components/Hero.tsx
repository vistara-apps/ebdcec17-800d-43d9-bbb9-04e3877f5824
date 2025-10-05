'use client';

import { Rocket, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-accent border-opacity-20">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Launch in 48 Hours</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Ideas into
            <br />
            <span className="text-gradient">Revenue in 48 Hours</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Validate micro-skill services and digital products through social proof, 
            instant payments, and community discovery on Base.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="btn-primary">
              Start Building Now
            </Link>
            <Link href="/marketplace" className="btn-secondary">
              Explore Marketplace
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">$127K+</h3>
              <p className="text-text-muted">Total Revenue Generated</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2,341</h3>
              <p className="text-text-muted">Active Builders</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-2">89%</h3>
              <p className="text-text-muted">Validation Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
