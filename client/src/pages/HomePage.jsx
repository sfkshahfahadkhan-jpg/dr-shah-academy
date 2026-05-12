import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-heading font-bold">Dr. Shah Fahad Khan Academy</h1>
        <div className="flex gap-4 items-center">
          <button onClick={toggleTheme} className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700">
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <Link to="/dashboard" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">Dashboard</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Inspiring Academic Excellence,<br />One Student at a Time
        </motion.h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          MBBS Doctor • 6+ Years Experience • 95% A-Level Pass Rate • 100% MCAT Success
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/dashboard" className="bg-primary-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-primary-700">Start Free Trial</Link>
          <a href="https://youtube.com/shahfahadkhan" target="_blank" className="border-2 border-slate-300 dark:border-slate-600 px-6 py-3 rounded-xl text-lg hover:bg-slate-100 dark:hover:bg-slate-800">Watch Lessons</a>
        </div>
      </main>
    </div>
  )
}