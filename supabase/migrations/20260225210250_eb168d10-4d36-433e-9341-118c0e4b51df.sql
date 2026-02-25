
-- Create career_applications table
CREATE TABLE public.career_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_department TEXT NOT NULL,
  years_of_experience TEXT NOT NULL,
  cv_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit
CREATE POLICY "Anyone can submit career applications"
ON public.career_applications FOR INSERT
WITH CHECK (true);

-- Only admins can view
CREATE POLICY "Admins can view career applications"
ON public.career_applications FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Create CVs storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('cvs', 'cvs', false);

-- Allow anyone to upload CVs
CREATE POLICY "Anyone can upload CVs"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'cvs');

-- Only admins can read CVs
CREATE POLICY "Admins can read CVs"
ON storage.objects FOR SELECT
USING (bucket_id = 'cvs' AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));
