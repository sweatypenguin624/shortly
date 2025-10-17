'use client';

// home page with marketing content

import { useState, useEffect } from 'react';
import { Zap, Shield, BarChart3, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket, Users, TrendingUp, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Feature carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    { number: '10M+', label: 'Links Shortened' },
    { number: '500K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '150+', label: 'Countries' },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate short links in milliseconds with our globally distributed edge network.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track clicks, geographic data, device types, and referral sources in real-time.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption, password protection, and expiration controls.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Smart AI Features",
      description: "AI-powered link suggestions and automated campaign optimization.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "Shortly increased our campaign CTR by 47%. The analytics helped us understand our audience better than ever.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Growth Lead",
      company: "StartupXYZ",
      content: "The API integration was seamless. We shortened 50K+ links in our first month with zero downtime.",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Social Media Manager",
      company: "Creative Agency Co",
      content: "Our team loves the custom domains and branded links. It's made our social media campaigns much more professional.",
      avatar: "EW"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small projects",
      popular: false,
      features: [
        "1,000 links/month",
        "Basic analytics",
        "Custom domains",
        "30-day history",
        "Standard support"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$19",
      period: "per month",
      description: "Everything you need for growing businesses",
      popular: true,
      features: [
        "10,000 links/month",
        "Advanced analytics",
        "Custom branding",
        "1-year history",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For large organizations with custom needs",
      popular: false,
      features: [
        "Unlimited links",
        "Enterprise analytics",
        "White-label solutions",
        "Unlimited history",
        "24/7 dedicated support",
        "Advanced API",
        "SAML/SSO integration",
        "Custom SLAs"
      ],
      cta: "Contact Sales"
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-lg">Loading...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse dark:bg-purple-900 dark:opacity-10"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse dark:yellow-purple-900 dark:opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse dark:blue-purple-900 dark:opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 500,000+ businesses worldwide
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Short Links,
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Big Impact
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform long URLs into powerful, trackable short links that drive engagement,
              deliver insights, and boost your marketing ROI. Enterprise-grade features,
              startup-friendly pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <span className="flex items-center">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Shortly?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create, manage, and analyze your short links in one powerful platform.
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature Content */}
              <div>
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${currentFeature === index
                        ? 'bg-white dark:bg-gray-800 shadow-xl scale-105 border-2 border-blue-500/20'
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg'
                        }`}
                      onMouseEnter={() => setCurrentFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${feature.bgColor}`}>
                          <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Visual */}
              <div className="relative">
                <div className="relative h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm border border-white/20">
                      <div className="text-white text-center mb-4">
                        <Globe className="w-12 h-12 mx-auto mb-2 opacity-80" />
                        <h3 className="text-lg font-semibold">Shortly Dashboard</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-lg p-3 text-white text-sm">
                          shortly.xyz/spring-sale
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Clicks: 2,847</span>
                          <span>+12% today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied customers who trust Shortly for their link management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Start free, upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${plan.popular
                  ? 'bg-gradient-to-b from-blue-600 to-purple-600 text-white shadow-2xl border-2 border-blue-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span className={plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className={plan.popular ? 'text-blue-100 mb-6' : 'text-gray-600 dark:text-gray-400 mb-6'}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle
                        className={`w-5 h-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'
                          }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Links?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Shortly to optimize their link management and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                Start Free 14-Day Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}