
import React from 'react';
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="bg-webascend-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-webascend-blue to-webascend-purple flex items-center justify-center text-white font-bold text-xl">
                  W
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-webascend-cyan"></div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Web</span>
                <span className="text-webascend-cyan">Ascend</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Taking your business to new heights with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-webascend-purple transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </a>
              ))}
            </div>
            <br />
            <div>
      <h4 className="flex text-lg font-bold mb-2">Our Address</h4>
      <p className="text-gray-400 hover:text-webascend-cyan transition-colors">
       VILL FULDI PO REHATGAON
<br />
       TEHSIL REHATGAON DIST Harda
<br />
        461228
<br />
MADHYA PRADESH India <br />
      </p>
    </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
             <Link to="/#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      Web Development
    </Link>
              </li>
              <li>
                    <Link to="/#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      App Development
    </Link>
              </li>
              <li>
                    <Link to="/#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      Search Engine Optimization
    </Link>
              </li>
              <li>
                   <Link to="/#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">
     Shopify Store Development
    </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
             <li>
    <Link to="/#about" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      About
    </Link>
  </li>
  <li>
    <Link to="/#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      Services
    </Link>
  </li>
  <li>
    <Link to="/#testimonials" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      Testimonials
    </Link>
  </li>
  <li>
    <Link to="/#careers" className="text-gray-400 hover:text-webascend-cyan transition-colors">
      Careers
    </Link>
  </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-webascend-cyan mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sankalpgour2@gmail.com" className="text-gray-400 hover:text-webascend-cyan transition-colors">support@webascend.co.in</a>
              </li>
              <li className="flex items-start gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.53 2H21L14.4 10.09L22.14 22H15.61L10.6 15.38L4.87 22H1.4L8.39 13.27L1 2H7.66L12.3 8.97L17.53 2Z" />
                </svg>
                <a href="https://x.com/Webascend_" className="text-gray-400 hover:text-webascend-blue transition-colors">Twitter for Web Ascend</a>
              </li>
              <li className="flex items-start gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.75a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm4.88-.38a.88.88 0 1 1 0 1.75a.88.88 0 0 1 0-1.75Z" />
                </svg>
                <a href="https://www.instagram.com/webascend_/?utm_source=ig_web_button_share_sheet" className="text-gray-400 hover:text-webascend-blue transition-colors">Instagram for Web Ascend</a>
              </li>
              <li className="flex items-start gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.3V12h2.3v-1.68c0-2.27 1.35-3.52 3.42-3.52.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42V12h2.5l-.4 2.88h-2.1v6.99A10 10 0 0 0 22 12z" />
                </svg>
                <a href="https://www.facebook.com/share/16A5e3ys9r" className="text-gray-400 hover:text-webascend-blue transition-colors">Facebook for Web Ascend</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WebAscend. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
