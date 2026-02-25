
-- Create enum for admin role
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles: only admins can read
CREATE POLICY "Admins can view roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create distributor_applications table
CREATE TABLE public.distributor_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    company_name TEXT,
    phone TEXT,
    email TEXT,
    business_address TEXT,
    country TEXT,
    state TEXT,
    city TEXT,
    years_in_distribution TEXT,
    currently_distributes_beverages TEXT,
    current_brands TEXT,
    monthly_sales_capacity TEXT,
    has_warehouse TEXT,
    warehouse_size TEXT,
    areas_covered TEXT,
    delivery_vehicles TEXT,
    has_sales_reps TEXT,
    sales_reps_count TEXT,
    can_meet_minimum_order TEXT,
    distributor_category TEXT,
    products TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.distributor_applications ENABLE ROW LEVEL SECURITY;

-- Only admins can read applications
CREATE POLICY "Admins can view applications"
ON public.distributor_applications FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Edge functions (service role) can insert
CREATE POLICY "Service role can insert applications"
ON public.distributor_applications FOR INSERT
WITH CHECK (true);
