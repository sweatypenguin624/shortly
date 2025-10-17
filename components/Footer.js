'use client';

import { Link2, Twitter, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * @typedef {Object} FooterProps
 * @property {string} [className]
 * @property {boolean} [showBackToTop]
 */

/**
 * @param {FooterProps} props
 */
export default function Footer({ className = '', showBackToTop = true }) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSections = [
        {
            title: 'Product',
            links: [
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'API Docs', href: '#' },
                { name: 'Integrations', href: '#' },
                { name: 'Changelog', href: '#' },
            ],
        },
        {
            title: 'Solutions',
            links: [
                { name: 'Marketing', href: '#' },
                { name: 'Social Media', href: '#' },
                { name: 'E-commerce', href: '#' },
                { name: 'Enterprise', href: '#' },
                { name: 'Startups', href: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', href: '#' },
                { name: 'Help Center', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Community', href: '#' },
                { name: 'Status', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Contact', href: '#' },
                { name: 'Partners', href: '#' },
                { name: 'Press Kit', href: '#' },
            ],
        },
    ];

    const socialLinks = [
        {
            icon: <Twitter className="w-5 h-5" />,
            href: '#',
            name: 'Twitter',
            color: 'hover:bg-blue-400'
        },
        {
            icon: <Github className="w-5 h-5" />,
            href: '#',
            name: 'GitHub',
            color: 'hover:bg-gray-700'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: '#',
            name: 'LinkedIn',
            color: 'hover:bg-blue-600'
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: '#',
            name: 'Email',
            color: 'hover:bg-red-500'
        },
    ];

    return (
        <>
            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-40 ${showScrollTop
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 pointer-events-none'
                        }`}
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}

            {/* Footer */}
            <footer className={`bg-gray-900 text-gray-300 border-t border-gray-800 ${className}`}>
                <div className="container mx-auto px-6 py-12">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <Link2 className="w-8 h-8 text-blue-500" />
                                <span className="text-2xl font-bold text-white">Shortly</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md text-lg">
                                Transform long URLs into powerful, trackable short links that drive engagement and deliver insights for your business.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-white font-semibold mb-4 text-lg">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="border-t border-gray-800 pt-8 mb-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="mb-6 lg:mb-0 text-center lg:text-left">
                                <h3 className="text-white font-semibold text-lg mb-2">
                                    Stay Updated
                                </h3>
                                <p className="text-gray-400 max-w-md">
                                    Get the latest news, updates, and tips from Shortly delivered to your inbox.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto min-w-96">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 flex-1 min-w-0"
                                />
                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {/* Copyright and Legal Links */}
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
                                <span>&copy; {currentYear} Shortly. All rights reserved.</span>
                                <div className="flex items-center space-x-4">
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                    <span className="text-gray-600">•</span>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                    <span className="text-gray-600">•</span>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Cookie Policy
                                    </a>
                                </div>
                            </div>

                            {/* Status and Additional Info */}
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>All systems operational</span>
                                </div>
                                <div className="hidden lg:flex items-center space-x-4">
                                    <span className="text-gray-600">•</span>
                                    <span>Made with ❤️ for the web</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Additional Info */}
                        <div className="flex justify-center mt-4 md:hidden text-sm text-gray-400">
                            <span>Made with ❤️ for the web</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}