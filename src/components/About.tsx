import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-center mb-12">About the Workshop</h2>
            <p className="text-gray-700 leading-relaxed">
              This workshop is jointly organized by ACM INDIA, Kalasalingam Academy of Research and Education and KARE ACM Student Chapter, and aims to raise awareness about the research opportunities available in Computer Science. The event will feature talks from leading experts in various research domains, including Theoretical Computer Science, Computer Systems, Machine Learning, and other related areas of Computer Science.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://kare.acm.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
              >
                Visit KARE ACM Student Chapter
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">About Kalasalingam Academy of Research and Education</h2>
            <p className="text-gray-700 leading-relaxed">
              Kalasalingam Academy of Research and Education (KARE), formerly Arulmigu Kalasalingam College of Engineering, was established in 1984 by freedom fighter and philanthropist Kalvivallal Thiru T.Kalasalingam. Located at the foothills of the Western Ghats in Tamil Nadu, the institution gained Deemed University status in 2006.
            </p>
            <p className="text-gray-700 leading-relaxed">
              KARE offers a variety of UG, PG, and Ph.D programs in Engineering, Science, Technology, and Humanities. It pioneered a B.Tech program for speech and hearing impaired students. Re-accredited with an 'A++' grade by NAAC, six UG programs are NBA Tier-1 accredited.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The institution excels in research, having secured DST funding for a National Center for Discrete Mathematics. With advanced research facilities and extensive student accommodations, KARE emphasizes holistic development through sports and extracurricular activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}