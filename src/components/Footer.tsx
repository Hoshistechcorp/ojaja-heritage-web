import { Crown, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-african-green text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Crown className="h-8 w-8 text-royal-gold mr-3" />
              <span className="font-heading font-bold text-2xl">OJAJA DRINKS</span>
            </div>
            <p className="text-cream leading-relaxed mb-6 max-w-md">
              Revitalizing families through distinctly African, health-enhancing beverage experiences. 
              Rooted in royal heritage, crafted for wellness.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-african-green transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-african-green transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-african-green transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-african-green transition-all cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3 text-cream">
              <li><a href="#" className="hover:text-royal-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Health Benefits</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">Contact Us</h3>
            <div className="space-y-4 text-cream">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-royal-gold mr-3 mt-0.5" />
                <div>
                  <a href="mailto:info@ojajadrinks.com" className="hover:text-royal-gold transition-colors">
                    info@ojajadrinks.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-royal-gold mr-3 mt-0.5" />
                <div>
                  <a href="#" className="hover:text-royal-gold transition-colors">
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
            <div className="text-cream text-sm">
              © 2024 Ojaja Pan Africa Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-cream">
              <a href="#" className="hover:text-royal-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-royal-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-royal-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          {/* Heritage Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-royal-gold/20 rounded-full">
              <Crown className="w-4 h-4 text-royal-gold mr-2" />
              <span className="text-royal-gold text-sm font-medium">
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