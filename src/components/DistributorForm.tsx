import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ShoppingCart, MapPin, Users, Phone, Mail, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const distributorSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  businessType: z.string().min(1, "Please select a business type"),
  experienceYears: z.string().min(1, "Please select your experience level"),
  products: z.array(z.string()).min(1, "Please select at least one product"),
  targetMarket: z.string().min(10, "Please describe your target market"),
  businessPlan: z.string().min(20, "Please provide details about your business plan"),
});

type DistributorFormData = z.infer<typeof distributorSchema>;

interface DistributorFormProps {
  children: React.ReactNode;
}

const DistributorForm = ({ children }: DistributorFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DistributorFormData>({
    resolver: zodResolver(distributorSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      location: "",
      businessType: "",
      experienceYears: "",
      products: [],
      targetMarket: "",
      businessPlan: "",
    },
  });

  const products = [
    "Ojaja Cola",
    "Orange Drink",
    "Ojaja Bitters",
    "Whisky Cola",
    "Ginger Lemon Honey",
    "Ginger Vodka",
    "Ojaja Water"
  ];

  const onSubmit = async (data: DistributorFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Distributor application:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 2-3 business days.",
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProductToggle = (product: string) => {
    const currentProducts = form.getValues("products");
    const updatedProducts = currentProducts.includes(product)
      ? currentProducts.filter(p => p !== product)
      : [...currentProducts, product];
    form.setValue("products", updatedProducts);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ShoppingCart className="w-8 h-8 text-ojaja-orange" />
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-ojaja-blue">
                Become a Distributor
              </h2>
            </div>
            <p className="text-muted-foreground text-sm lg:text-base">
              Join the Ojaja family and bring authentic African beverages to your community. 
              Fill out this form to start your distribution journey with us.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Business Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Business Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="retail">Retail Store</SelectItem>
                            <SelectItem value="wholesale">Wholesale</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Bar</SelectItem>
                            <SelectItem value="supermarket">Supermarket</SelectItem>
                            <SelectItem value="convenience">Convenience Store</SelectItem>
                            <SelectItem value="online">Online Business</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+234 xxx xxx xxxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Experience & Products */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Experience & Product Interest
                </h3>

                <FormField
                  control={form.control}
                  name="experienceYears"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Distribution Experience *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years (New to distribution)</SelectItem>
                          <SelectItem value="2-5">2-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years (Experienced)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="products"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Products of Interest * (Select all that apply)</FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border rounded-md">
                          {products.map((product) => (
                            <div
                              key={product}
                              className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                field.value.includes(product)
                                  ? "border-ojaja-orange bg-ojaja-light"
                                  : "border-gray-200 hover:border-ojaja-orange/50"
                              }`}
                              onClick={() => handleProductToggle(product)}
                            >
                              <span className="text-sm font-medium">{product}</span>
                            </div>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Business Details */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="targetMarket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Market *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your target customers, market size, and distribution channels..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessPlan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Plan & Goals *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your business strategy, sales goals, and how you plan to promote Ojaja products..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-ojaja-orange hover:bg-ojaja-pink text-white px-8 py-3 flex-1"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="border-ojaja-blue text-ojaja-blue hover:bg-ojaja-blue hover:text-white px-8 py-3"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DistributorForm;