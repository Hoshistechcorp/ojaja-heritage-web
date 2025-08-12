import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Search } from "lucide-react";

const Header = () => {
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-ojaja-light">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-ojaja-light">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;