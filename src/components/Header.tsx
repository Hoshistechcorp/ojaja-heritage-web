import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Header = () => {
  const [videoOpen, setVideoOpen] = useState(false);

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
            <a href="#home" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">HOME</a>
            <a href="#about" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">ABOUT</a>
            <a href="#products" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">PRODUCTS</a>
            <a href="#ingredients" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">INGREDIENTS</a>
            <a href="#contact" className="font-medium text-foreground hover:text-ojaja-pink transition-colors">CONTACT</a>
          </nav>

          {/* Watch Our Story Button */}
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-ojaja-orange to-ojaja-pink text-white rounded-full px-5 py-2 text-sm font-semibold hover:shadow-elegant">
                <Play className="w-4 h-4 mr-1.5" />
                Watch Our Story
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
