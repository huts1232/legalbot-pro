'use client'

import { useState, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const supabase = useMemo(() => {
    if (!supabaseUrl || !supabaseAnonKey) return null
    return createClient(supabaseUrl, supabaseAnonKey)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase || !email) return

    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }])
      
      if (!error) {
        setEmail('')
        alert('Thank you for joining the waitlist!')
      }
    } catch (err) {
      console.error('Error:', err)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            LegalBot Pro
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            AI-powered legal assistant that provides instant answers to your legal questions
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Get Legal Advice in Seconds
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Our advanced AI analyzes thousands of legal documents to provide accurate, 
                personalized legal guidance for your specific situation.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Answers</h3>
              <p className="text-blue-100">
                Get immediate responses to legal questions without waiting for appointments
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Knowledge</h3>
              <p className="text-blue-100">
                Trained on comprehensive legal databases and case law
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Confidential</h3>
              <p className="text-blue-100">
                Your legal queries are completely private and secure
              </p>
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Coming Soon
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              LegalBot Pro is currently in development. Join our waitlist to be notified 
              when we launch and get exclusive early access to the platform.
            </p>
          </section>
        </main>

        <footer className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 LegalBot Pro. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}