// components/navigation/Footer.tsx
export function Footer() {
    return (
      <footer className="bg-school-purple text-white mt-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 border-b border-white/20 pb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li>12 Knowledge Boulevard</li>
                <li>Academic City</li>
                <li>contact@maranatha.edu</li>
                <li>+234 800 123 4567</li>
              </ul>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['Admissions', 'Calendar', 'Portal', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-school-yellow transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6">Connect</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                  <a 
                    key={platform}
                    href="#"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Add social icons here */}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 rounded-full px-6 py-3 placeholder:text-white/70"
                />
                <button className="bg-school-yellow text-school-purple px-6 py-3 rounded-full font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="pt-8 text-center text-white/70">
            © 2024 Maranatha International Schools. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }