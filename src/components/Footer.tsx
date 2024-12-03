import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">KARE ACM Student Chapter</h3>
            <p className="text-gray-400">
              Empowering students through technology and research opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:kareacm@klu.ac.in">kareacm@klu.ac.in</a>
              </p>
              {/* <p className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p> */}
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                KARE Campus, Krishnankoil
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About ACM
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">
                  Register for ROCS
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-400 hover:text-white transition-colors">
                  Speakers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} KARE ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}