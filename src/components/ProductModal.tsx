import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Zap, Users, Sparkles, Check } from "lucide-react";

interface ProductModalProps {
  product: {
    name: string;
    description: string;
    image: string;
    rating?: number;
    benefits: string[];
    comingSoon: boolean;
  };
  children: React.ReactNode;
}

const ProductModal = ({ product, children }: ProductModalProps) => {
  // Product-specific content
  const getProductContent = (productName: string) => {
    switch (productName) {
      case "Ojaja Cola":
        return {
          tagline: "Bold. African. Original.",
          subtitle: "Taste the Royal Difference",
          mainDescription: "Ojaja Cola is not your average soda — it's a bold fusion of classic cola fizz, the earthy richness of kola nut, and the zesty kick of ginger. Crafted for those who crave refreshment with depth, Ojaja Cola is a vibrant tribute to African roots and rhythm.",
          features: [
            "Classic cola taste with a local twist",
            "Available in PET bottle & can"
          ],
          specialFeatures: [
            {
              icon: Sparkles,
              title: "Kola Nut Essence",
              description: "Naturally energizing, deeply traditional"
            },
            {
              icon: Zap,
              title: "Ginger Infusion", 
              description: "Spicy, invigorating, immune-boosting"
            },
            {
              icon: Star,
              title: "Cola Body",
              description: "Smooth, crisp, and satisfying"
            }
          ],
          perfectFor: [
            "Midday energy boost",
            "Social gatherings with a twist",
            "Those who love cola but want something uniquely African with low sugar"
          ],
          closingStatement: "Ojaja Cola – It's not just a drink, it's a cultural experience in a bottle."
        };
      
      case "Orange":
        return {
          tagline: "Bursting with Citrus. Rooted in Africa.",
          subtitle: "Sunshine in Every Sip",
          mainDescription: "Ojaja Orange delivers a zesty splash of real orange flavor blended with the natural vitality of African citrus fruits. It's not just refreshing — it's rejuvenating, packed with nutrients and designed to uplift your day with every fizzy, fruity gulp.",
          features: [
            "Vitamin-rich, zesty citrus soda",
            "Available in PET bottle & can"
          ],
          specialFeatures: [
            {
              icon: Heart,
              title: "Real Orange Juice Extract",
              description: "Rich in Vitamin C for immune support"
            },
            {
              icon: Zap,
              title: "African Citrus Zest", 
              description: "Adds boldness and a tangy edge"
            },
            {
              icon: Sparkles,
              title: "Lightly Sparkling",
              description: "Crisp, smooth, and not overly sweet"
            }
          ],
          perfectFor: [
            "Hot afternoons and beach vibes",
            "A nutritious soda alternative",
            "Kids, adults — the whole family!"
          ],
          closingStatement: "Ojaja Orange – Bright, Bold, and Proudly African."
        };

      case "Ojaja Bitters":
        return {
          tagline: "Bold Taste. Deep Healing. Purely African.",
          subtitle: "From Ancestral Wisdom to Modern Wellness",
          mainDescription: "Ojaja Bitters is more than just a drink — it's a power-packed herbal elixir crafted with time-tested African botanicals. It strengthens the core and restores inner balance — naturally enhancing performance and confidence without chemicals or side effects, every sip connects you to generations of natural healing.",
          features: [
            "Premium herbal wellness drink",
            "Available in PET bottle & can"
          ],
          specialFeatures: [
            {
              icon: Heart,
              title: "Natural Herbs & Extracts",
              description: "Cleanse the body naturally, boost digestion and immunity"
            },
            {
              icon: Sparkles,
              title: "Zero Artificial Sweeteners", 
              description: "100% plant-based potency"
            },
            {
              icon: Zap,
              title: "Hormonal Balance & Stamina",
              description: "Supports hormonal balance and enhances sexual stamina & recovery"
            }
          ],
          perfectFor: [
            "Wellness-conscious consumers",
            "Adults embracing herbal wellness for total body performance"
          ],
          closingStatement: "Ojaja Bitters – Feel the power of tradition. Sip into natural wellness."
        };

      case "Whisky Cola":
        return {
          tagline: "Smooth Heat. Cola Cool. African Class.",
          subtitle: "Where Tradition Meets Sophistication",
          mainDescription: "Ojaja Whisky Cola is an elegant fusion of bold cola flavor and the smoky depth of premium whisky essence — designed for those who love a mature taste without the buzz. With every sip, you're embracing the smooth edge of African nightlife and royal flair.",
          features: [
            "Bold blend of cola & whisky essence",
            "Available in cans and PET bottle"
          ],
          specialFeatures: [
            {
              icon: Star,
              title: "Whisky Essence (Non-Alcoholic Option)",
              description: "Rich, woody notes for that grown-up feel"
            },
            {
              icon: Zap,
              title: "Classic Cola Kick", 
              description: "Carbonated and refreshing"
            },
            {
              icon: Heart,
              title: "Perfect for Social Settings",
              description: "Without the side effects"
            }
          ],
          perfectFor: [
            "Dinner dates & celebrations",
            "Stylish hangouts & sober sipping",
            "Bold taste with a royal twist"
          ],
          closingStatement: "Ojaja Whisky Cola – Sophisticated sips, African soul."
        };

      default:
        return {
          tagline: "Premium African Beverage",
          subtitle: "Crafted with Tradition",
          mainDescription: `Experience the authentic taste of ${productName}, carefully crafted using traditional African ingredients and modern beverage science.`,
          features: [
            "Made with natural ingredients",
            "Rooted in African tradition"
          ],
          specialFeatures: [
            {
              icon: Heart,
              title: "Health Benefits",
              description: "Packed with natural goodness"
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              description: "Carefully crafted excellence"
            }
          ],
          perfectFor: [
            "Health-conscious individuals",
            "Those seeking authentic flavors",
            "Premium beverage enthusiasts"
          ],
          closingStatement: `${productName} – Where tradition meets innovation.`
        };
    }
  };

  const content = getProductContent(product.name);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Hero Section */}
          <div className="relative h-64 bg-gradient-to-r from-ojaja-orange to-ojaja-pink overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <img 
              src={product.image}
              alt={product.name}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 h-48 w-auto object-contain drop-shadow-2xl"
            />
            <div className="relative z-10 p-8 text-white">
              <h1 className="font-heading font-bold text-4xl mb-2">{content.tagline}</h1>
              <h2 className="text-2xl font-semibold mb-4">{content.subtitle}</h2>
              <h3 className="text-xl">{product.name}</h3>
              {product.rating && (
                <div className="flex items-center mt-4">
                  <Star className="w-5 h-5 text-yellow-300 fill-current mr-1" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="ml-2 text-sm opacity-90">Customer Rating</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Main Description */}
            <div className="mb-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                {content.mainDescription}
              </p>
              
              <div className="space-y-2">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-ojaja-green mr-3" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Makes It Special */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl text-ojaja-pink mb-6">
                What Makes It Special?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {content.specialFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-ojaja-light rounded-xl">
                    <feature.icon className="w-8 h-8 text-ojaja-blue mx-auto mb-3" />
                    <h4 className="font-semibold text-ojaja-blue mb-2">{feature.title}</h4>
                    <p className="text-sm text-foreground/80">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Benefits */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl text-ojaja-pink mb-4">
                Health Benefits
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <Badge key={index} className="bg-ojaja-green text-white px-3 py-1">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Perfect For */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl text-ojaja-pink mb-4">
                Perfect For:
              </h3>
              <div className="space-y-3">
                {content.perfectFor.map((use, index) => (
                  <div key={index} className="flex items-center">
                    <Users className="w-5 h-5 text-ojaja-orange mr-3" />
                    <span className="text-foreground">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="bg-gradient-to-r from-ojaja-light to-white p-6 rounded-xl text-center">
              <p className="text-lg font-semibold text-ojaja-blue italic">
                {content.closingStatement}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 justify-center">
              <Button className="bg-ojaja-orange hover:bg-ojaja-pink text-white px-8">
                Order Now
              </Button>
              <Button variant="outline" className="border-ojaja-blue text-ojaja-blue hover:bg-ojaja-blue hover:text-white px-8">
                Find Distributors
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;