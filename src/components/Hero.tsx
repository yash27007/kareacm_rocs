import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="animate-fade-in-up">
          <p className="text-blue-300 font-medium mb-2 tracking-wide">KARE ACM STUDENT CHAPTER PRESENTS</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ROCS
            <span className="block text-2xl md:text-3xl text-blue-300 mt-2">
              Research Opportunities in Computer Science
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-300">
            Join us for an insightful journey into the world of computer science research. 
            Connect with leading researchers and discover your path in academia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#register" 
              className="group bg-blue-500 hover:bg-blue-600 transition-all px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              Register Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#agenda" 
              className="group border border-white/30 hover:bg-white/10 transition-all px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              View Agenda
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}