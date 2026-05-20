
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation requests"
ON public.consultation_requests
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultation requests"
ON public.consultation_requests
FOR SELECT
TO authenticated
USING (true);
