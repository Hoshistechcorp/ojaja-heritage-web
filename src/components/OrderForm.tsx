import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  "Ojaja Cola",
  "Ojaja Orange",
  "Ginger Lemon Honey",
  "Whisky Cola",
  "Ginger Vodka",
  "Ojaja Bitters",
  "Ojaja Water",
];

const packSizes = ["6-pack", "12-pack", "24-pack", "48-pack"];

const orderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(5, "Delivery address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderItem {
  product: string;
  packSize: string;
  quantity: number;
}

interface OrderFormProps {
  children: React.ReactNode;
}

const OrderForm = ({ children }: OrderFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { product: products[0], packSize: packSizes[0], quantity: 1 },
  ]);
  const { toast } = useToast();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    },
  });

  const addItem = () => {
    setOrderItems([...orderItems, { product: products[0], packSize: packSizes[0], quantity: 1 }]);
  };

  const removeItem = (index: number) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof OrderItem, value: string | number) => {
    const updated = [...orderItems];
    updated[index] = { ...updated[index], [field]: value };
    setOrderItems(updated);
  };

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    try {
      const response = await supabase.functions.invoke('send-order-email', {
        body: { ...data, items: orderItems },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: "Order Submitted!",
        description: "Your order request has been sent. We'll get back to you soon!",
      });

      form.reset();
      setOrderItems([{ product: products[0], packSize: packSizes[0], quantity: 1 }]);
      setOpen(false);
    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: "Order Failed",
        description: "There was an error sending your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ShoppingCart className="w-8 h-8 text-ojaja-orange" />
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-ojaja-blue">
                Order Now
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Orders are available in packs only. Select your products and pack sizes below.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Order Items */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink">Products</h3>
                {orderItems.map((item, index) => (
                  <div key={index} className="flex flex-wrap gap-3 items-end p-4 bg-ojaja-light rounded-xl">
                    <div className="flex-1 min-w-[140px]">
                      <label className="text-sm font-medium mb-1 block">Product</label>
                      <Select value={item.product} onValueChange={(v) => updateItem(index, "product", v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {products.map((p) => (
                            <SelectItem key={p} value={p}>{p}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-32">
                      <label className="text-sm font-medium mb-1 block">Pack Size</label>
                      <Select value={item.packSize} onValueChange={(v) => updateItem(index, "packSize", v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {packSizes.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-24">
                      <label className="text-sm font-medium mb-1 block">Qty</label>
                      <Input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value) || 1)}
                      />
                    </div>
                    {orderItems.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeItem(index)}>
                        <Minus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addItem} className="w-full border-dashed border-ojaja-blue text-ojaja-blue">
                  <Plus className="w-4 h-4 mr-2" /> Add Another Product
                </Button>
              </div>

              {/* Customer Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-ojaja-pink">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="Your Full Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl><Input placeholder="+234 xxx xxx xxxx" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl><Input placeholder="Country" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl><Input placeholder="City" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="address" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address *</FormLabel>
                    <FormControl><Input placeholder="Full delivery address" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ojaja-orange to-ojaja-pink text-white py-6 text-lg font-semibold rounded-full"
              >
                {isSubmitting ? "Submitting Order..." : "Submit Order Request"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
