import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ShoppingCart, Building, Users, Truck, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const countryStates: Record<string, string[]> = {
  Nigeria: [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
    "Taraba", "Yobe", "Zamfara"
  ],
  Ghana: [
    "Ashanti", "Bono", "Bono East", "Ahafo", "Central", "Eastern", "Greater Accra",
    "North East", "Northern", "Oti", "Savannah", "Upper East", "Upper West", "Volta",
    "Western", "Western North"
  ],
  Kenya: [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kiambu", "Machakos",
    "Uasin Gishu", "Kajiado", "Kilifi", "Nyeri", "Meru", "Laikipia"
  ],
  "South Africa": [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
    "Mpumalanga", "North West", "Northern Cape", "Western Cape"
  ],
  "United Kingdom": [
    "England", "Scotland", "Wales", "Northern Ireland"
  ],
  "United States": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ],
  Other: [],
};

const distributorSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  businessAddress: z.string().min(5, "Please enter your business address"),
  country: z.string().min(1, "Please select a country"),
  state: z.string().optional(),
  city: z.string().min(1, "Please enter your city"),

  yearsInDistribution: z.string().min(1, "Please select your experience"),
  currentlyDistributesBeverages: z.string().min(1, "Please select an option"),
  currentBrands: z.string().optional(),
  monthlySalesCapacity: z.string().min(1, "Please enter your estimated capacity"),
  hasWarehouse: z.string().min(1, "Please select an option"),
  warehouseSize: z.string().optional(),

  areasCovered: z.string().min(5, "Please describe the areas you can cover"),
  deliveryVehicles: z.string().min(1, "Please enter the number of vehicles"),
  hasSalesReps: z.string().min(1, "Please select an option"),
  salesRepsCount: z.string().optional(),

  canMeetMinimumOrder: z.string().min(1, "Please select an option"),
  distributorCategory: z.string().min(1, "Please select a category"),

  products: z.array(z.string()).min(1, "Please select at least one product"),
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
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      businessAddress: "",
      country: "",
      state: "",
      city: "",
      yearsInDistribution: "",
      currentlyDistributesBeverages: "",
      currentBrands: "",
      monthlySalesCapacity: "",
      hasWarehouse: "",
      warehouseSize: "",
      areasCovered: "",
      deliveryVehicles: "",
      hasSalesReps: "",
      salesRepsCount: "",
      canMeetMinimumOrder: "",
      distributorCategory: "",
      products: [],
    },
  });

  const selectedCountry = form.watch("country");
  const statesForCountry = selectedCountry ? countryStates[selectedCountry] || [] : [];

  const products = [
    "Ojaja Cola",
    "Orange Drink",
    "Ojaja Bitters",
    "Whisky Cola",
    "Ginger Lemon Honey",
    "Ginger Vodka",
    "Ojaja Water"
  ];

  const handleProductToggle = (product: string) => {
    const currentProducts = form.getValues("products");
    const updatedProducts = currentProducts.includes(product)
      ? currentProducts.filter(p => p !== product)
      : [...currentProducts, product];
    form.setValue("products", updatedProducts);
  };

  const formatEmailBody = (data: DistributorFormData): string => {
    return `
=== OJAJA DRINKS DISTRIBUTOR APPLICATION ===

--- SECTION 1: Personal / Company Details ---
Full Name: ${data.fullName}
Company Name: ${data.companyName}
Phone Number: ${data.phone}
Email Address: ${data.email}
Business Address: ${data.businessAddress}
Country: ${data.country}
State: ${data.state || "N/A"}
City: ${data.city}

--- SECTION 2: Business Capacity ---
Years in Distribution: ${data.yearsInDistribution}
Currently Distributes Beverages: ${data.currentlyDistributesBeverages}
Current Brands: ${data.currentBrands || "N/A"}
Estimated Monthly Sales Capacity: ${data.monthlySalesCapacity}
Has Warehouse: ${data.hasWarehouse}
Warehouse Size: ${data.warehouseSize || "N/A"}

--- SECTION 3: Coverage & Logistics ---
Areas Covered: ${data.areasCovered}
Number of Delivery Vehicles: ${data.deliveryVehicles}
Has Sales Reps: ${data.hasSalesReps}
Number of Sales Reps: ${data.salesRepsCount || "N/A"}

--- SECTION 4: Financial Commitment ---
Can Meet Minimum Order Requirements: ${data.canMeetMinimumOrder}
Preferred Distributor Category: ${data.distributorCategory}

--- Product Interest ---
Products: ${data.products.join(", ")}
    `.trim();
  };

  const onSubmit = async (data: DistributorFormData) => {
    setIsSubmitting(true);
    try {
      const response = await supabase.functions.invoke('send-distributor-email', {
        body: data,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: "Application Submitted!",
        description: "Your distributor application has been sent successfully. We'll get back to you soon!",
      });

      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {/* SECTION 1: Personal / Company Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Section 1: Personal / Company Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="Your Full Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl><Input placeholder="Your Company Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl><Input placeholder="+234 xxx xxx xxxx" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="businessAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Address *</FormLabel>
                    <FormControl><Textarea placeholder="Enter your full business address..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue("state", "");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.keys(countryStates).map((country) => (
                            <SelectItem key={country} value={country}>{country}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="state" render={({ field }) => (
                    <FormItem>
                      <FormLabel>State / Region</FormLabel>
                      {statesForCountry.length > 0 ? (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {statesForCountry.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <FormControl><Input placeholder="Enter state/region" {...field} /></FormControl>
                      )}
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl><Input placeholder="Enter your city" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* SECTION 2: Business Capacity */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Section 2: Business Capacity
                </h3>

                <FormField control={form.control} name="yearsInDistribution" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years in distribution business *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-wrap gap-4 pt-2">
                        {["0–1 year", "1–3 years", "3–5 years", "5+ years"].map((opt) => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={`years-${opt}`} />
                            <Label htmlFor={`years-${opt}`} className="cursor-pointer">{opt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="currentlyDistributesBeverages" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you currently distribute beverages? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Yes" id="bev-yes" />
                          <Label htmlFor="bev-yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No" id="bev-no" />
                          <Label htmlFor="bev-no" className="cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {form.watch("currentlyDistributesBeverages") === "Yes" && (
                  <FormField control={form.control} name="currentBrands" render={({ field }) => (
                    <FormItem>
                      <FormLabel>If yes, which brands?</FormLabel>
                      <FormControl><Input placeholder="e.g. Coca-Cola, Pepsi, etc." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}

                <FormField control={form.control} name="monthlySalesCapacity" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated monthly sales capacity *</FormLabel>
                    <FormControl><Input placeholder="e.g. 500 cases, ₦2,000,000, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="hasWarehouse" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have a warehouse? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Yes" id="wh-yes" />
                          <Label htmlFor="wh-yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No" id="wh-no" />
                          <Label htmlFor="wh-no" className="cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {form.watch("hasWarehouse") === "Yes" && (
                  <FormField control={form.control} name="warehouseSize" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse size (optional)</FormLabel>
                      <FormControl><Input placeholder="e.g. 500 sqm, 2000 sqft" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}
              </div>

              {/* SECTION 3: Coverage & Logistics */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Section 3: Coverage & Logistics
                </h3>

                <FormField control={form.control} name="areasCovered" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas you can cover *</FormLabel>
                    <FormControl><Textarea placeholder="Describe the cities, towns, or regions you can cover..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="deliveryVehicles" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of delivery vehicles *</FormLabel>
                    <FormControl><Input placeholder="e.g. 3" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="hasSalesReps" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have sales reps? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Yes" id="sr-yes" />
                          <Label htmlFor="sr-yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No" id="sr-no" />
                          <Label htmlFor="sr-no" className="cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {form.watch("hasSalesReps") === "Yes" && (
                  <FormField control={form.control} name="salesRepsCount" render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many?</FormLabel>
                      <FormControl><Input placeholder="e.g. 5" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}
              </div>

              {/* SECTION 4: Financial Commitment */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Section 4: Financial Commitment
                </h3>

                <FormField control={form.control} name="canMeetMinimumOrder" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are you able to meet minimum order requirements? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Yes" id="mo-yes" />
                          <Label htmlFor="mo-yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No" id="mo-no" />
                          <Label htmlFor="mo-no" className="cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="distributorCategory" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred distributor category *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-wrap gap-4 pt-2">
                        {["Major Distributor", "Sub-Distributor", "Retail Partner"].map((cat) => (
                          <div key={cat} className="flex items-center space-x-2">
                            <RadioGroupItem value={cat} id={`cat-${cat}`} />
                            <Label htmlFor={`cat-${cat}`} className="cursor-pointer">{cat}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Product Interest */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Product Interest
                </h3>

                <FormField control={form.control} name="products" render={({ field }) => (
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
                )} />
              </div>

              {/* Submit */}
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
