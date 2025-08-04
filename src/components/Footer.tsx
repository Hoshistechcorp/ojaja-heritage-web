import { Crown, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-ojaja-blue text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-ojaja-pink">OJAJA</div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Revitalizing families through distinctly African, health-enhancing beverage experiences. 
              Rooted in royal heritage, crafted for wellness.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ojaja-orange hover:text-white transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ojaja-orange hover:text-white transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ojaja-orange hover:text-white transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ojaja-orange hover:text-white transition-all cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#about" className="hover:text-ojaja-orange transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-ojaja-orange transition-colors">Products</a></li>
              <li><a href="#ingredients" className="hover:text-ojaja-orange transition-colors">Health Benefits</a></li>
              <li><a href="#" className="hover:text-ojaja-orange transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-ojaja-orange transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">Contact Us</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-ojaja-orange mr-3 mt-0.5" />
                <div>
                  <a href="mailto:info@ojajadrinks.com" className="hover:text-ojaja-orange transition-colors">
                    info@ojajadrinks.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-ojaja-orange mr-3 mt-0.5" />
                <div>
                  <a href="#" className="hover:text-ojaja-orange transition-colors">
                    www.ojajadrinks.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Ojaja Pan Africa Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-ojaja-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ojaja-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ojaja-orange transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          {/* Heritage Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-ojaja-orange/20 rounded-full">
              <div className="w-4 h-4 bg-ojaja-pink rounded-full mr-2"></div>
              <span className="text-ojaja-orange text-sm font-medium">
                Proudly Nigerian • Royal Heritage • Cultural Pride
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;