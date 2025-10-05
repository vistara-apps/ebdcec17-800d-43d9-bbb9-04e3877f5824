'use client';

import { Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-5"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto">
              <Rocket className="w-8 h-8 text-bg" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Launch Your
              <br />
              <span className="text-gradient">First Product?</span>
            </h2>

            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Join 2,341 builders who are turning their skills into revenue on Base.
              Start with zero upfront costs—only pay 2% when you make sales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/dashboard" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/marketplace" className="btn-secondary">
                Browse Marketplace
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center space-x-8 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>2% platform fee only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
