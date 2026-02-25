import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Loader2 } from "lucide-react";

const departments = [
  "Manufacturing & Production",
  "Quality Assurance & Compliance",
  "Supply Chain & Logistics",
  "Sales & Trade Marketing",
  "Brand, Marketing & Communications",
  "Finance & Accounts",
  "Human Resources & Administration",
  "Research & Product Development",
  "Corporate Strategy & Business Development",
  "IT & Digital Systems",
  "Customer Experience & Support",
];

const CareersCVForm = () => {
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDepartment: "",
    yearsOfExperience: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.preferredDepartment || !form.yearsOfExperience) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      let cvUrl = "";

      // Upload CV if selected
      const file = fileRef.current?.files?.[0];
      if (file) {
        if (file.type !== "application/pdf") {
          toast({ title: "Only PDF files are accepted", variant: "destructive" });
          setLoading(false);
          return;
        }
        const filePath = `${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage.from("cvs").upload(filePath, file);
        if (uploadError) throw uploadError;
        cvUrl = filePath;
      }

      const { error } = await supabase.functions.invoke("send-career-email", {
        body: { ...form, cvUrl },
      });

      if (error) throw error;

      toast({ title: "Application submitted successfully!", description: "We'll review your profile and get back to you." });
      setForm({ fullName: "", email: "", phone: "", preferredDepartment: "", yearsOfExperience: "" });
      setFileName("");
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to submit application", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">Submit Your CV</h2>
        <p className="text-muted-foreground text-center mb-10">If no current role matches your profile, submit your CV for future consideration.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
            <Input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234..." />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Department *</label>
              <Select value={form.preferredDepartment} onValueChange={(v) => setForm({ ...form, preferredDepartment: v })}>
                <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                <SelectContent>
                  {departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Years of Experience *</label>
              <Select value={form.yearsOfExperience} onValueChange={(v) => setForm({ ...form, yearsOfExperience: v })}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0–1 years</SelectItem>
                  <SelectItem value="2-3">2–3 years</SelectItem>
                  <SelectItem value="4-5">4–5 years</SelectItem>
                  <SelectItem value="6-10">6–10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Upload CV (PDF only)</label>
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-ojaja-pink/50 transition-colors"
            >
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">{fileName || "Click to upload your CV"}</p>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-ojaja text-primary-foreground rounded-full py-6 text-base font-semibold">
            {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</> : "Join Ojaja Talent Pool"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CareersCVForm;
