'use client';

// navbar component

import { useState, useEffect } from 'react';
import { Link2, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

/**
 * @typedef {Object} NavbarProps
 * @property {(isDark: boolean) => void} [onThemeChange]
 * @property {string} [className]
 */

/**
 * @param {NavbarProps} props
 */
export default function Navbar({ onThemeChange, className = '' }) {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isDark = localStorage.getItem('darkMode') === 'true' ||
            (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('darkMode', darkMode.toString());
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            onThemeChange?.(darkMode);
        }
    }, [darkMode, mounted, onThemeChange]);

    const navigation = [
        { name: 'Features', href: '#features' },
        { name: 'Shorten', href: '/shorten' },
        // {
        //     name: 'Solutions',
        //     href: '#',
        //     dropdown: [
        //         { name: 'Marketing', href: '#' },
        //         { name: 'Social Media', href: '#' },
        //         { name: 'E-commerce', href: '#' },
        //         { name: 'Enterprise', href: '#' },
        //     ]
        // },
        { name: 'API', href: '#' },
        { name: 'Documentation', href: '#' },
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    if (!mounted) {
        return (
            <nav className={`bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 ${className}`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="animate-pulse h-8 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            <nav className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 ${className}`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3">
                            <Link2 className="w-8 h-8 text-blue-500" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                Shortly
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.dropdown ? (
                                        <>
                                            <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                                <span>{item.name}</span>
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1 z-50">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <a
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                                                    >
                                                        {dropdownItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                            >
                                Sign In
                            </a>

                            <a
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get Started Free
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center space-x-2">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <div className="container mx-auto px-6 py-4">
                            <div className="flex flex-col space-y-4">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <div className="space-y-2">
                                                <div className="font-medium text-gray-900 dark:text-white py-2">
                                                    {item.name}
                                                </div>
                                                <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <a
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            {dropdownItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                                    <a
                                        href="#"
                                        className="block w-full text-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        onClick={closeMobileMenu}
                                    >
                                        Sign In
                                    </a>
                                    <a
                                        href="#"
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-lg"
                                        onClick={closeMobileMenu}
                                    >
                                        Get Started Free
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Overlay for mobile menu */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}
        </>
    );
}