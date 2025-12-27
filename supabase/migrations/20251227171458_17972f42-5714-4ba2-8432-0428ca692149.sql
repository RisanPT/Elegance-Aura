-- Create products table for Chrome Traders jewelry catalog
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('earrings', 'bangles', 'accessories')),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access for products (everyone can view the catalog)
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

-- For admin operations, we'll use service role or authenticated users
-- In production, you'd want proper admin role checks
CREATE POLICY "Authenticated users can insert products" 
ON public.products 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update products" 
ON public.products 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete products" 
ON public.products 
FOR DELETE 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products for demo
INSERT INTO public.products (title, description, price, image_url, category, is_featured) VALUES
('Golden Teardrop Earrings', 'Elegant teardrop design in 18k gold plating with delicate crystal accents', 89.00, 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600', 'earrings', true),
('Rose Quartz Studs', 'Minimalist rose quartz studs set in sterling silver', 45.00, 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600', 'earrings', false),
('Pearl Drop Hoops', 'Classic hoop earrings featuring natural freshwater pearls', 75.00, 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600', 'earrings', true),
('Twisted Gold Bangle', 'Statement twisted bangle in polished gold finish', 125.00, 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600', 'bangles', true),
('Diamond Cut Cuff', 'Sleek diamond-cut cuff bracelet with adjustable fit', 95.00, 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600', 'bangles', false),
('Layered Chain Bangle Set', 'Set of three delicate layered bangles in mixed metals', 110.00, 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600', 'bangles', true),
('Crystal Hair Clip', 'Vintage-inspired crystal hair clip for elegant updos', 35.00, 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600', 'accessories', false),
('Silk Scarf Ring', 'Minimalist scarf ring in brushed gold', 28.00, 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600', 'accessories', true),
('Pearl Brooch', 'Timeless pearl brooch with Art Deco inspired design', 55.00, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600', 'accessories', false);