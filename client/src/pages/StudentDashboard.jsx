import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <nav className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <Link to="/" className="text-primary-600 hover:underline">← Back to Home</Link>
      </nav>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">🔥 Streak</h3>
          <p className="text-4xl font-bold text-amber-500">12 Days</p>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">🏆 XP Progress</h3>
          <p className="text-4xl font-bold text-primary-500">2,450</p>
          <div className="w-full bg-slate-200 h-2 rounded mt-2"><div className="bg-primary-500 h-2 rounded w-3/4"></div></div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">✅ Quizzes</h3>
          <p className="text-4xl font-bold text-emerald-500">47 Completed</p>
        </motion.div>
      </div>
    </div>
  )
}