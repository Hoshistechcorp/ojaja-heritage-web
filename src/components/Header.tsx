import { Button } from "@/components/ui/button";
import { Phone, Play, Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a40c09f8-c677-40fa-898f-7d8ea03a741c.png" 
              alt="Ojaja Drinks Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-ojaja-orange" />
            <div>
              <div className="font-medium">Get Free Delivery</div>
              <div className="text-ojaja-pink font-semibold">+234-800-OJAJA</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/#home" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">HOME</a>
            <a href="/#about" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">ABOUT</a>
            <a href="/#products" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">PRODUCTS</a>
            <Link to="/careers" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">CAREERS</Link>
            <a href="/#contact" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">CONTACT</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Watch Our Story Button */}
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-ojaja-orange to-ojaja-pink text-white rounded-full px-3 py-2 text-xs sm:px-5 sm:text-sm font-semibold hover:shadow-elegant">
                  <Play className="w-4 h-4 mr-1 sm:mr-1.5" />
                  <span className="hidden sm:inline">Watch Our Story</span>
                  <span className="sm:hidden">Our Story</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-0">
                <div className="relative aspect-video w-full">
                  {videoOpen && (
                    <video
                      src="/videos/ojaja-story.mp4"
                      controls
                      autoPlay
                      className="w-full h-full rounded-lg"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border/50 pt-4 flex flex-col space-y-3">
            <a href="/#home" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground hover:text-ojaja-pink transition-colors">HOME</a>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground hover:text-ojaja-pink transition-colors">ABOUT</a>
            <a href="/#products" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground hover:text-ojaja-pink transition-colors">PRODUCTS</a>
            <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground hover:text-ojaja-pink transition-colors">CAREERS</Link>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground hover:text-ojaja-pink transition-colors">CONTACT</a>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
              <Phone className="h-4 w-4 text-ojaja-orange" />
              <div>
                <div className="font-medium">Get Free Delivery</div>
                <div className="text-ojaja-pink font-semibold">+234-800-OJAJA</div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
